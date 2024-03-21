
var Carray = require("./Carray");

console.log("TEST Carray");
console.log("> constructor");

console.log("CASE construct an instance without elements");
var c = new Carray;
console.log(c);

console.log("CASE constructs an instance with number elements");
var c = new Carray(10,20,30);
console.log(c);

console.log("CASE constructs an instance with string elements");
var c = new Carray("Ana","Adrián","Javier","Bernat","Maite","Sara",);
console.log(c);

console.log("CASE iterates an instance with number elements");
var c = new Carray(10,20,30);
c.forEach(function(element){
    console.log(element);
})

console.log("CASE find person with age 20");
var people = new Carray(
    {name: "Peter", age: "30"},
    {name: "Wendy", age: "28"},
    {name: "James", age: "20"},
    {name: "Campanilla", age: "10"}
)

var person = people.find(function(person){
    return person.age === 20
})
console.log(person);
