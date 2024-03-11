
/* var articulos = {
    0: "Pilas",
    1: "Juguetes",
    2: "Baterias",
    3: "Drones",
    4: "PerrosRobot",
    length: 5
} */

function sliceString(string, indexStart, indexEnd){
    let result = ""

    for(let i=indexStart;i < indexEnd;i++){

        result += string[i];
    }

    return result;
}

let cadena = "Pilas - Juguetes - ";
var result = sliceString(cadena, 0, 5);


console.log({expected: "Pilas", received: result});


let cadena2 = "Hello world";
var result2 = sliceString(cadena2, 6, cadena2.length);


console.log({expected: "world", received: result2});