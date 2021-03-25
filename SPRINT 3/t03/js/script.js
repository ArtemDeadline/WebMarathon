class Sloth{
    constructor(first_name, last_name, gender, age, calories){
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
    }

    sleepFor(){
        let img_src = document.getElementById("norm").src;
        if(/norm.gif$/.test(img_src) || /hero.gif$/.test(img_src)){
            document.getElementById("norm").src = "assets/images/sloth.jpg"
            alert("I'm sleeping!");
            setTimeout(()=>{alert("I'm awake now!"); document.getElementById("norm").src = img_src}, 10000);
        }
        else{
            alert("I'm alredy busy!");
        }
    }

    feed(){

        if(this.calories < 500){
            let img_src = document.getElementById("norm").src;
            if(/norm.gif$/.test(img_src) || /hero.gif$/.test(img_src)){
                alert("Nom nom nom");
                console.log(`calories before eating: ${this.calories}`);
                document.getElementById("norm").src = "assets/images/feed.gif"
                this.calories +=200;
                setTimeout(this.end_feed, 10000, this.calories, img_src);
            }
            else
                alert("I'm alredy busy!");
        }
        else{
            alert("I'm not hungry, calories: " + this.calories);
        }

    }

    end_feed(calories, img_src){
        if(calories < 500) {
            alert("I'm still hungry!");
        }
        else{
            alert("I'm not hungry");
        }
        document.getElementById("norm").src = img_src
        console.log(`calories after eating: ${calories}`);
    }

    starve(sloth){
        var check_hero = /hero.gif$/
        console.log(`picture: ${document.getElementById("norm").src}`)
        console.log(`check picture: ${check_hero.test(document.getElementById("norm").src)}`)
        if(!(check_hero.test(document.getElementById("norm").src))){
            if(sloth.calories <= 200){
                alert("I'm hungry very much, please feed me");
                sloth.calories = 0;
                let img_src = document.getElementById("norm").src;
                document.getElementById("norm").src = "assets/images/hungry.gif"
                setTimeout(()=>{document.getElementById("norm").src = img_src}, 3000);
            }
            else{
                sloth.calories -= 200;
                alert("I starved " + ((sloth.calories/500)*100) + "%" );
            }
        }
    }
}

class HeroSloth extends Sloth {
    constructor(norm){
        super(norm.first_name, norm.last_name, norm.gender, norm.age, norm.calories);
    }
    trick(){
        let img_src = document.getElementById("norm").src;
        if(/norm.gif$/.test(img_src) || /hero.gif$/.test(img_src)){
            alert("I have never missed deadlines! =D");
            document.getElementById("norm").src = "assets/images/trick.gif"
            setTimeout(()=>{document.getElementById("norm").src = img_src}, 5000);
        }
        else{
            alert("I'm alredy busy!");
        }
    }
    treat(){
        let img_src = document.getElementById("norm").src;
        if(/norm.gif$/.test(img_src) || /hero.gif$/.test(img_src)){
            alert("Make a sport! ^ ^");
            document.getElementById("norm").src = "assets/images/sport.gif"
            setTimeout(()=>{document.getElementById("norm").src = img_src}, 5000);
        }
        else{
            alert("I'm alredy busy!");
        }
    }
}

var norm = new Sloth("The Norm", "Sloth", "male", 19, 0);
var interval_id;
setTimeout(setInterval, 5000, norm.starve, 60000, norm);

function switch_norm(norm){
    console.log(`NORM_IMG: ${document.getElementById("norm").src}`);
    console.log(`NORM_CALORIES: ${norm.calories}`)
    console.log(`NORM_HEROSLOTH ${norm instanceof HeroSloth}`)
    /*if(norm instanceof HeroSloth){
        norm = new Sloth(norm.first_name, norm.last_name, norm.gender, norm.age, norm.calories);
        document.getElementById("norm").src = "assets/images/norm.gif";
        document.getElementById("feed").src = "assets/images/feed.jpg";
        document.getElementById("sleep").src = "assets/images/sleep.jpg";
        document.getElementById("feed").onclick = norm.feed
        document.getElementById("sleep").onclick = norm.sleepFor
    }*/if(norm instanceof Sloth && norm.calories >= 500){
        norm = new HeroSloth(norm);
        document.getElementById("name").innerHTML = "HeroSloth";
        document.getElementById("norm").src = "assets/images/hero.gif";
        document.getElementById("trick").onclick = norm.trick
        document.getElementById("sport").onclick = norm.treat
        document.getElementById("mode").style.display = "none";
        let hero_columns = document.getElementsByClassName("hero_column");
        for(let i = 0; i < hero_columns.length; i++){
            hero_columns[i].style.display = "block";
        }
    }
}

/*let feed_img = document.getElementById("feed");
console.log(`feed_img_calories: ${norm.calories}`);
feed_img.onclick = norm.feed;
let sleep_img = document.getElementById("sleep");
console.log(`sleep_img: ${norm.age}`);
sleep_img.onclick = norm.sleepFor;*/
//norm.feed();
//norm.sleepFor();
