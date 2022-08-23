// Strict mode: EC 5+ Forma estricta de mejor control de la asignación de las variables.
// Lo que hace es obligar a que las variables aparte de asignadas estén declaradas. Así se genera mayor seguridad.
'use strict';
pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}
console.log(myFunction());