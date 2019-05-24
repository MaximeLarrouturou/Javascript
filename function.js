console.log("______");

/* 
    Fonction 01
*/
function maFonction(resultat) {
    console.log(2 + resultat);
}
maFonction(8);

/* 
    Fonction 02
*/

function soustraction(a, b) {
    console.log(a - b);
}
soustraction(10, 2);

/* 
    Fonction 03
*/
var fruits = "banane";

function panier(){
    var fruits = "pomme"; // Si var n'est pas indiqué, alors il affichera 2 fois pomme
    console.log(fruits);
}
panier();
console.log(fruits);

/* 
    Fonction 04
*/
function soustraction(a, b) {
    return a - b;
}
var resultat = soustraction(1, 5);
console.log(resultat); 

/*
    La condition if/else
*/

function biereForte(alcool){
    if (alcool >= 15) {
        return "La biere est très forte";
    }
    else if (alcool >= 10) {
        return "La biere est forte";
    }
    else {
        return "La biere n'est pas forte";
    }
    
}

console.log(biereForte(8));


/* 
    Générer un npmbre aléatoire dans un rang
*/ 


function rangRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log(rangRandom(5, 10));