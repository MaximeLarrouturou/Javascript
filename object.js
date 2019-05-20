console.log("______");

var motard = {
    "force": 15,
    "vitesse": 5,
    "faiblesse": ["terre", "pluie"],
    "equipements": {
        "casque": "integral",
        "blouson": "cuir"
    }
};

motard.force = 20; //modifie une valeur
motard.moto = "kawasaki";// Créer une valeur

delete motard.moto; // supprime une valeur

var requete  = "force";

console.log(motard);
console.log(motard[requete]);
console.log(motard.faiblesse[0]);

console.log(motard.hasOwnProperty("force"));
console.log(motard.equipements.casque);