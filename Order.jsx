import { useEffect, useState } from "react";
import { recordSale } from "../salesStorage";

function Order({ image, name, price, description, onClose }) {
    const [quantity, setQuantity] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [saveError, setSaveError] = useState("");

    useEffect(() => {
        function closeOnEscape(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [onClose]);

    const total = price * quantity;

    function submitOrder(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
            recordSale({
                id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
                createdAt: new Date().toISOString(),
                productName: name,
                quantity,
                unitPrice: price,
                total,
                customerName: formData.get("customerName").trim(),
                phone: formData.get("phone").trim(),
            });
            setSaveError("");
            setIsSubmitted(true);
        } catch {
            setSaveError("We couldn't save your order. Please try again.");
        }
    }

    return (
        <div
            className="order-overlay"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <section
                className="order-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="order-title"
            >
                <button
                    className="order-close"
                    type="button"
                    aria-label="Close order details"
                    onClick={onClose}
                >
                    ×
                </button>

                {isSubmitted ? (
                    <div className="order-confirmation">
                        <span>ORDER READY</span>
                        <h2 id="order-title">Thank you!</h2>
                        <p>
                            Your order for {quantity} {name}
                            {quantity > 1 ? "s" : ""} is ready.
                        </p>
                        <strong>Total: ${total.toFixed(2)}</strong>
                        <button type="button" onClick={onClose}>
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="order-heading">
                            <span>YOUR ORDER</span>
                            <h2 id="order-title">Order details</h2>
                        </div>

                        <div className="order-product">
                            <img src={image} alt={name} />
                            <div>
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <span>${price.toFixed(2)} each</span>
                            </div>
                        </div>

                        <form className="order-form" onSubmit={submitOrder}>
                            {saveError && (
                                <p className="order-error" role="alert">
                                    {saveError}
                                </p>
                            )}
                            <label>
                                Quantity
                                <input
                                    type="number"
                                    min="1"
                                    step="1"
                                    value={quantity}
                                    onChange={(event) => {
                                        const value = Number(event.target.value);
                                        setQuantity(value > 0 ? value : 1);
                                    }}
                                    required
                                />
                            </label>

                            <div className="order-total">
                                <span>Order total</span>
                                <strong>${total.toFixed(2)}</strong>
                            </div>

                            <label>
                                Your name
                                <input type="text" name="customerName" required />
                            </label>
                            <label>
                                Phone number
                                <input type="tel" name="phone" required />
                            </label>

                            <button type="submit">Place Order</button>
                        </form>
                    </>
                )}
            </section>
        </div>
    );
}

export default Order;