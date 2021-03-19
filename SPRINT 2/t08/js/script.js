export default function checkBrackets(str){
    console.log(str);
    console.log("typeof: " + typeof(str));
    if(str == "" || str == null || typeof(str) != "string")
        return -1;
    console.log("validation was successfull!");
    var open_counter = 0;
    var close_counter = 0;
    var result = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == ')' && open_counter == 0)
            result++;
        else if (str[i] == ')')
            close_counter++;
        else if (str[i] == '(')
            open_counter++;
    }
    console.log("result counters - open: " + open_counter + ", close: " + close_counter + ", unopened: " + result);
    result+= Math.abs(open_counter-close_counter);
    return result;
}
