const firstname = "Michel"; // string
const lastname = "Polnareff";
let age = 123; // number
const isUserLoggedIn = false; // boolean
const account = undefined; // undefined
let account2; // undefined
const myVar = null; // null -> object
const user = {
    firstname: "Michel",
    lastname: "Polnareff",
    email: "mich-mich@pol.com"
}
const colors = ['red', 'blue', 'green'];
const onSayHello = function sayHello() {
    return 'Hello';
}

/**
   * -------------------------------------------------------
   * 1 - Afficher le type de chacune des variables dans la console
   * -------------------------------------------------------
*/




const user2 = {
    firstname: "Michel",
    lastname: "Polnareff",
}

const user3 = user2;

user3.firstname = "Jean-Michel";
console.log(user2.firstname);
console.log(user3.firstname);

const str = 42;
const str2 = 42.0;

if (str === str2) {
    console.log("c toto");
} else {
    console.log("cé pa toto");
}

let user1000 = null;
user1000 = {}
