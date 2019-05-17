
// Fonction 01
function maFonction(resultat) {
    console.log(2 + resultat);
}
maFonction(8);

// Fonction 02
function soustraction(a, b) {
    console.log(a - b);
}
soustraction(10, 2);

// Fonction 03
var fruits = "banane";

function panier(){
    var fruits = "pomme"; // Si var n'est pas indiqué, alors il affichera 2 fois pomme
    console.log(fruits);
}
panier();
console.log(fruits);

//Fonction 04
function soustraction(a, b) {
    return a - b;
}
var resultat = soustraction(1, 5);
console.log(resultat); 


//lesson Practice
var note1 = 17;
var note2 = 14;

function calculMoyenne(a, b){
    return (a + b) / 2;
}

var moyenne = calculMoyenne(note1, note2);
console.log(moyenne);
