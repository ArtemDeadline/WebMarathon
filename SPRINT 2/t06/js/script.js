var first_name = prompt("Please enter your first name:");
var validator = /^[a-zA-Z]{1,20}$/
if(validator.test(first_name) && first_name != null){
    var last_name = prompt("Please enter your last name:");
    if(validator.test(last_name) && last_name != null){
        var firstName = first_name.charAt(0).toUpperCase().concat(first_name.slice(1));
        var lastName = last_name.charAt(0).toUpperCase().concat(last_name.slice(1));
        alert("Hello, " + firstName + " " + lastName + "!");
        console.log(firstName + " " + lastName);
    }
    else{
        alert("Wrong input!");
        console.log("Wrong input!");
    }
}
else {
    alert("Wrong input!");
    console.log("Wrong input!");
}
