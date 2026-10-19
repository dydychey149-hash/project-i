import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footerMain">
                <div className="footerBrand">
                    <h2>KD-Drink Sale</h2>
                    <p>
                        Discover refreshing drinks for every mood and every moment.
                    </p>
                </div>

                <div className="footerLinks">
                    <h3>EXPLORE</h3>
                    <Link to="/">Home</Link>
                    <Link to="/all-drinks">All Drinks</Link>
                    <Link to="/top-drinks">Top Drinks</Link>
                    <Link to="/favorite-drinks">Favorite Drinks</Link>
                    <Link to="/water">Water</Link>
                </div>

                <div className="footerLinks">
                    <h3>COMPANY</h3>
                    <Link to="/service">Services</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/sales">Sales</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>

            <div className="footerBottom">
                <p>© 2026 KD-Drink Sale. All rights reserved.</p>
                <span>Fresh Drinks • Good Moments</span>
            </div>
        </footer>
    );
}

export default Footer;