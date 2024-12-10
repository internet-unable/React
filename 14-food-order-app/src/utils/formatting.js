export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export function countTotalSum(array) {
    const totalSum = array.reduce((total, item) => {
        return total += Number(item.price) * item.quantity;
    }, 0);

    return currencyFormatter.format(totalSum);
}
