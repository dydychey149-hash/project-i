import DrinkCard from "./DrinkCard";

function FavoriteDrinks() {
    return (
        <section className="drink-page">
            <div className="pageHeader" data-scroll-reveal>
                <span>OUR FAVORITES</span>
                <h1>FAVORITE DRINKS</h1>
                <p>
                    Drinks selected for unforgettable moments.
                </p>
            </div>

            <div className="drink-grid">
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
                    image="orange.jpg"
                    name="Orange Juice"
                    price="2.50"
                    description="Fresh orange juice"
                />
            </div>
        </section>
    );
}

export default FavoriteDrinks;