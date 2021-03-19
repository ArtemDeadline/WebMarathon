
var animal = prompt("What animal is the superhero most similar to?", "Animal");

console.log("point before check: " + animal);

var only_letters = /^[A-Za-z]{1,20}$/
var check_space = /^[\s]+$/

console.log("only_letters: " + only_letters.test(animal));

console.log("check_space: " + (!check_space.test(animal)));

if(only_letters.test(animal) && (!check_space.test(animal)) && animal!=null){
    console.log("animal is correct\n");
    var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.", "Unknown");
    var check_male = /^male$/
    var check_female = /^female$/
    var check_blank = /^$/
    console.log("male: " + check_male.test(gender));
    console.log("female: " + check_female.test(gender));
    console.log("blank: " + check_blank.test(gender));
    if(check_male.test(gender) || check_blank.test(gender) || check_female.test(gender)){
        console.log("gender is correct\n");
        var age = prompt("How old is the superhero?");
        var only_digitals = /^[0-9]{1,5}$/;
        var not_zero = /^0/;
        console.log("start with zero: " + not_zero.test(age));
        console.log("only digitals: " + only_digitals.test(age));
        if(only_digitals.test(age) && !not_zero.test(age)){
            console.log("everything is correct");
            var hero_part;
            if(gender == "male"){
                if(age < 18)
                    hero_part = "boy";
                else
                    hero_part = "man"
            }
            else if (gender = "female") {
                if(age < 18)
                    hero_part = "girl";
                else
                    hero_part = "woman"
            }
            else{
                if(age < 18)
                    hero_part = "kid";
                else
                    hero_part = "hero"
            }
            alert("The superhero name is: " + animal + "-" + hero_part + "!");
        }
        else{
            alert("Incorrect age!");
        }

    }
    else {
        alert("Incorrect gender!");
    }
}
else{
    alert("Incorrect animal name!");
}
