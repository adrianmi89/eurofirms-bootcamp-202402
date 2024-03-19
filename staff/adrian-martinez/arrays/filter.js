
// usando el filter, crea un nuevo array, 
// que contenga los numeros impares

var numbers2 = [0, 12, 5, 40, 6, 7, 24, 13, 21]

var arrayImpar = numbers2.filter(function(num){
    return num % 2 != 0;
})

var result = arrayImpar;

console.log("\nCASE 1: Debemos devolver una copia del array pero que solo contenga los números impares.\n");
console.log({expected: "[5, 7, 13, 21]", received: result});

// --------------------------------------------------

// crea un nuevo array con los elementos que tienen 2 palabras

var strings = ['hola mundo', 'pepito', 'hello world to the people', 'todos']

var arrayDosPalabras = strings.filter(function(elemento){

    return elemento.split(" ").length == 2;
})

var result = arrayDosPalabras;

console.log("\nCASE 2: Debemos devolver una copia del array pero con los índices que tengan 2 palabras.\n");
console.log({expected: "[hola mundo]", received: result});

// --------------------------------------------------

// crea un nuevo array que contenga los numeros con dos digitos

var numbers = [100, -20, 3, -200, 50, 8, -5]

var dosDigitos = numbers.filter(function(num){
    return num < 100 && num > 9 || num < -9 && num > -100;
})

var result = dosDigitos;

console.log("\nCASE 3: Debemos devolver una copia del array pero con los números de 2 dígitos.\n");
console.log({expected: "[-20 , 50]", received: result});
// --------------------------------------------------

// crea un nuevo array, con los usuarios cuyo nombre empiece con p

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'topa', email: 'to@pa.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]

var primeraLetraNombre = users.filter(function(user){
    return user.name[0] == "p";
})

var result = primeraLetraNombre;

console.log("\nCASE 4: Debemos devolver una copia del array con los usuarios con el nombre que empieze por p.\n");
console.log({expected: "[pepito, peter, pinocho]", received: result});
// --------------------------------------------------

// crea un nuevo array, que contenga los usuarios que vivan en Barcelona

var users2 = [
    {
        name: 'pepito', 
        information: {
            address: {
                city: 'Madrid',
                street: 'Gran via'
            },
            number: '65787959'
        }
    },
    {
        name: 'wendy', 
        information: {
            address: {
                city: 'Barcelona',
                street: 'Diagonal'
            },
            number: '66575846'
        }
    },
    {
        name: 'peter',
        information: {
            address: {
                city: 'Sevilla',
                street: 'bakeer street'
            },
            number: '78795040'
        }
    },
    {
        name: 'topa', 
        information: {
            address: {
                city: 'Barcelona',
                street: 'Reina Amalia'
            },
            number: '565768564'
        }
    },
    {
        name: 'pinocho', information: {
            address: {
                city: 'Valencia',
                street: 'siempre viva'
            },
            number: '57694068'
        }
    }
]

var usuariosDeBarcelona = users2.filter(function(user){
    return user.information.address.city == "Barcelona";
})

var result = usuariosDeBarcelona;

console.log("\nCASE 5: Debemos devolver una copia del array con los usuarios que vivan en barcelona.\n");
console.log({expected: "[{wendy}{topa}]", received: result});