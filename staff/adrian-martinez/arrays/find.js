
// usando el find, encuentra el primer numero mayor a 20

var numbers = [10, 20, 30, 40, 50, 60]

var buscarNumero = numbers.find(function(numero){
    return numero > 20;
})

console.log("Array original -> "+ numbers);
console.log("\nCASE 1: Debemos devolver los números mayores a 20.\n");
console.log({expected: 30, received: buscarNumero});

// --------------------------------------------------

// encuentra el primer string que contenga una 'u'

var strings = ['hola', 'mundo', 'a', 'todos']

var buscarPalabra = strings.find(function(palabra){
    return palabra.includes("u");
})

console.log("\nArray original -> "+ strings);
console.log("\nCASE 2: Debemos devolver la primera palabra que incluya la letra u.\n");
console.log({expected: "mundo", received: buscarPalabra});

// --------------------------------------------------

// encuentra el primer numero impar

var numbers2 = [12, 40, 6, 7, 13]

var buscarImpar = numbers2.find(function(numero){
    return numero % 2 != 0;
})

console.log("\nArray original -> "+ numbers2);
console.log("\nCASE 3: Debemos devolver el primer número impar que esté en el array.\n");
console.log({expected: 7, received: buscarImpar});

// --------------------------------------------------

// encuentra el usuario con email 'wendy@darling.com'

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]

var buscarEmail = users.find(function(users){
    return users.email === "wend@darling.com";
})

if(buscarEmail){
    var result = buscarEmail.email;
}

console.log("\nCASE 4: Debemos devolver el primer correo encontrado si existe en el array de objectos.\n");
console.log({expected: "wendy@darling.com", received: result});

// --------------------------------------------------

// encuentra el usuario con la ciudad 'Barcelona'

var users2 = [
    {
        name: 'pepito', information: {
            city: 'Madrid',
            number: '65787959'
        }
    },
    {
        name: 'wendy', information: {
            city: 'Barcelona',
            number: '7869406'
        }
    },
    {
        name: 'peter', information: {
            city: 'Sevilla',
            number: '78795040'
        }
    },
    {
        name: 'pinocho', information: {
            city: 'Valencia',
            number: '57694068'
        }
    }
]

var encuentraCiudad = users2.find(function(users){
    return users.information.city == "Barcelona";
})

if(encuentraCiudad){
    var result = encuentraCiudad.name;
}
console.log("\nCASE 5: Debemos devolver el primer usuario que vive en Barcelona.\n");
console.log({expected: "wendy", received: result});
