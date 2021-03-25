function HouseBuilder(address, description, owner, size, roomCount){
    this.roomCount = roomCount
    this.address = address;
    this.date = new Date();
    this.description = description;
    this.owner = owner;
    this.size = size;
}
var houseBlueprint = HouseBuilder.prototype;
houseBlueprint.address;
houseBlueprint.date;
houseBlueprint.description;
houseBlueprint.owner;
houseBlueprint.size;
houseBlueprint.getDaysToBuild = function(){return this.size*2;};
houseBlueprint._averageBuildSpeed = 0.5;

let houseMixin = {
    wordReplace(old_string, new_string){
        /*let temp_array = this.description.split(" ");
        for(let i = 0; i < temp_array.length; i++){
            console.log(`cur: ${temp_array[i]}`);
            console.log(`old: ${old_string}`);
            if(temp_array[i] == old_string){
                temp_array[i] = new_string;
            }
        }
        this.description = temp_array.join(" ");*/
        this.description = this.description.replace(old_string, new_string)
    },

    wordDelete(del_word){
        this.description = this.description.replace(del_word, "");
    },

    wordInsertAfter(word, inserted_word){
        let temp_array = this.description.split(" ");
        for(let i = 0; i < temp_array.length; i++){
            //console.log(`cur: ${temp_array[i]}`);
            //console.log(`word: ${word}`);
            if(temp_array[i] == word){
                temp_array[i] = temp_array[i] + " " + inserted_word;
            }
        }
        this.description = temp_array.join(" ");
    },

    wordEncrypt(){
        var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        var index     = x => input.indexOf(x);
        var translate = x => index(x) > -1 ? output[index(x)] : x;
        this.description = this.description.split('').map(translate).join('')
    },

    wordDecrypt(){
        var input     = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        var output    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var index     = x => input.indexOf(x);
        var translate = x => index(x) > -1 ? output[index(x)] : x;
        this.description = this.description.split('').map(translate).join('')
    }

}

const house = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J. Smith', 110, 5);
Object.assign(house, houseMixin);
console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.
house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.
house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.
house.wordInsertAfter ("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
