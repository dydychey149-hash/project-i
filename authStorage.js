const ACCOUNTS_STORAGE_KEY = "kd-drink-accounts";
const SESSION_STORAGE_KEY = "kd-drink-session";
export const AUTH_UPDATED_EVENT = "kd-drink-auth-updated";
const PASSWORD_ITERATIONS = 120000;

function getAccounts() {
    const savedAccounts = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    return savedAccounts ? JSON.parse(savedAccounts) : [];
}

function bytesToHex(bytes) {
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(password, salt) {
    if (!window.crypto?.subtle) {
        throw new Error("Secure password storage is unavailable in this browser.");
    }

    const key = await window.crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(password),
        "PBKDF2",
        false,
        ["deriveBits"],
    );
    const bits = await window.crypto.subtle.deriveBits(
        {
            name: "PBKDF2",
            salt,
            iterations: PASSWORD_ITERATIONS,
            hash: "SHA-256",
        },
        key,
        256,
    );

    return bytesToHex(new Uint8Array(bits));
}

function saveSession(user) {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event(AUTH_UPDATED_EVENT));
}

export async function registerAccount({ name, email, password }) {
    const accounts = getAccounts();
    const normalizedEmail = email.trim().toLowerCase();

    if (accounts.some((account) => account.email === normalizedEmail)) {
        throw new Error("An account with this email already exists. Please log in.");
    }

    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const account = {
        name: name.trim(),
        email: normalizedEmail,
        salt: bytesToHex(salt),
        passwordHash: await hashPassword(password, salt),
    };

    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify([...accounts, account]));
    saveSession({ name: account.name, email: account.email });
}

export async function loginAccount({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const account = getAccounts().find((entry) => entry.email === normalizedEmail);

    if (!account) {
        throw new Error("Email or password is incorrect.");
    }

    const salt = Uint8Array.from(
        account.salt.match(/.{2}/g),
        (byte) => Number.parseInt(byte, 16),
    );
    const passwordHash = await hashPassword(password, salt);

    if (passwordHash !== account.passwordHash) {
        throw new Error("Email or password is incorrect.");
    }

    saveSession({ name: account.name, email: account.email });
}

export function getCurrentUser() {
    const savedSession = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return savedSession ? JSON.parse(savedSession) : null;
}

export function logoutAccount() {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    window.dispatchEvent(new Event(AUTH_UPDATED_EVENT));
}
