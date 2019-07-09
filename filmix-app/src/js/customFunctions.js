export const stringCutter = (string, quantityOfSymbols) => {
    if (string.length < quantityOfSymbols) {
        return string;
    } else {
        return string.slice(0, quantityOfSymbols - 3) + '...';
    }
};