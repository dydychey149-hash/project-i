import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <section className="selection-1">
                <div className="wellness-section">
                    <span className="sectionLabel">EXPLORE OUR COLLECTION</span>

                    <h1 className="h1-selection-1">
                        DISCOVER YOUR FAVORITE DRINK
                    </h1>

                    <p className="sectionDescription">
                        Explore refreshing drinks made for every mood, moment and taste.
                    </p>

                    <div className="wellness-container">
                        <Link to="/all-drinks" className="wellness-item" data-scroll-reveal>
                            <img src="all-drink.jpg" alt="All Drinks" />
                            <div className="itemOverlay">
                                <h3>
                                    ALL
                                    <br />
                                    DRINKS
                                </h3>
                                <span>Explore Collection →</span>
                            </div>
                        </Link>

                        <Link to="/top-drinks" className="wellness-item" data-scroll-reveal>
                            <img src="top-drink.jpg" alt="Top Drinks" />
                            <div className="itemOverlay">
                                <h3>
                                    TOP
                                    <br />
                                    DRINKS
                                </h3>
                                <span>Explore Collection →</span>
                            </div>
                        </Link>

                        <Link to="/favorite-drinks" className="wellness-item" data-scroll-reveal>
                            <img
                                src="fav-drink.jpg"
                                alt="Favorite Drinks"
                            />
                            <div className="itemOverlay">
                                <h3>
                                    FAVORITE
                                    <br />
                                    DRINKS
                                </h3>
                                <span>Explore Collection →</span>
                            </div>
                        </Link>

                        <Link to="/water" className="wellness-item" data-scroll-reveal>
                            <img src="cover-water.jpg" alt="Water" />
                            <div className="itemOverlay">
                                <h3>
                                    PURE
                                    <br />
                                    WATER
                                </h3>
                                <span>Explore Collection →</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="featured-header" data-scroll-reveal>
                    <div>
                        <span className="sectionLabel">OUR SELECTION</span>
                        <h2>ALL DRINKS</h2>
                    </div>

                    <Link to="/all-drinks" className="viewAll">
                        View All →
                    </Link>
                </div>

                <div className="featured-grid">
                    <div className="featured-card" data-scroll-reveal>
                        <img src="cola.jpg" alt="Coca Cola" />
                        <h3>Coca Cola</h3>
                        <p>Refreshing cold cola</p>
                        <span>$2.00</span>
                    </div>

                    <div className="featured-card" data-scroll-reveal>
                        <img src="orange.jpg" alt="Orange Juice" />
                        <h3>Orange Juice</h3>
                        <p>Fresh orange juice</p>
                        <span>$2.50</span>
                    </div>

                    <div className="featured-card" data-scroll-reveal>
                        <img src="milk-tea.jpg" alt="Milk Tea" />
                        <h3>Milk Tea</h3>
                        <p>Sweet and creamy milk tea</p>
                        <span>$3.00</span>
                    </div>

                    <div className="featured-card" data-scroll-reveal>
                        <img src="matcha.jpg" alt="Matcha" />
                        <h3>Matcha</h3>
                        <p>Smooth Japanese matcha</p>
                        <span>$3.50</span>
                    </div>
                </div>
            </section>

            <section className="why-section">
                <div className="why-content" data-scroll-reveal>
                    <span className="sectionLabel">WHY KD-DRINK</span>

                    <h2>
                        GOOD DRINKS.
                        <br />
                        GOOD MOMENTS.
                    </h2>

                    <p>
                        We bring together refreshing drinks for every part of your
                        day. From fresh juices and creamy milk tea to classic soft
                        drinks and pure water.
                    </p>

                    <Link to="/all-drinks" className="btnShop">
                        Explore Drinks
                    </Link>
                </div>

                <div className="whyBoxes">
                    <div data-scroll-reveal>
                        <strong>01</strong>
                        <h3>Fresh Selection</h3>
                        <p>Choose from a variety of refreshing drinks.</p>
                    </div>

                    <div data-scroll-reveal>
                        <strong>02</strong>
                        <h3>Great Taste</h3>
                        <p>Drinks selected for different tastes and moments.</p>
                    </div>

                    <div data-scroll-reveal>
                        <strong>03</strong>
                        <h3>Easy Ordering</h3>
                        <p>Find your drink and order with ease.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;