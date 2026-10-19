import DrinkCard from "./DrinkCard";

function TopDrinks() {
    return (
        <section className="drink-page">
            <div className="pageHeader" data-scroll-reveal>
                <span>POPULAR CHOICES</span>
                <h1>TOP DRINKS</h1>
                <p>
                    Discover drinks loved by our customers.
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
                    image="milk-tea.jpg"
                    name="Milk Tea"
                    price="3.00"
                    description="Sweet and creamy milk tea"
                />

                <DrinkCard
                    image="strawberry.jpg"
                    name="Strawberry Drink"
                    price="3.00"
                    description="Fresh strawberry flavor"
                />
            </div>
        </section>
    );
}

export default TopDrinks;