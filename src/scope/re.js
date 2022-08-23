// Re-declaración, re-asignación.
var firstName;
firstName = 'Pablo';
console.log(firstName);

var lastName = 'David'; // declarar / asignar
lastName = 'Ana'; // rasignar
console.log(lastName);

// Con Let se puede reasignar pero no re-declarar
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar

console.log(fruit);
// let fruit = 'Pear';

// Con Const no se puede re-asignar ni re-declarar
const animal = 'Dog'; // Declarar y asignar
// animal = 'Cat'; // Re-asignar
// const animal = 'Lion'; // Re-declarar
console.log(animal);

const vehicles = [];
vehicles.push('Car');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);