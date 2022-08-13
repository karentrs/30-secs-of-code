//Comment
//means you want to LOG 'Hello World' in the console. All statements end with a ';'.

//This is my first JavaScript code.
console.log('Hello World');

//HTML includes the content while JavaScript implements how the content behaves.
//we can either open command prompt, write cd space, then the file path, or you can open the terminal and follow
//the same steps. 

//to declare a variable use 'let'/cannot be a reserved keyword/should be meaningful
let name ='Mosh';
console.log(name);

const interestRate = 0.3;
// will get an error bc using const does not let you change the value of the variable
interestRate = 1;
console.log(interestRate);

//primitives = string, numbers, booleans, undefined, and null
let name = 'Mosh'; // String Literal
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = undefined; //value is undefined;
let lastName = null; //use null when we want the value of the variable to be clear

//javascript is a dynamic language. The value of a variable can change.

//reference types: objects, arrays, and functions
let person = {
    name: 'Mosh',
    age: 30
};

//dot notation(default choice)
person.name = 'John';

//bracket notation
let selection = 'name';
person['name'] = 'Mary'
//alows us to get the property in a more dynamic way
person[selection] = 'Mary';

//more efficient
console.log(person.name);


//arrays
//[] : array literal
//arrays are dynamic
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors[0]);

//in the conosle, remmeber we can type typeof selectedColors and receive back what it is ex."object"

console.log(selectedColors.length);
