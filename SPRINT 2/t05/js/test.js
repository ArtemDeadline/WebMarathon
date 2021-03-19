// test.js
import total from "./script.js"

let sum = total(5, 0.25);
console.log(sum);
sum = total(4, 0.2, sum);
console.log(sum);
sum = total(3, 0.3, sum).toFixed(2);
console.log(sum);

sum = total(1, 0.1);
sum= total(1, 0.2, sum);
sum= total(1, 0.78, sum).toFixed(2);
console.log(sum);
