
// usando el reduce, suma todos los numeros del array 

var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21]

var sumarNumeros = numbers.reduce(function(acumulator, num){
    return acumulator + num;
})

var result = sumarNumeros;

console.log("\nCASE 1: Debemos devolver la suma de todos los números del array.\n");
console.log({expected: "128", received: result});

//------------------------------------------------

// multiplica todos los numeros del array 

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21]

var multiplicaNum = numbers2.reduce(function(acumulator, currentValue){
    return acumulator * currentValue;
})

var result = multiplicaNum;

console.log("\nCASE 2: Debemos multiplicar todos los números del array.\n");
console.log({expected: "660441600", received: result});
//------------------------------------------------

//  suma todos los numeros del array, dando un valor inicial de 10

var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21]

var sumConValorInicial = numbers3.reduce(function(acumulator, currentValue){
    return acumulator + currentValue;
}, 10)

var result = sumConValorInicial;

console.log("\nCASE 3: Debemos sumar todos los números del array a partir de un valor inicial de 10.\n");
console.log({expected: "138", received: result});

//------------------------------------------------

// junta todos los strings del array, en uno solo (con el reduce)
// dando un valor inicial de 'Hola'

var strings = ['mundo', 'pepito', 'como', 'va todo']

var cadenaConValorIncial = strings.reduce(function(acumulator,currentValue){
    return acumulator += currentValue +" ";
}, "Hola ");

var result = cadenaConValorIncial;

console.log("\nCASE 4: Debemos sumar todos los números del array a partir de un valor inicial de 10.\n");
console.log({expected: "[Hola pepito como te va todo]", received: result});

//------------------------------------------------

// haz un array con todos los usuarios cuyo nombre empiezan con pe

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

//Pendiente
/* var arrayConFiltro = users.reduce(function(user,acumulator, currentValue){

    if(user.include( "pe")){
        acumulator += user.name;
    }
    return  acumulator;
})
console.log(arrayConFiltro);

var result = arrayConFiltro; */

console.log("\nCASE 5: Debemos juntar en un segundo array aquellos usuarios que empiezen por 'pe'.\n");
console.log({expected: "[Hola pepito como te va todo]", received: result});

//------------------------------------------------

// haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email

var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var listaNamesEmails = users2.map(function(user){
    return "name: "+ user.name +", email: " + user.email;
})
console.log(listaNamesEmails);

var result = listaNamesEmails;

console.log("\nCASE 6: Debemos juntar en un segundo array los usuarios solo con las propiedades name y email'.\n");
console.log({expected: "[{name: pepito, email: pepito@grillo.com}, ...]", received: result});



//------------------------------------------------

// en users3 esta el name como primer valor y surname como segundo del usuario,
// crea un objecto que contenga estas propiedades

var users3 = ['peter', 'pan']


console.log("\nCASE 7: Debemos juntar en un segundo array los usuarios solo con las propiedades name y email'.\n");
console.log({expected: "[{pepito},{peter}]", received: result});
//------------------------------------------------

// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

var users4 = [['pepito', 'grillo'], ['wendy', 'darling'], ['peter', 'pan']]