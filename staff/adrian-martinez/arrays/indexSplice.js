
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

console.log("\nCASE 1: Debemos el array con el número 30 si se encuentra en el array, usando indexOff() y splice().\n");
console.log({expected: "[10, 20, 40, 50, 60]", received: numbers});

//--------------------------------------------------

// usando el findIndex encuenta al usuario con el id 'g48ge5g' y borralo

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var callback = function(user){
    return user.id == "g48ge5g";
}

//El findIndex necesita un callback como primer argumento y te devuelve el índice en el caso de que el elemento exista
var borrarUsuario = users.findIndex(callback);
console.log(borrarUsuario);

if(borrarUsuario != -1){
    users.splice(borrarUsuario, 1);
}
else{
    console.log("ID no encontrado");
}

console.log("\nCASE 2: Debemos buscar el usuario con el ID g48ge5g y si existe borrarlo.\n");
console.log({expected: "{id: 'fdg5t5t', id: '5t45e5i'', id: 'djn5gje', saved: [Object]", received: users});
//--------------------------------------------------

// borra todos los numeros impares

var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]

/*var eliminaImpares = numbers2.filter(function (num){
    return num % 2 != 0;
})
console.log(eliminaImpares);
*/
//Hacer un foreach con indexOf y luego hacer el splice
var eliminaImpares = numbers2.filter(function (num){
    return num % 2 !== 0;
})

eliminaImpares.forEach(function(num){
    var index = numbers2.indexOf(num);
 
    numbers2.splice(index, 1)
 })

console.log("\nCASE 3: Debemos buscar los números impares y eliminarlos.\n");
console.log({expected: "[12, 40, 6, 24]", received: numbers2});

// borra todos los usuarios cuyo nombre empiece con 'pe'

var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var borrarUsuariosPorFiltro = users2.filter(function(user){
    return user.name.slice(0, 2) === "pe";
});

borrarUsuariosPorFiltro.forEach(function(user){
   var index = users2.findIndex(function(indexUser){
       return indexUser.name === user.name
   })

   users2.splice(index, 1)
})


console.log("\nCASE 4: Debemos eliminar todos los usuarios que empiezen por 'pe'.\n");
console.log({expected: "[{wendy}, {pinocho}]", received: users2});
