import { useEffect, useState } from "react";
import {
    deleteSale,
    getSales,
    SALES_UPDATED_EVENT,
    updateSale,
} from "../salesStorage";

function Sales() {
    const [sales, setSales] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [editingSale, setEditingSale] = useState(null);
    const [actionError, setActionError] = useState("");
    const [notice, setNotice] = useState("");

    useEffect(() => {
        function refreshSales() {
            try {
                setSales(getSales());
                setError("");
            } catch {
                setError("Unable to load saved sales from this browser.");
            } finally {
                setIsLoading(false);
            }
        }

        refreshSales();
        window.addEventListener(SALES_UPDATED_EVENT, refreshSales);
        window.addEventListener("storage", refreshSales);

        return () => {
            window.removeEventListener(SALES_UPDATED_EVENT, refreshSales);
            window.removeEventListener("storage", refreshSales);
        };
    }, []);

    const totalRevenue = sales.reduce((total, sale) => total + sale.total, 0);

    function startEditing(sale) {
        setActionError("");
        setNotice("");
        setEditingSale({ ...sale });
    }

    function saveEdit() {
        const quantity = Number(editingSale.quantity);
        const unitPrice = Number(editingSale.unitPrice);

        if (
            !editingSale.productName.trim() ||
            !editingSale.customerName.trim() ||
            !editingSale.phone.trim() ||
            !Number.isInteger(quantity) ||
            quantity < 1 ||
            !Number.isFinite(unitPrice) ||
            unitPrice < 0
        ) {
            setActionError("Enter valid product, customer, phone, quantity, and unit price values.");
            return;
        }

        try {
            updateSale({
                ...editingSale,
                productName: editingSale.productName.trim(),
                customerName: editingSale.customerName.trim(),
                phone: editingSale.phone.trim(),
                quantity,
                unitPrice,
                total: quantity * unitPrice,
            });
            setEditingSale(null);
            setActionError("");
            setNotice("Sale updated successfully.");
        } catch (saveError) {
            setActionError(saveError.message || "Unable to update this sale.");
        }
    }

    function removeSale(sale) {
        if (!window.confirm(`Delete the sale for ${sale.productName}?`)) {
            return;
        }

        try {
            deleteSale(sale.id);
            if (editingSale?.id === sale.id) {
                setEditingSale(null);
            }
            setActionError("");
            setNotice("Sale deleted successfully.");
        } catch (deleteError) {
            setActionError(deleteError.message || "Unable to delete this sale.");
        }
    }

    return (
        <section className="sales-page">
            <div className="pageHeader" data-scroll-reveal>
                <span>ORDER RECORDS</span>
                <h1>SALES</h1>
                <p>Review completed orders and the total sales recorded on this device.</p>
            </div>

            <div className="sales-summary" data-scroll-reveal>
                <div>
                    <span>COMPLETED ORDERS</span>
                    <strong>{sales.length}</strong>
                </div>
                <div>
                    <span>TOTAL SALES</span>
                    <strong>${totalRevenue.toFixed(2)}</strong>
                </div>
            </div>

            {error && <p className="sales-message sales-error" role="alert">{error}</p>}
            {!error && isLoading && <p className="sales-message">Loading sales...</p>}
            {actionError && <p className="sales-message sales-error" role="alert">{actionError}</p>}
            {notice && <p className="sales-message" role="status">{notice}</p>}
            {!error && !isLoading && sales.length === 0 && (
                <p className="sales-message">No completed orders yet. Placed orders will appear here.</p>
            )}

            {!error && !isLoading && sales.length > 0 && (
                <div className="sales-table-wrap" data-scroll-reveal>
                    <table className="sales-table">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Unit price</th>
                                <th scope="col">Total</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map((sale) => (
                                <tr key={sale.id}>
                                    <td>{new Date(sale.createdAt).toLocaleString()}</td>
                                    {editingSale?.id === sale.id ? (
                                        <>
                                            <td>
                                                <input
                                                    className="sales-edit-input"
                                                    aria-label="Product name"
                                                    value={editingSale.productName}
                                                    onChange={(event) => setEditingSale({
                                                        ...editingSale,
                                                        productName: event.target.value,
                                                    })}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    className="sales-edit-input sales-number-input"
                                                    aria-label="Quantity"
                                                    type="number"
                                                    min="1"
                                                    step="1"
                                                    value={editingSale.quantity}
                                                    onChange={(event) => setEditingSale({
                                                        ...editingSale,
                                                        quantity: event.target.value,
                                                    })}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    className="sales-edit-input sales-number-input"
                                                    aria-label="Unit price"
                                                    type="number"
                                                    min="0"
                                                    step="0.01"
                                                    value={editingSale.unitPrice}
                                                    onChange={(event) => setEditingSale({
                                                        ...editingSale,
                                                        unitPrice: event.target.value,
                                                    })}
                                                />
                                            </td>
                                            <td>${(
                                                Number(editingSale.quantity) *
                                                Number(editingSale.unitPrice)
                                            ).toFixed(2)}</td>
                                            <td>
                                                <input
                                                    className="sales-edit-input"
                                                    aria-label="Customer name"
                                                    value={editingSale.customerName}
                                                    onChange={(event) => setEditingSale({
                                                        ...editingSale,
                                                        customerName: event.target.value,
                                                    })}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    className="sales-edit-input"
                                                    aria-label="Phone number"
                                                    type="tel"
                                                    value={editingSale.phone}
                                                    onChange={(event) => setEditingSale({
                                                        ...editingSale,
                                                        phone: event.target.value,
                                                    })}
                                                />
                                            </td>
                                            <td>
                                                <div className="sales-actions">
                                                    <button
                                                        className="sales-action-button"
                                                        type="button"
                                                        onClick={saveEdit}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        className="sales-action-button sales-cancel-button"
                                                        type="button"
                                                        onClick={() => {
                                                            setEditingSale(null);
                                                            setActionError("");
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{sale.productName}</td>
                                            <td>{sale.quantity}</td>
                                            <td>${sale.unitPrice.toFixed(2)}</td>
                                            <td>${sale.total.toFixed(2)}</td>
                                            <td>{sale.customerName}</td>
                                            <td>{sale.phone}</td>
                                            <td>
                                                <div className="sales-actions">
                                                    <button
                                                        className="sales-action-button"
                                                        type="button"
                                                        onClick={() => startEditing(sale)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="sales-action-button sales-delete-button"
                                                        type="button"
                                                        onClick={() => removeSale(sale)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

export default Sales;
