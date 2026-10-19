import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginAccount, registerAccount } from "../authStorage";

function Auth() {
    const isRegister = useLocation().pathname === "/register";
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (isRegister && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsSubmitting(true);
        try {
            if (isRegister) {
                await registerAccount({ name, email, password });
            } else {
                await loginAccount({ email, password });
            }
            navigate("/");
        } catch (submissionError) {
            setError(submissionError.message || "Unable to complete your request.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="auth-page">
            <div className="auth-card" data-scroll-reveal>
                <span className="sectionLabel">
                    {isRegister ? "JOIN KD-DRINK" : "WELCOME BACK"}
                </span>
                <h1>{isRegister ? "Create account" : "Log in"}</h1>
                <p>
                    {isRegister
                        ? "Create an account to get started."
                        : "Log in to your KD-Drink account."}
                </p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {isRegister && (
                        <label>
                            Full name
                            <input
                                type="text"
                                name="name"
                                autoComplete="name"
                                minLength="2"
                                maxLength="80"
                                required
                            />
                        </label>
                    )}
                    <label>
                        Email address
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            autoComplete={isRegister ? "new-password" : "current-password"}
                            minLength={isRegister ? 8 : undefined}
                            required
                        />
                    </label>
                    {isRegister && (
                        <label>
                            Confirm password
                            <input
                                type="password"
                                name="confirmPassword"
                                autoComplete="new-password"
                                minLength="8"
                                required
                            />
                        </label>
                    )}

                    {error && <p className="auth-error" role="alert">{error}</p>}

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting
                            ? "Please wait..."
                            : isRegister
                              ? "Create Account"
                              : "Log In"}
                    </button>
                </form>

                <p className="auth-switch">
                    {isRegister ? "Already have an account?" : "New to KD-Drink?"}{" "}
                    <Link to={isRegister ? "/login" : "/register"}>
                        {isRegister ? "Log in" : "Create an account"}
                    </Link>
                </p>
                <p className="auth-notice">
                    Demo account data is saved only in this browser. This is not
                    production authentication.
                </p>
            </div>
        </section>
    );
}

export default Auth;
