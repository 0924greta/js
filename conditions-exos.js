// Voici une variable : ne pas toucher :) 
const guessName = "Sphinx";

/**
   * -------------------------------------------------------
   * 1 - Si la variable guessName est égale à "Sphinx", afficher "Vive l'Égypte".
   *  Sinon, afficher "De toute façon je ne comprends rien aux cartes" (PERCEVAL KAAMELOTT)
   * -------------------------------------------------------
*/

if (guessName === "Sphinx") {
   console.log("Vive l'Égypte");
} else {
   console.log("De toute façon je ne comprends rien aux cartes");
}

// Voici une variable : ne pas toucher :) 
const comparedString = "secret";
/**
   * -------------------------------------------------------
   * 2 - Demander à l'utilisateur de saisir un mot de passe (voir la fonction Javascript “prompt”)
   *  Si ce mot de passe correspond à la variable comparedString, afficher "Bienvenue BG ! 🙌" dans la console
    Sinon: afficher "C'est NON 🦄".
   * -------------------------------------------------------
*/
const password = prompt("Entrer le MPD SVP");

if (password === comparedString) {
   console.log("Bienvenue BG ! 🙌");
} else {
   console.log("C'est NON 🦄");
}

// En ternary
// password === comparedString ? console.log("Bienvenue BG ! 🙌") : console.log("C'est NON 🦄");

/**
   * -------------------------------------------------------
   * 3 - Écrire un programme qui demande à l'utilisateur d'entrer son âge (en utilisant “prompt”) et qui affiche ensuite un message en fonction de sa tranche d'âge :
    Si l'âge est inférieur à 3 : "Hello, Baby 🍼!"
    Si l'âge est inférieur à 18: "Hi! 👋"
    Si l'âge est supérieur à 100: "Greetings 🖖"
    Dans les autres cas: "Wow... 😲"
   * -------------------------------------------------------
*/

const userAge = prompt("VOTRE AGE SVP");
if (userAge < 3) {
   console.log("Hello Baby");
} else if (userAge < 18) {
   console.log("Hi!");
} else if (userAge > 100) {
   console.log("Greetings");
} else {
   console.log("Wow... 😲");
}

/**
   * -------------------------------------------------------
   * 4. Écrire un programme qui demande à l'utilisateur son nom et son âge et qui vérifie si le nom est égal à "Bob" et si l'âge est égal à 30.
   *  Si les deux conditions sont vérifiées, afficher "Welcome", sinon "Go away".
   * -------------------------------------------------------
*/

const userName = prompt("Votre nom svp");
const userAge2 = prompt("Votre âge svp");
console.log(typeof userAge);
if (userName === "Bob" && Number(userAge2) === 30) {
   console.log("Welcome");
} else {
   console.log("Go away!")
}

/**
   * -------------------------------------------------------
   * 5. En Javascript, on peut récupérer la jour de la semaine en cours en utilisant new Date().getDay().
   *  Cette expression nous retourne un nombre entre 0 (dimanche) et 6 (samedi).
    → Utiliser une structure switch...case pour afficher dans la console le nom du jour de la semaine en fonction du nombre retourné. 
   * -------------------------------------------------------
*/

const todayDate = new Date().getDay(); // 0 ou 1 ou 2 ... ou 6
switch (todayDate) {
   case 0:
      console.log("Dimanche");
      break;
   case 1:
      console.log("Lundi");
      break;
   case 2:
      console.log("Mardi");
      break;
   case 3:
      console.log("Mercredi");
      break;
   case 4:
      console.log("Jeudi");
      break;
   case 5:
      console.log("Vendredi");
      break;
   case 6:
      console.log("Samedi");
      break;

   default:
      break;
}


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

animal.name === "Lucky" ? console.log("Voici un Pôtichat mignon") : console.log("Argh ! Ce n'est pas mon chat...");