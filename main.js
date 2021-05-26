var x = 5;
console.log(x);
var array = [1, 3, 5, 7, 9];
//for-of
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) { //giong foreach ben java
    var element = array_1[_i];
    console.log(element);
}
//for-in
for (var index in array) {
    console.log(index);
}
//map - es6
array.map(function (element) { return console.log(element); });
//named function
function sum(a, b) {
    return a + b;
}
console.log('name function:' + sum(3, 4));
//arrow function
var sum1 = function (a, b) {
    return a + b;
};
console.log('arrow function:' + sum1(3, 4));
