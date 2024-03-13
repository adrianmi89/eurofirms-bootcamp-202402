
function endsWithString(string, buscaCaracter){

    var acumulate = "";
    for(let i=0;i < string.length;i++){
        for(let j=0; j < buscaCaracter.length;j++){
            if(string[i] == buscaCaracter[j]){

                acumulate += string[i];
            }
        }
    }
    if(acumulate === buscaCaracter){
        return true;
    }
    
    return false;
}

console.log("CASO 1: La función devuelve verdadero si el final de una cadena contiene los carácteres indicados.\n");
var cadena = "El desarrollo web es el santo grial de todo negocio que quiera crecer.";
var result = endsWithString(cadena, "crecer.");

console.log({expected: true, received: result});

console.log("CASO 2: La función devuelve verdadero si la cadena pasada se encuentra en esa longitud.\n");
var cadena = "El desarrollo web es el santo grial de todo negocio que quiera crecer.";
var result = endsWithString(cadena, "crecer.", 40);

console.log({expected: true, received: result});

