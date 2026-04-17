let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[4]);
//array with multiple data types
let mixedArray = [1, "Hello", true, {name: "Alice"},[1,2,3]];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

console.log(numbers.length);

//normal function with no parameters
function greet(){
    console.log("Hello, World!");
}
greet();

//normal function
function multiply(a,b){
    return a*b;
}
console.log(divide(10,2));
//normal function with expression
let add = function(a,b){
    return a+b ;
}
console.log(add(5,7));

//arrow function with no parameters
let sayHi = () => console.log("Hi!");
sayHi();
//arrow function with single parameters
let square = x => x*x;
console.log(square(4));
//arrow function with one parameters
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
}
greetUser("Alice");

//map on array
//map creates a new array by applying a function to each element of the array
let newarray = [1,2,3,4,5];
let squaredArray = newarray.
map((num) => num*num);
console.log(squaredArray);