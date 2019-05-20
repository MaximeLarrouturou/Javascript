// vrai = true || faux = false
// == permet de savoir si une valeur est égale à une autre valeur
// === (!==) permet de vérifier la valeur et le type, un nombre, une chaine de caract.
// != permet de savoir si une valeur est différente d'une autre valeur
// <= Inférieur ou égale
// >= Supérieur ou égale
// > Strictement supérieur
// < Strictement inférieur
// ? est-ce que c'est ...
// : sinon
// && et...
// || ou...

var a = "Un fruit";
var b = "Un légume";

console.log(a != b);
console.log(a == b);

/*
   La condition ternaire
*/

console.log(a != b ? "Un fruit est différent d'un légume" : "Un fruit n'est pas un légume");

/*
    Les opérateurs
*/

var demi = 25;
var pinte = 50;
//demi = 50;

console.log(demi >= pinte ? "Oui" : "Non");
console.log(demi == demi && demi == pinte); // il faut que les 2 booleans soit vrai pour retourner true
console.log(demi == demi || demi >= pinte); // il faut que au moins un des 2 booleans soit vrai pour retourner true

/*
    Le mode strict
*/

console.log(demi !== "Pinte");