const SALES_STORAGE_KEY = "kd-drink-sales";
export const SALES_UPDATED_EVENT = "kd-drink-sales-updated";

export function getSales() {
    const savedSales = localStorage.getItem(SALES_STORAGE_KEY);
    return savedSales ? JSON.parse(savedSales) : [];
}

export function recordSale(sale) {
    const sales = getSales();
    const updatedSales = [sale, ...sales];

    localStorage.setItem(SALES_STORAGE_KEY, JSON.stringify(updatedSales));
    window.dispatchEvent(new Event(SALES_UPDATED_EVENT));
}

export function updateSale(updatedSale) {
    const sales = getSales();
    const saleIndex = sales.findIndex((sale) => sale.id === updatedSale.id);

    if (saleIndex === -1) {
        throw new Error("This sale could not be found.");
    }

    const updatedSales = [...sales];
    updatedSales[saleIndex] = updatedSale;
    localStorage.setItem(SALES_STORAGE_KEY, JSON.stringify(updatedSales));
    window.dispatchEvent(new Event(SALES_UPDATED_EVENT));
}

export function deleteSale(saleId) {
    const sales = getSales();
    const updatedSales = sales.filter((sale) => sale.id !== saleId);

    if (updatedSales.length === sales.length) {
        throw new Error("This sale could not be found.");
    }

    localStorage.setItem(SALES_STORAGE_KEY, JSON.stringify(updatedSales));
    window.dispatchEvent(new Event(SALES_UPDATED_EVENT));
}
