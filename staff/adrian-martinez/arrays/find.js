
// usando el find, encuentra el primer numero mayor a 20

var numbers = [10, 20, 30, 40, 50, 60]

var buscarNumero = numbers.find(function(numero){
    return numero > 20;
})

console.log("Array original -> "+ numbers);
console.log("Result -> "+ buscarNumero);

// --------------------------------------------------

// encuentra el primer string que contenga una 'u'

var strings = ['hola', 'mundo', 'a', 'todos']

var buscarPalabra = strings.find(function(palabra){
    return palabra.includes("u");
})

console.log("\nArray original -> "+ strings);
console.log("Result -> "+ buscarPalabra);

// --------------------------------------------------

// encuentra el primer numero impar

var numbers2 = [12, 40, 6, 7, 13]

var buscarImpar = numbers2.find(function(numero){
    return numero % 2 != 0;
})

console.log("\nArray original -> "+ numbers2);
console.log("Result -> "+ buscarImpar);

// --------------------------------------------------

// encuentra el usuario con email 'wendy@darling.com'

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]

var buscarEmail = users.find(function(user){
    return user.email === "wendy@darling.com";
})

console.log("\nArray original -> "+ users);
console.log("Result -> "+ buscarEmail);

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