export default function getFormattedDate(dateObject){
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return correctDisplay(dateObject.getDate()) + "." + correctDisplay((dateObject.getMonth()+1)) + "." + dateObject.getFullYear() + " " +
    correctDisplay(dateObject.getHours()) + ":" + correctDisplay(dateObject.getUTCMinutes()) + " " + days[dateObject.getDay()];
}

function correctDisplay(value){
    if(value < 10)
        value = "0" + value;
    return value;
}
