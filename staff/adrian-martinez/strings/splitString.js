
function splitString(string, separator){
    let result = [];
    let acumulateString = "";

    for(let i=0;i < string.length;i++){

        //El segundo if funciona pero no debe añadir al array el separador. Faltaría eso de arreglar
        if(separator.length == 3){
            if(string[i] == separator[0] && string[i+1] == separator[1] && string[i+2] == separator[2]){

                result[result.length] = acumulateString;
                acumulateString = "";
            }
        }
   /*      if(separator.length > 1){

            var separatorCompare = "";
            for(let j = i;j < separator.length + i;j++){
                separatorCompare += string[j];
            }

            if(separator === separatorCompare){

                result[result.length] = acumulateString;
                acumulateString = "";
            }
            else
                acumulateString += string[i];
        } */
        if(string[i] == separator){
                    //    0 -> result[0]
                    //    1 -> result[1]
            result[result.length] = acumulateString;

            acumulateString = "";
        } 
        else 
            acumulateString += string[i];
    }

    return result;
}

//Testing
console.log("CASE 1: You should return elements that are separated by a script\n");
let cadena = "Pilas-Juguetes-Baterías-Drones-PerrosRobot";
var result = splitString(cadena, "-");

console.log({expected: ["Pilas","Juguetes","Baterías","Drones","PerrosRobot"], received: result});

console.log("CASE 2: It should return elements that are separated by a hyphen including the last element if it does not have a trailing hyphen.\n");
let cadena2 = "Pilas-Juguetes-Baterías-Drones-PerrosRobot";
cadena2 + "-" //No sería una buena práctica. No debería modicar la cadena fuera de la función
var result = splitString(cadena2, "-"); 

console.log({expected: ["Pilas","Juguetes","Baterías","Drones","PerrosRobot"], received: result});

console.log("CASE 3: It should return elements that are separated by a hyphen including the last element if it does not have a trailing hyphen.\n");
let cadena3 = "Pilas - Juguetes - Baterías - Drones - PerrosRobot";
var result = splitString(cadena3, " - ");

console.log({expected: ["Pilas","Juguetes","Baterías","Drones","PerrosRobot"], received: result})