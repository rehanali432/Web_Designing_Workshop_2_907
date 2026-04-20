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

//filter on array
//filter creates a new array with all elements that pass the test
// implemented by the provided function
let evenNumbers = [1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.
filter (num => num%2 ===0);
console.log (filteredEvenNumbers); //[2,4]

//reduce on array
//accumulator is the accumulated value  previously returned
//if supplied and currentValue is the current element
let sum = [1,2,3,4,5];
let total =
sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); //15

//map reduce filter on object student marks
let students = [
    { name: "Alice", marks: 85},
    { name: "Bob", marks: 92},
    { name: "Charlie", marks: 78}
];

//map to get marks of all students
let marks = students.map (student => student.name);
console.log(names); //["alice","Bob","Charlie"]
//filter to get students with mark greater than 80
let topStudents = student.filter
(student => student.marks > 80);
console.log(topstudents); //[{name: "Alice", marks: 85}]
//reduce to get total marks of all students
let totalMarks = students.reduce
((acc, student) => acc + student.marks,0);
console.log(totalMarks); // 255