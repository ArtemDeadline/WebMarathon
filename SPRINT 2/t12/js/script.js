export default function concat(string1, string2=""){
    if(string2 != "")
        return string1 + " " + string2;
    else{
        let count = 0;
        function func1(){
            var cont = prompt(`Enter text to continue "${string1}": `);
            count++;
            console.log("count: " + count);
            func1.count = count;
            return string1 + " " + cont;
        }
        return func1;
    }
}
