import DrinkCard from "./DrinkCard";

function Water() {
    return (
        <section className="drink-page">
            <div className="pageHeader" data-scroll-reveal>
                <span>PURE REFRESHMENT</span>
                <h1>PURE WATER</h1>
                <p>
                    Simple, clean and refreshing.
                </p>
            </div>

            <div className="drink-grid">
                <DrinkCard
                    image="water.jpg"
                    name="Kulan Water"
                    price="1.00"
                    description="Fresh mineral water"
                />

                <DrinkCard
                    image="vital.jpg"
                    name="Vital Water"
                    price="0.80"
                    description="Clean and refreshing water"
                />
            </div>
        </section>
    );
}

export default Water;