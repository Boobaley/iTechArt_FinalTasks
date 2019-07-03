export const stringCutter = (string, quntityOfSymbols) => {
    if (string.length < quntityOfSymbols) {
        return string;
    } else {
        return string.slice(0, quntityOfSymbols - 3) + '...';
    }
};