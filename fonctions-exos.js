
// /**
//    * -------------------------------------------------------
//    * 1 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de ces 2 paramètres. Afficher le résultat dans la console.
//    * -------------------------------------------------------
// */

function add(number1, number2) {
   return number1 + number2;
}

console.log(add(5, 3)); // 8


// /**
//    * -------------------------------------------------------
//    * 2 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de :
//    *  → la raçine carrée du premier paramètres
//    *  → le second paramètre à la puissance 7
//    *  Afficher le résultat dans la console.
//    * -------------------------------------------------------
// */

function compute(nb1, nb2) {
   return Math.sqrt(nb1) + Math.pow(nb2, 7);
}

compute(1, 4);
compute(1, 2);
compute(1, 6);


// /**
//    * -------------------------------------------------------
//    * 3 - Créer une fonction qui vérifie si l’utilisateur est apte à apprendre du Javascript : 
//     avec prompt, demander successivement à l’utilisateur les deux langages de programmation à apprendre avant de démarrer le JS
//     → S’il répond successivement HTML puis CSS, alors la fonction retourne vrai ; sinon faux.
//     → Si l’exécution de la fonction retourne vrai, alors la console affiche “Bienvenue en JS jeune éphèbe”
//     → Si l’exécution de la fonction retourne faux, alors la console affiche “Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais”
//    * -------------------------------------------------------
// */

const prompt1 = prompt("tu coco le HTML ?");
const prompt2 = prompt("tu coco le CSS ?");

function isReadyForJS() {
   if (prompt1.toLowerCase() === "HTML".toLowerCase() && prompt2.toLowerCase() === "CSS".toLowerCase()) {
      return true;
   } else {
      return false;
   }
}

if (isReadyForJS()) {
   console.log("génial");
} else {
   console.log("Déso pas prêt");

}



const fruits = [
   "Banane",
   "Kiwi",
   "Fraise",
   "Citron",
   "Mangue",
   "Cerise"
];

function search(searchedString) {

   // Créer un tableau vide
   const matches = [];

   // Ma boucle sur le tableau
   fruits.forEach((fruit) => {
      if (fruit.includes(searchedString)) {
         matches.push(fruit);
      }
   });

   return matches;
}

const matches = search("c");
console.log(matches);



// Cette écriture ci
function sayAge(age) {
   return age * 2
}

// Vaut celle-ci
const sayAge = (age) => {
   return age * 2;
}

// Qui vaut également celle-ci
const sayAge = (age) => age * 2;



// Autre exemple 

// Cette écriture-ci
function sayHello(name) {
   return "Hello " + name;
}
const result = sayHello("pilou");
console.log(result);

// Vaut celle-ci
const sayHello = (name) => "Hello " + name;
console.log(sayHello("pilou"));


