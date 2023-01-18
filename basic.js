
// 1. Create a variable called 'name' that holds a string
let $power = null;
let _power = null;

// Null and undefined are falsy means they nothing in them
// Undefine is not defined by computer
// Null is defined by developer

// Objexct is a collection of key value pairs

const power = {
    x: 0,
    y: 0,
}

console.log(power.x)
console.log(power['x'])

// delete 
delete power.x

// power = 5; // error

// As we mentioned above, everything that is not a primitive data type in JavaScript is an object. 
// This includes arrays, functions, and even regular expressions.

// Impure function
// when we change the value of the variable outside the function

// Pure function
// when we don't change the value of the variable outside the function

// 2 + 'xns' = '2xns'
// under the hood it will be like object + object = object

// 2 - 'xns' = NaN

let d = 10;
console.log(d++); // 10
// a++ return the value before increment
console.log(d); // 11

let q = 10;
// ++a return the value after increment
console.log(++q); // 11

console.log(q += 10); // 21  q = q + 10
console.log(q -= 10); // 11  q = q - 10
console.log(q *= 10); // 110  q = q * 10

// comparison operator
// true && true = true
// true && false = false
// false || true = true
// false || false = false


// Type coercion
//  when comparing different data types is to convert both values to the same primitive data type. This process is called type coercion.

//  typeof and instanceof
// typeof is used to check the type of the variable
// instanceof is used to check the type of the object

let aq = 'hello';
console.log(typeof aq); // string

let aqq = 10;
console.log(typeof aqq === typeof aq); // 


const obj1 = {
    x: 10,
    y: 20,
    ha: "hello",
};

const obj2 = {
    x: 10,
    y: 200,
};

console.log(obj1 === obj2); // false

console.log(
    'obj1 === obj2',
    JSON.stringify(obj1) === JSON.stringify(obj2) // true
)

console.log(
    'obj1 instanceof Object',
    obj1 instanceof Object // true
)


// Iterarte Object 
console.log(
    Object.keys(obj1), "Object.keys(obj1) \n",
    Object.values(obj1), "Object.values(obj1) \n"
)

Object.keys(obj1).forEach((key) => {
    console.log(key, obj1[key])
})

// Object.assign
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3)

// Object.entries
console.log(Object.entries(obj1))

// Object.fromEntries
console.log(Object.fromEntries(Object.entries(obj1)), "`Object.fromEntries(Object.entries(obj1))`")

// Object.freeze
// is used to freeze the object  (can't add or delete or change the property)

// Object.seal
// is used to seal the object  (can't add or delete the property)


// Object.isFrozen
// Object.isSealed

// Object.isExtensible  // check if the object is extensible


// class and constructor
// class is a blueprint for creating objects with pre-defined properties and methods.
// constructor is a special method for creating and initializing an object created within a class.

// static method is a method that can be called without instantiating its class and cannot be called through a class instance. 

// Class inheritance
// we used extends keyword to inherit the properties and methods from another class.

// super keyword is used to access and call functions on an object's parent.

class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    grow() {
        this.age += 1;
    }
}

class Dog extends Animal {
    constructor(age, name, breed) {
        super(age, name);  // is used to access and call functions on an object's parent. 
        this.breed = breed;
    }
    bark() {
        console.log('woof woof');
    }
    testthis() {
        console.log('test this');
        console.log(this); // Dog { age: 1, name: 'doggy', breed: 'labrador' }
    }

}

const dog = new Dog(1, 'doggy', 'labrador');
console.log(dog);
dog.grow();
console.log(dog);

dog.testthis();
const ani = new Animal(1, 'animal');

// scope and closure
// Global scope  (window)
// Module scope (the current file)  (module)
// Block scope   (with in the curly braces)
// Function scope (closures) (with in the function)

// the scopes are arranged in a hierarchy with global scope at the top and the current scope at the bottom.

// closure is a function that has access to the parent scope, even after the parent function has closed.

// this in javascript
// in class this is the instance of the class means the object
// in normal function this is the window object
// in arrow function this is the parent scope
// in event handler this is the element that received the event

// Spread Operator

// Spread operator is used to split up array elements OR object properties.

// Spread operator is used to merge two arrays OR two objects.  

// Spread operator is used to copy an array OR object.

const spred = [1, 2, 3, 4, 5];
const spred2 = [...spred, 6, 7, 8, 9, 10];
console.log(spred2);
console.log(...spred2);

// Typed Array
// TypedArray is a special type of array that allows us to store data in a binary format.
// 
let arr1 = new Int8Array(10); // 8 bit signed integer array with 10 elements
let arr2 = new Uint8Array(10); // 8 bit unsigned integer array with 10 elements 
let arr3 = new Int16Array(10); // 16 bit signed integer array with 10 elements
let arr4 = new Uint16Array(10); // 16 bit unsigned integer array with 10 elements
let arr5 = new Int32Array(10); // 32 bit signed integer array with 10 elements
let arr6 = new Uint32Array(10); // 32 bit unsigned integer array with 10 elements
let arr7 = new Float32Array(10); // 32 bit floating point array with 10 elements
let arr8 = new Float64Array(10); // 64 bit floating point array with 10 elements

console.log("Differmt Type of Array");
console.log(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8);