console.log("______");

/*
    Les tableaux [array]
*/
var panier = ["Mon panier", "Panier vide"];

// Je stoque Panier vide, je le vois dans ma console (stock)
var stock = panier.pop(); 
//si je met .shift(), J'aurais en stoque Mon panier

var fruits = ["banane", "poire", "pomme", "fraise"]; 
var legumes = ["pomme de terre", "carotte", "courgette", "salade"];

// Je regroupe mes aliments
var category = [fruits, legumes];

var commande = [panier[0], category];

// Je met à jours 
fruits[0] = "rupture de banane";
category[1][3] = "Rupture de salade";
//category[1] = "Rupture de legumes";

// J'ajoute un nouvelle aliment dans les fruits
fruits.push("kiwi");

// Au lieu de créer une mise à jour sur la rupture de salade, je supprime la salade. Pop supprime le dernier élémente du tableau
var category = legumes.pop();

// ici on va supprimer les poires [1] et les pommes [2]
fruits.splice(1,2); 
// On cible l'élément du tableau avec le premier chiffre, le second vient supprimer ce qu'on indique (ex: 1 du tableau et 3 on supprime 1, 2, 3)

console.log(commande);
console.log(stock);

// Pour supprimer le premier élément utiliser shift.
// Pour supprimer le dernier élément utiliser pop
// .length me permet de trouver la taille de mon tableau 

