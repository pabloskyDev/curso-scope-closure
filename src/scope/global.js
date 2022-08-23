// Variables
var a; // Declarando
var b = 'b'; // Declaramos / Asignamos
b = 'bb'; // Re-asignamos
var a = 'aa'; // Re-declarar


// Global Scope
// Cualquier variable que haga parte del objeto windows, pasa a hacer global.
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// Cuando no declaramos una variable y solo la asignamos, por defecto pasa a ser global.
function countries() {
    country = 'Colombia';
    console.log(country);
}
countries();
console.log(country);