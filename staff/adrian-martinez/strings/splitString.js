
function splitString(string, separator){
    let result = [];
    let acumulateString = "";

    for(let i=0;i < string.length;i++){

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

let cadena = "Pilas-Juguetes-Baterías-Drones-PerrosRobot-";
var result = splitString(cadena, "-");

//Testing
console.log({expected: ["Pilas","Juguetes","Baterías","Drones","PerrosRobot"], received: result});
