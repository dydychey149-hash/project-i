import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <section className="contentBody">
            <div className="heroText" data-scroll-reveal>
                <span className="heroSmallText">WELCOME TO MY STORE</span>

                <h1>DEFEND YOUR WELL-BEING</h1>

                <h2>Trusted KD-Drink Sale</h2>

                <p>
                    Daily Energy &amp; Wellness Boosts you &amp; your family will love!
                </p>

                <div className="heroButtons">
                    <Link to="/all-drinks" className="btnShop">
                        Shop Now
                    </Link>

                    <Link to="/product" className="button2">
                        View Details
                    </Link>
                </div>
            </div>

            <div className="right" data-scroll-reveal>
                <div className="drinkShape">
                    <img src="imsela_remove_bg528.png" alt="KD Drink" />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;