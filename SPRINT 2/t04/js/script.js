var startValue = prompt("Enter start of range:");
var check_value = /[^0-9]/g
console.log("check_value: " + check_value.test(startValue));
if (check_value.test(startValue)){
    console.log("default begin")
    startValue = 1;
}
else
    startValue = parseInt(startValue);

var endValue = prompt("Enter end of range:");
console.log("check_value: " + check_value.test(endValue));
if(check_value.test(endValue)){
    console.log("default end");
    endValue = 100;
}
else
    endValue=parseInt(endValue)

console.log("start: " + startValue + ", end: " + endValue);

checkDivisiom(startValue, endValue);

function checkDivisiom(beginRange, endRange) {
    for(let i = beginRange; i <= endRange; i++){
        let result = i + " ";
        let end_space = /\s$/
        if(i%2==0){
            result += "is even";
        }
        if(i%3==0){
            if(end_space.test(result))
                result += "is multiple of 3";
            else
                result += ", a multiple of 3";
        }
        if(i%10==0){
            result += ", a multiple of 10";
        }
        if(end_space.test(result))
            result += "-";
        console.log(result);
    }
}
