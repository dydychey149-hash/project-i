import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    AUTH_UPDATED_EVENT,
    getCurrentUser,
    logoutAccount,
} from "../authStorage";

function ListBar() {
    const [user, setUser] = useState(() => getCurrentUser());

    useEffect(() => {
        function refreshUser() {
            setUser(getCurrentUser());
        }

        window.addEventListener(AUTH_UPDATED_EVENT, refreshUser);
        window.addEventListener("storage", refreshUser);

        return () => {
            window.removeEventListener(AUTH_UPDATED_EVENT, refreshUser);
            window.removeEventListener("storage", refreshUser);
        };
    }, []);

    return (
        <div className="navDiv">
            <div className="logo">
                <h2>KD-Drink Sale</h2>
            </div>

            <nav>
                <ul className="ulNav">
                    <li>
                        <Link className="linkTag" to="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link className="linkTag" to="/service">
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link className="linkTag" to="/product">
                            Product
                        </Link>
                    </li>

                    <li>
                        <Link className="linkTag" to="/sales">
                            Sales
                        </Link>
                    </li>

                    <li>
                        <Link className="linkTag" to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    {user ? (
                        <>
                            <li className="nav-user" aria-label={`Logged in as ${user.name}`}>
                                Hi, {user.name}
                            </li>
                            <li>
                                <button
                                    className="linkTag nav-logout"
                                    type="button"
                                    onClick={logoutAccount}
                                >
                                    Log Out
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link className="linkTag" to="/login">
                                    Log In
                                </Link>
                            </li>
                            <li>
                                <Link className="linkTag nav-register" to="/register">
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default ListBar;