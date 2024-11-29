// Voici un jeu de données : interdiction d'y toucher :) 
const characterNames = [
  "63AIS",
  "A'misandra",
  "Amimari",
  "Alika",
  "54B2",
  "A'merpact",
  "Amazora",
];

/**
 * -------------------------------------------------------
 * 1 - Afficher le nombre de personnages dans le tableau 
 * -------------------------------------------------------
 */

console.log(characterNames.length);

/**
 * -------------------------------------------------------
 * 2 - Afficher le nom du premier personnage du tableau
 * -------------------------------------------------------
 */

console.log(characterNames[0]);

/**
 * -------------------------------------------------------
 * 3 - Afficher le nom du dernier personnage (le 7eme)
 * -------------------------------------------------------
*/

console.log(characterNames[6]);
/**
 * -------------------------------------------------------
 * 4 - Afficher le nom du dernier personnage **SANS** 
 * savoir qu'il est le 7eme
 * -------------------------------------------------------
 */
const lastElement = characterNames.length - 1; // 7 - 1 = 6
console.log(characterNames[lastElement]); // characterNames[6]
/**
 * -------------------------------------------------------
 * 5 - Afficher les noms de tous les personnages
 * -------------------------------------------------------
 */

// Façon de faire fléchée longue
characterNames.forEach((character) => {
  console.log(character);
})

// Façon de faire fléchée courte
characterNames.forEach((character) => console.log(character));

// Façon de faire sans fléchée
characterNames.forEach(function (character) {
  console.log(character);
})

/**
 * -------------------------------------------------------
 * 6 - Afficher le nom de chaque personnage accompagné du 
 * nombre de caractères qu'il contient. Ex: Alika (5)
 * -------------------------------------------------------
 */

characterNames.forEach((character) => {
  console.log(character + " " + character.length);
})
/**
 * -------------------------------------------------------
 * 7 - Afficher le nom de chaque personnage en minuscules
 * -------------------------------------------------------
 */

characterNames.forEach((character) => {
  console.log(character.toLowerCase());
})


/**
 * -------------------------------------------------------
 * 8 - Afficher le nombre de personnages dont le nom 
 * contient la lettre 'a' (minuscule ou majuscule)
 * -------------------------------------------------------
 */

let counter = 0;

characterNames.forEach((character) => {
  // Phaco style
  if (character.includes("a") || character.includes("A")) {
    counter++;
  }
  // Better style
  if (character.toLowerCase().includes("a")) {
    counter++;
  }
});

console.log(counter);
/**
 * -------------------------------------------------------
 * 9 - Créer une fonction `search(needle)` qui renvoie 
 * les personnages dont le nom contient les lettres 
 * passées en paramètre.
 * 
 * Ex : search('Amim') doit renvoyer 'Amimari'
 * ------------------------------------------------------- 
 */
// Créer fonction
// Parcourir mon tableau
// Vérifier si l'itération en cours contient mon paramètre
// Si c'est le cas -> je .push() l'itération (donc le personnage) dans un tableau
// A la fin de ma fonction, je return mon tableau

function search(searchedString) {
  const matches = [];

  characterNames.forEach((character) => {
    if (character.toLowerCase().includes(searchedString)) {
      matches.push(character);
    }
  })

  return matches;
}

search("akncie");
