
let coches = {
    0: " Peugeot ",
    1: "Ferrari ",
    2: "Mercedes Benz",
    length: 3
}

function trim(object, element){

    var cleanElement = ''
    var result = "";
    for(let i=0;i < object.length;i++){
        // for invertido para limpiar espacios del final
        var resultB = ''
        for(let j=0; j < object[i].length;j++){
            if(object[i][j] !== ' ' || resultB){
                result += object[i][j];
            }
        }

        // otro for para limpiar espacios del principio
        result += " "
        console.log(result);
        
    }
}

trim(coches, " ");
// result = Peugeot Ferrari Mercedes