console.log("________");


/*
    boucle while
*/
var i = 0; // i pour itération
var triangle = [];

while (i < 10) {
    i++; //i++ vient ajouter 1 a i pour arriver a 10
    triangle.push("#");

    console.log(i, triangle);
}

/*
    boucle for
*/

var triangle = [];

for(var i = 10; i > 0; i--) { // i-= 2(par exemple) permet de calculer de 2en2
triangle.push("#");
    console.log(i, triangle);
}