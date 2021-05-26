let x: number = 5;
console.log(x);
let array = [1, 3, 5, 7, 9];
//for-of
for (let element of array) { //giong foreach ben java
    console.log(element);
}

//for-in
for (let index in array) {
    console.log(index);
}

//map - es6
array.map(element => console.log(element));

//named function
function sum(a: number, b: number): number {
    return a + b;
}

console.log('name function:' + sum(3, 4))
//arrow function
let sum1 = (a: number, b: number): number => a + b;
console.log('arrow function:' + sum1(3, 4));


