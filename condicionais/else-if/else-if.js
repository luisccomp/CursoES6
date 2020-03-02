/*

if (condição) {
    codigo...
}
else if (outra condição) {
    codigo...
}

*/

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach((item) => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2`);
    }
    else if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3`);
    }
    else if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5`);
    }
    else if (item % 7 === 0) {
        console.log(`O número ${item} é divisível por 7`);
    }
});
