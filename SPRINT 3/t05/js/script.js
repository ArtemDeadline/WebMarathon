// https://www.freecodecamp.org/news/how-to-use-javascript-collections-map-and-set/
/*
    guestList = weakSet (because remove one but not everyone)
    menu = Map (dishes name - prices)
    bankVault = weakMap (high privacy)
    coinCollection = Set(order is important)
*/

class GuestList{
    constructor(array){
        this.guests = new WeakSet(array);
        /*for(let i = 0; i < array.length; i++){
            this.guests.add(new String(array[i]));
        }*/
    }
    add(element){
        console.log("Adding " + element);
        this.guests.add(element);
    }
    delete(element){
        console.log("Deleting " + element);
        this.guests.delete(element);
    }
    /*size(){
        return this.guests.size;
    }*/
    isInvited(name){
        return this.guests.has(name);
        /*for(const value of this.guests){
            if(value == name)
                return true;
        }
        return false;*/
    }
}

class Menu {
    constructor(obj){
        this.dishes_menu = new Map(obj);
    }
    priceOf(dish_name){
        return this.dishes_menu.get(dish_name);
    }
    addDish(dish, price){
        this.dishes_menu.set(dish, price);
    }
    removeDish(dish){
        this.dishes_menu.delete(dish);
    }
    isInMenu(dish){
        return this.dishes_menu.has(dish);
    }
    view(){
        return this.dishes_menu;
    }
}

class BankVault{
    constructor(array){
        this.bankVault = new WeakMap();
        for (var bankNode of array) {
            this.bankVault.set(bankNode, bankNode.content);
        }

    }
    addCell(obj){
        this.bankVault.set(obj, obj.content);
    }
    getCell(obj){
        //console.log("get: " + obj.content)
        return this.bankVault.get(obj);
    }
    change(obj, new_content){
        this.bankVault.set(obj, new_content);
    }
    delete(obj){
        this.bankVault.delete(obj);
    }
    view(){
        return this.bankVault;
    }
}
function bankNode(content){
    return {content:content};
}

class CoinCollection{
    constructor(array){
        this.coinCollection = new Set(array);
    }
    collectCoin(coin){
        this.coinCollection.add(coin);
    }
    removeCoin(coin){
        this.coinCollection.delete(coin);
    }
    view(){
        return this.coinCollection;
    }

}
function Coin(denomination, year, country){
    this.denomination = denomination;
    this.year = year;
    this.country = country;
}
/*let guestList = new GuestList([{name:"Sergiy"},{name:"Bogdan"},{name:"Maksym"}]);
let vasya = {name: "Vasya"}
let vasya2 = {name: "Vasya"}
let petya = {name: "Petya"}
guestList.add(vasya);
console.log("Is Petya invited: " + guestList.isInvited(petya));
console.log("Is Vasya invited: " + guestList.isInvited(vasya));
console.log("Is Vasya invited: " + guestList.isInvited(vasya2));
guestList.delete(vasya);
console.log("Is Vasya invited: " + guestList.isInvited(vasya));*/

/*let menu = new Menu([["Chicken coconut soup",25], ["Omelet",7], ["Cheesecake",11], ["Pizza",16]]);
//console.log(new Map([{"Chicken coconut soup":25}, {"Omelet":7}, {"Cheesecake":11}, {"Pizza":16}]));
console.log(menu.view().entries());
menu.addDish("Karri rice", 14);
console.log("Is 'Karri rice' in menu: " + menu.isInMenu("Karri rice"));
console.log("Is 'Omelet' in menu: " + menu.isInMenu("Omelet"));
menu.removeDish("Karri rice");
console.log("Is 'Karri rice' in menu: " + menu.isInMenu("Karri rice"));
console.log("Price of 'Omelet': " + menu.priceOf("Omelet"));*/

/*let bn1 = bankNode("1000$");
let bn2 = bankNode("2000$");
let bn3 = bankNode("3000$");
let bankVault = new BankVault([bn1,bn2]);
console.log(bankVault.view());
let bn4 = bankVault.addCell(bn3);
console.log(bankVault.view());
console.log("2222: "+ bankVault.getCell(bn2));
console.log("3333: "+ bankVault.getCell(bn3));
console.log("4444: "+ bankVault.getCell(bn4));
bankVault.delete(bn2);
console.log("2222: "+ bankVault.getCell(bn2));
bankVault.change(bn3, "3333$");
console.log("3333: "+ bankVault.getCell(bn3));
console.log(bankVault.view());*/

/*let coin1 = new Coin(5, 1965, "German");
let coin2 = new Coin(1, 1955, "Ukraine");
let coin3 = new Coin(10, 1843, "Italy");
let coin4 = new Coin(100, 1966, "USA");
let coinCollection = new CoinCollection([coin1, coin2, coin3]);
console.log(coinCollection.view());
coinCollection.collectCoin(coin4);
console.log(coinCollection.view());
coinCollection.removeCoin(coin2);
console.log(coinCollection.view());*/
