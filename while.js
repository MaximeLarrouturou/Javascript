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

/* ------ */

var arr = [10, 5, 15, 7];
var total = 0;

for (var i = 0; i < arr.length; i++) {
    total += arr[i]; 
}

console.log(total);

/*
    Une boucle dans une boucle
*/

function plusUn(arr){
    for (var i = 0; i < arr.length; i ++){
        for (var j = 0; j < arr[i].length; j++){
            arr[i][j] += 1;
        }
    }
    return arr;
}

console.log(plusUn([[1 ,2],[3, 4],[5, 6]]));