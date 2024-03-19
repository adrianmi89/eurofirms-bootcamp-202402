
// usando el indexOf, encuenta el numero 30
// ahora usando el splice, borralo

var numbers = [10, 20, 30, 40, 50, 60];

var encuentraNum = numbers.indexOf(30);
/* var encuentraNum = numbers.indexOf(function(num){
    return num == 30;
}) */

if(encuentraNum != -1){
    numbers.splice(encuentraNum, 1);
}
else{
    console.log("Número no encontrado");
}

console.log("\nCASE 1: Debemos devolver 30 si se encuentra en el array, usando indexOff() y splice().\n");
console.log({expected: "[10, 20, 40, 50, 60]", received: numbers});

//--------------------------------------------------

// usando el findIndex encuenta al usuario con el id 'g48ge5g' y borralo

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

//--------------------------------------------------

// borra todos los numeros impares

var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]

// borra todos los usuarios cuyo nombre empiece con 'pe'

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

