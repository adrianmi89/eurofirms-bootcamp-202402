
function replaceString(string, aRemplazar, caracter){

    var result = "";
    for(let i=0;i < string.length;i++){
        
        // result += string[i];
        if(string[i] === aRemplazar){

            result += caracter;
        }
        else {
            result += string[i]
        }
    }

    return result;
}

var cadena = "La avispa solo tiene mala ostia en verano.";

var result = replaceString(cadena, "a", "b");

console.log("CASO 1: La función debe sustituir un caracter pasado como tercer argumento por el segundo en la cadena.");
console.log({expected: "Lb bvispb solo tiene mblb ostib en verbno.", received: result})
