// Hoisting: Las variables, funciones e imports son elevadas al inicio del codigo,
// es decir, se declaran antes de ser asignadas.
console.log(nameOfDog);
var nameOfDog = 'Emme';
console.log(nameOfDog);

namePerson();

function namePerson() {
    console.log(`El nombre de la persona es ${person}`);
}
var person = 'Pablo';
