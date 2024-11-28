// Voici une variable : ne pas toucher :) 
const guessName = "Sphinx";
/**
   * -------------------------------------------------------
   * 1 - Si la variable guessName est égale à "Sphinx", afficher "Vive l'Égypte".
   *  Sinon, afficher "De toute façon je ne comprends rien aux cartes"
   * -------------------------------------------------------
*/



// Voici une variable : ne pas toucher :) 
const comparedString = "secret";
/**
   * -------------------------------------------------------
   * 2 - Demander à l'utilisateur de saisir un mot de passe (voir la fonction Javascript “prompt”)
   *  Si ce mot de passe correspond à la variable comparedString, afficher "Bienvenue BG ! 🙌" dans la console
    Sinon: afficher "C'est NON 🦄".
   * -------------------------------------------------------
*/

const answer = prompt();

if (answer === comparedString) {
   console.log("Bienvenue");
} else {
   console.log("Déso");
}


/**
   * -------------------------------------------------------
   * 3 - Écrire un programme qui demande à l'utilisateur d'entrer son âge (en utilisant “prompt”) et qui affiche ensuite un message en fonction de sa tranche d'âge :
    Si l'âge est inférieur à 3 : "Hello, Baby 🍼!"
    Si l'âge est inférieur à 18: "Hi! 👋"
    Si l'âge est supérieur à 100: "Greetings 🖖"
    Dans les autres cas: "Wow... 😲"
   * -------------------------------------------------------
*/


/**
   * -------------------------------------------------------
   * 4. Écrire un programme qui demande à l'utilisateur son nom et son âge et qui vérifie si le nom est égal à "Bob" et si l'âge est égal à 30.
   *  Si les deux conditions sont vérifiées, afficher "Welcome", sinon "Go away".
   * -------------------------------------------------------
*/


/**
   * -------------------------------------------------------
   * 5. En Javascript, on peut récupérer la jour de la semaine en cours en utilisant new Date().getDay().
   *  Cette expression nous nous retourne un nombre entre 0 (dimanche) et 6 (samedi).
    → Utiliser une structure switch...case pour afficher dans la console le nom du jour de la semaine en fonction du nombre retourné. 
   * -------------------------------------------------------
*/


// Voici un bout de code. Ne pas toucher !
const animal = {
   name: "Lucky",
   specie: "Cat",
   color: "Black"
}
if (animal.name === 'Lucky') {
   console.log("Voici un Pôtichat mignon");
} else {
   console.log("Argh ! Ce n'est pas mon chat...");
}
/**
   * -------------------------------------------------------
   * 6. Réécrire la condition en utilisant l'opérateur ternaire
   * -------------------------------------------------------
*/



// Voici un jeu de données : ne pas toucher :) 
const n1 = 1
const n2 = 13
const n3 = 20
const n4 = 41
const n5 = 70
const n6 = 100

/**
   * -------------------------------------------------------
   * 7 - Pour chaque donnée, vérifier si elle est paire. Si oui, afficher sa valeur suivie de "est paire ✅". Sinon, afficher sa valeur suivie de "Impaire ❌"
   * -------------------------------------------------------
*/

if (n1 % 2) {
   console.log(n1 + ' est paire ✅');
} else {

}
const firstname = "paul";
const condition = firstname.toLowerCase() === "Paul".toLowerCase();
const condition2 = {};

// Valeurs falsy : 0, -0, undefined, false, null, NaN, ""
if (condition2) { // false
   console.log("salut paul");
} else {
   console.log("OMG C FO");
}