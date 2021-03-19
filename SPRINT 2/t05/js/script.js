// script.js
export default function total(addCount, addPrice, currentTotal=0) {
    return currentTotal + addCount*addPrice;
}
export {total};
