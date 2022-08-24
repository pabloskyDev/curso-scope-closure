// Una función que está dentro de otra es una función anidada.
function greeting() {
    let userName = 'Pablo';

    function displayUserName() {
        return `Hola ${userName}`;
    }

    return displayUserName();
}

const g = greeting();
console.log(g);