import DrinkCard from "./DrinkCard";

function AllDrinks() {
    return (
        <section className="drink-page">
            <div className="pageHeader" data-scroll-reveal>
                <span>OUR COLLECTION</span>
                <h1>ALL DRINKS</h1>
                <p>
                    Discover all of our refreshing drinks in one place.
                </p>
            </div>

            <div className="drink-grid">
                <DrinkCard
                    image="cola.jpg"
                    name="Coca Cola"
                    price="2.00"
                    description="Refreshing cold cola"
                />

                <DrinkCard
                    image="orange.jpg"
                    name="Orange Juice"
                    price="2.50"
                    description="Fresh orange juice"
                />

                <DrinkCard
                    image="milk-tea.jpg"
                    name="Milk Tea"
                    price="3.00"
                    description="Sweet and creamy milk tea"
                />

                <DrinkCard
                    image="matcha.jpg"
                    name="Matcha"
                    price="3.50"
                    description="Smooth Japanese matcha"
                />

                <DrinkCard
                    image="strawberry.jpg"
                    name="Strawberry Drink"
                    price="3.00"
                    description="Fresh strawberry flavor"
                />

                <DrinkCard
                    image="water.jpg"
                    name="Kulan Water"
                    price="1.00"
                    description="Fresh mineral water"
                />
                <DrinkCard
                    image="vital.jpg"
                    name="Vital Water"
                    price="1.00"
                    description="Fresh mineral water"
                />
            </div>
        </section>
    );
}

export default AllDrinks;