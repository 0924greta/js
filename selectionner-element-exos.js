/**
   * -------------------------------------------------------
   * 1 - Récupérer (par les 2 méthodes différentes) la section "nos services" : 
   * → par son id 
   * → par son nom de balise
   * -------------------------------------------------------
*/

const ourSectionById = document.getElementById('our-services');
const ourSectionByIsBis = document.querySelector('#our-services');

const ourSectionByTagName = document.getElementsByTagName('our-services');

/**
   * -------------------------------------------------------
   * 2 - Récupérer les 2 inputs par leur id
   * → Afficher leur valeur (value) dans la console
   * -------------------------------------------------------
*/

const firstInput = document.querySelector('#great');
const secondInput = document.querySelector('#not-great');
console.log(firstInput.value, secondInput.value);

/**
   * -------------------------------------------------------
   * 3 - Récupérer le titre de niveau 3 de la seconde division de la seconde section
   * → afficher la valeur de son texte dans la console
   * -------------------------------------------------------
*/

// Méthode 1
const searchTitle = document.querySelector("#flex-container h3");
// Méthode 2
const searchTitleMth2 = document.querySelector("div.cards-container div:nth-child(2) h3");
// Méthode 3
const cardsContainer = document.querySelector(".cards-container");
const title = cardsContainer.lastElementChild.firstElementChild.nextElementSibling;

console.log(searchTitle.innerText, searchTitleMth2.innerText, title.innerText);

/**
   * -------------------------------------------------------
   * 4 - Il est possible de récupérer un élément qui possède plusieurs classes. Récupérer tous les éléments :
   * → qui partagent la classe :   "btn"
   * → qui partagent la classe :   "cta-btn"
   * → qui partagent la classe :   "cta-primary"
   * → qui partagent la classe :   "cta-secondary"
   * → qui partagent les classes : "cta-btn cta-primary"
   * → qui partagent les classes : "btn cta-btn cta-secondary"
   * 
   * → Les afficher dans la console
   * → Via JS, compter le nombre de fois où la classe "btn" est présente
   * -------------------------------------------------------
*/

const btnList = document.querySelectorAll('.btn');
const ctaBtnList = document.querySelectorAll('.cta-btn');
const ctaPrimaryList = document.querySelectorAll('.cta-primary');
const ctaSecondaryList = document.querySelectorAll('.cta-secondary');
const ctaBtnCtaPrimaryList = document.querySelectorAll('.cta-btn.cta-primary');
const ctaBtnCtaSecondaryList = document.querySelectorAll('.btn.cta-btn.cta-secondary');

console.log(btnList, ctaBtnList, ctaPrimaryList, ctaSecondaryList, ctaBtnCtaPrimaryList, ctaBtnCtaSecondaryList);

console.log(btnList.length);

/**
   * -------------------------------------------------------
   * 5 - Récupérer tous les paragraphes. Via une boucle, les afficher dans la console
   * -------------------------------------------------------
*/

const paragraphList = document.querySelectorAll('p');
for (let i = 0; i < paragraphList.length; i++) {
   console.log(paragraphList[i]);
}


/**
   * -------------------------------------------------------
   * 6 - Récupérer et afficher les éléments suivants dans la console : 
   * → le parent direct de la première section
   * → le premier enfant de la première section
   * → le dernier enfant de la première section
   * → le frère précédent de la section "nos services"
   * → le frère suivant de la section "nos services"
   * 
   * -------------------------------------------------------
*/

const firstParent = document.querySelector('section');
console.log('Parent : ', firstParent.parentElement);
console.log('Premier enfant : ', firstParent.firstElementChild);
console.log('Dernier enfant : ', firstParent.lastElementChild);

console.log(ourSectionByQs.previousElementSibling);
console.log(ourSectionByQs.nextElementSibling);

/**
   * -------------------------------------------------------
   * 7 - Créer une fonction qui permette de compter le nombre de fois "où la balise X apparaît".
   * Compter ensuite le nombre de fois où : 
   * la balise HTML h1 apparaît
   * la balise HTML h2 apparaît
   * la balise HTML h3 apparaît
   * la balise HTML p apparaît
   * la balise HTML section apparaît
   * la balise HTML div apparaît
   * → Calculer la somme totale de ces occurences et afficher le résultat dans la console
   * -------------------------------------------------------
*/


function countTag(tagName) {
   return document.querySelectorAll(tagName).length;
}

let sum = 0;
const tags = ["h1", "h2", "h3", "p", "section", "div"];

tags.forEach((tag) => sum = sum + countTag(tag));

console.log(sum);
