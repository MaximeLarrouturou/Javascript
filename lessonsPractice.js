/* 
    Cas pratique tableau : Afficher prenom, nom 
    et initiale de prenom et nom
*/
var prenom = "Maxime";
var nom = "Larrouturou";
var initiale = prenom[0] + nom[0];

var resultat = [];

resultat.push(prenom, nom, initiale);

console.log(resultat);


/* 
    Cas pratique fonction : calculer une moyenne
*/
var note1 = 17;
var note2 = 14;

function calculMoyenne(a, b){
    return (a + b) / 2;
}

var moyenne = calculMoyenne(note1, note2);
console.log(moyenne);
