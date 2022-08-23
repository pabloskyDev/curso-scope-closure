function fruits() {
    if(true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit2); // block scope
        console.log(fruit3); // block scope
    }
    console.log(fruit1); // function scope
}

fruits();