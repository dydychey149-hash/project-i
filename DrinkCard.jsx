import { useState } from "react";
import Order from "./Order";

function DrinkCard({ image, name, price, description }) {
    const [isOrderOpen, setIsOrderOpen] = useState(false);

    return (
        <>
            <div className="drink-product-card" data-scroll-reveal>
                <div className="drink-product-image">
                    <img src={image} alt={name} />
                </div>

                <div className="drink-product-info">
                    <h3>{name}</h3>
                    <p>{description}</p>

                    <div className="productBottom">
                        <span>${price}</span>
                        <button type="button" onClick={() => setIsOrderOpen(true)}>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {isOrderOpen && (
                <Order
                    image={image}
                    name={name}
                    price={Number(price)}
                    description={description}
                    onClose={() => setIsOrderOpen(false)}
                />
            )}
        </>
    );
}

export default DrinkCard;