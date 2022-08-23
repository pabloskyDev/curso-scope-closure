// Solo se pueden acceder a las variables dentro de la function o en cualquiera de sus funciones anidadas
function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if( userName === 'Ana' ){
        console.log(`Hola ${userName}!`);
    }
}

greeting();
console.log(userName);

