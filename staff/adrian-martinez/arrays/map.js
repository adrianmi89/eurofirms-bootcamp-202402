
//Creamos un array de números para hacer un segundo array con los valores multiplicados por 2
var numbers = [10, 20, 30, 40, 50, 60];

var numbers2 = numbers.map(function(x){
    return x * 2;
})

console.log(numbers);
console.log(numbers2 +"\n");

// Crea un array de cadenas con la losngitu de cada uno de los elementos

var strings = ["Hola", "mundo", "a", "todos"];

//Crea un array con el resto de 2 de cada uno de los números

var numbers2 = [12, 40, 6, 7, 24];

//Crea un array que contenga los emails de la usuarios como string

var users = [
    {name: "Pepito", email: "pepito@grillo.com"},
    {name: "Gepeto", email: "gepeto@grillo.com"},
    {name: "Pinocho", email: "pinocho@grillo.com"},
    {name: "Ada Madrina", email: "ada@grillo.com"}
]

var emails = users.map(function(user){
    return user.email;
})

console.log(users);
console.log(emails +"\n");

//Crea un array que tenga solo tenga la ciudades el array original

var users2 = [
    {name: "Pepito", information:{
        ciudad: "Madrid",
        telefono: "981443627"
    }},
    {name: "Gepeto", information:{
        ciudad: "Nápoles",
        telefono: "981443627"
    }},
    {name: "Pinocho", information:{
        ciudad: "Nápoles",
        telefono: "981443627"
    }},
    {name: "Ada Madrina", information:{
        ciudad: "Madrid",
        telefono: "981443627"
    }}
]

var ciudades = users2.map(function(user){
    return user.information.ciudad;
})

console.log(users2);
console.log(ciudades +"\n");