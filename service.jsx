function Services() {
    return (
        <section className="simple-page">
            <span className="sectionLabel" data-scroll-reveal>KD-DRINK SERVICES</span>

            <h1 data-scroll-reveal>OUR SERVICES</h1>

            <div className="service-grid">
                <div className="service-card" data-scroll-reveal>
                    <span>01</span>
                    <h2>Drink Selection</h2>
                    <p>
                        Explore a wide selection of drinks for different tastes
                        and occasions.
                    </p>
                </div>

                <div className="service-card" data-scroll-reveal>
                    <span>02</span>
                    <h2>Easy Ordering</h2>
                    <p>
                        Find your favorite drink quickly and place your order
                        easily.
                    </p>
                </div>

                <div className="service-card" data-scroll-reveal>
                    <span>03</span>
                    <h2>Fresh Drinks</h2>
                    <p>
                        Enjoy refreshing drinks selected for your everyday
                        moments.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;