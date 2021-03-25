function* stepGenerator(){
    var previous_value = 1;

    while(true){
        if(previous_value > 10000)
            previous_value = 1;
        var prompt_value = prompt(`Previous value: ${previous_value}. Enter a new number: `);
        console.log(prompt_value);
        if(prompt_value == null){
            console.error("Prompt was canceled!");
            yield NaN;
        }
        else if (prompt_value == "stop"){
            console.log("stepGenerator() was stopped.");
            yield NaN;
        }
        else if( !isNaN(prompt_value) ){
            previous_value += parseInt(prompt_value);
            yield previous_value;
        }
        else{
            console.error("Input value is not number!");
            yield NaN;
        }
    }
}
console.log("Start");
let sg = stepGenerator();

while(true){
    let result = sg.next().value;
    console.log(`result: ${result}`);
    if(Number.isNaN(result))
        break;

}

console.log("Finish");
