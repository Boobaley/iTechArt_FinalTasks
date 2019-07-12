export const stringCutter = (string, quantityOfSymbols) => {
    return string.length < quantityOfSymbols ? string : string.slice(0, quantityOfSymbols - 3) + '...';
};