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

/* 
    Cas pratique fonction : calculer une moyenne v2
*/

// 1er cas 

/*
    var note3 = 12;
    var note4 = 8;
    var note5 = 16;

    function calcul(e, f, g){
        return  (e + f + g) / 3; // Moyenne de 12
    }

    var arr = calcul(note3, note4, note5);

    function niveau(arr) {
        if(arr >= 15){
            return "Très bien";
        }
        else if (arr >= 10) {
            return "Bien";
        }
        else {
            return "Convoquation des parents";
        }
    }

    console.log(arr); // Moyenne de 12
    console.log(niveau(arr));
*/

// 2nd cas

function niveau(arr) {
    var moyenne = (arr[0] + arr[1] + arr[2]) / arr.length;

    if (moyenne >= 15) {
        return "Très bien " + moyenne;
    }

    else if (moyenne >= 10) {
        return "Bien " + moyenne;
    }

    return "Convocation des parents " + moyenne;
    }


console.log(niveau([12, 8, 16]));