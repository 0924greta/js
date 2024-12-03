/**
   * -------------------------------------------------------
   * 1 - Créer une div :
   * → qui possède un titre de niveau 3 avec un id et du texte
   * → qui possède un paragraphe avec du texte
   * → qui possède un bouton avec une classe et un texte
   * 
   * Ajouter cette div à la section "hero-section"
   * -------------------------------------------------------
*/


// Méthode 1 
// Création des éléments
const div = document.createElement("div");
const title = document.createElement("h3");
const paragraph = document.createElement("p");
const btn = document.createElement("button");

// Ecriture de mes éléments
title.id = "title-id";
title.innerText = "Du super texte";

paragraph.innerText = "Incroyable paragraphe WOAW";

btn.innerText = "Texte du bouton";
btn.classList.add("my-amazing-class");

// Injection de mes éléments
div.appendChild(title);
div.appendChild(paragraph);
div.appendChild(btn);

const heroSection = document.querySelector("#hero-section");

// Méthode 2
div.innerHTML =
   `
<h3 id="my-id">Titre</h3>
<p>Texte</p>
<button class="btn">Texte</button>
`
heroSection.appendChild(div);


/**
   * -------------------------------------------------------
   * 2 - Écrire une fonction qui créer et retourne un élément HTML "li" avec du texte.
   * Exemple : l'execution de la fonction     createMenuItem("Item 1")       retourne :       <li>Item 1</li>
   * → Créer ainsi 5 puces et les insérer dans la liste à puces "menu"
   * -------------------------------------------------------
*/


const liTextListMenu = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const menu = document.querySelector('#menu');

function createMenuItem(parentMenu, textItem) {
   const li = document.createElement("li");
   li.innerText = textItem;
   parentMenu.appendChild(li);
}

liTextListMenu.forEach(element => {
   createMenuItem(menu, element);
});



/**
   * -------------------------------------------------------
   * 3 - Créer un second menu (via JS uniquement):
   * → La liste à puces aura pour id "menu2" et comportera 3 éléments
   * -------------------------------------------------------
*/

const menu2 = document.createElement("ul");
menu2.id = "menu2";
const liTextListMenu2 = ["Item 1", "Item 2", "Item 3"];

liTextListMenu2.forEach(element => {
   createMenuItem(menu2, element);
});

const header = document.querySelector("header");
header.appendChild(menu2);



/**
   * -------------------------------------------------------
   * 4 - Déplacer le premier et le dernier élément de la première liste (menu) dans la seconde liste (menu2)
   * -------------------------------------------------------
*/
const firstItem = menu.querySelector("li:first-child");
const lastItem = menu.querySelector("li:last-child");

menu2.appendChild(firstItem);
menu2.appendChild(lastItem);

/**
   * -------------------------------------------------------
   * 5 - Changer le texte des puces qui viennent d'être déplacées
   * -------------------------------------------------------
*/
menu2.querySelector("li:first-child").innerText = "Premier élément déplacé";
menu2.querySelector("li:last-child").innerText = "Dernier élément déplacé";

/**
   * -------------------------------------------------------
   * 6 - Supprimer le titre de niveau 1 qui n'a rien à faire dans le <head></head> et dont l'id est scandaleux 🤓
   * -------------------------------------------------------
*/
const scandalousTitle = document.querySelector("head h1#scandaleux");
if (scandalousTitle) {
   scandalousTitle.remove();
}

// Voici un bout de code : ne pas toucher ! 
const elementListToCreate = [
   {
      name: "section",
      times: 3
   },
   {
      name: "div",
      times: 3
   },
   {
      name: "p",
      times: 1
   },
   {
      name: "span",
      times: 3
   },
]
/**
   * -------------------------------------------------------
   * 7 - Créer une boucle qui permet de créer et d'injecter dans le body les éléments du tableau un nombre X de fois. 
   * Chaque élément est l'enfant du précédent.
   * Exemple (basé sur le tableau ci-dessus) : il faut créer 3 sections. Chaque section possède 3 div. Chaque div possède 3 paragraphes (avec du texte). Chaque paragraphe possède 3 spans (avec du texte et une classe, la même pour chaque span)
   * -------------------------------------------------------
*/


function createAndInjectElements(elements) {
   const body = document.body;

   for (let i = 0; i < elements[0].times; i++) {
      //  section
      const section = document.createElement(elements[0].name);
      body.appendChild(section);

      for (let j = 0; j < elements[1].times; j++) {
         //  div
         const div = document.createElement(elements[1].name);
         section.appendChild(div);

         for (let k = 0; k < elements[2].times; k++) {
            // paragraphe
            const paragraph = document.createElement(elements[2].name);
            paragraph.textContent = "This is a paragraph";
            div.appendChild(paragraph);

            for (let l = 0; l < elements[3].times; l++) {
               //  span
               const span = document.createElement(elements[3].name);
               span.textContent = `Span ${l + 1}`;
               span.classList.add("custom-span-class");
               paragraph.appendChild(span);
            }
         }
      }
   }
}

// Exécution
createAndInjectElements(elementListToCreate);



/**
   * -------------------------------------------------------
   * 8 - Sélectionner tous les spans nouvellement créés. Modifier leur texte via une boucle. Chaque span doit afficher "je suis le span n°X"
   * Exemple : 
   * → Le premier span doit afficher "je suis le span n°1"
   * → Le second span doit afficher "je suis le span n°2"
   * → etc... jusqu'au span n°9 🤯
   * -------------------------------------------------------
*/
const spans = document.querySelectorAll("span.span-class");
spans.forEach((span, index) => {
   span.innerText = `je suis le span n°${index + 1}`;
});