import checkBrackets from "./script.js"
console.log(checkBrackets('1)()(())2(()'));// 2
console.log(checkBrackets(NaN));// -1
console.log(checkBrackets("(1 + 2 * 4"));// 1
console.log(checkBrackets("(1)()(())2(()"));// 1
console.log(checkBrackets("Hello brackets)!"));// 1
console.log(checkBrackets('((()))'));// 0
console.log(checkBrackets("((("));// 3
console.log(checkBrackets('))('));// 3
console.log(checkBrackets("((((((((((((()))))))))))))"));// 0
console.log(checkBrackets("()()("));// 1
console.log(checkBrackets(")))"));// 3
/*
"1)()(())2(()"     //2
            "(1 + 2 * 4"   //1
            "(1)()(())2(()" //1
            "Hello brackets)!" //1
            "((()))" //0
            "((("  //3
            "))(" //3
            "((((((((((((()))))))))))))"  //0
            "()()(" //1
            ")))"  //3*/
