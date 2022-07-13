//-----------------------------------------------------
//       Video 1 : Introduction 
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 2 : Unit Introduction 
//-----------------------------------------------------


//-----------------------------------------------------
//       Video 3 : What is Javascript 
//-----------------------------------------------------


//-----------------------------------------------------
//       Video 4 : JavaScript as a sripting language. 
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 5 : Why Learn JavaScript 
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 6 : Some thoughts on learning JavaScript
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 7 :  A Brief History of JavaScript
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 8 :  Setting up our development environment 
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 9 : Variable Declaration 
//-----------------------------------------------------

/*

var val = 20;
Or
var val;
val = 10; 

*/

//-----------------------------------------------------
//       Video 10 : Number primitive type 
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 11 : String and Boolean 
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 12 : Understanding undefined
//-----------------------------------------------------

/*

var val; //Declaration 
val = 10; //Definition
let a;
console.log(a);//undefined
 
*/

//-----------------------------------------------------
//       Video 13 : Understanding null
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 14 : Difference between undefined and null
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 15 : Types Summary
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 16 :  The typeof operator
//-----------------------------------------------------

/*

 var a  = 10; 
 console.log(typeof a); 
 a  = 'hello'; 
 console.log(typeof a);
a  = true;
console.log(typeof a);
a  = null;
console.log(typeof a);
var c;
console.log(typeof c);

typeof <value>
typeof <variable>

*/

//-----------------------------------------------------
//       Video 17 : Type Coercion and the === operator
//-----------------------------------------------------

/*

123+"4"; // 1234
1+2+"3";//33
"3"+4+6;//346

*/ 

/*

let a = 10;
let b = "10";

if( a === b ) {
    console.log('values are equal');
} else {
    console.log('values are not equal');
}

*/

//-----------------------------------------------------
//       Video 18 : Type Coercion Summary
//-----------------------------------------------------


//-----------------------------------------------------
//       Video 19 :Objects
//-----------------------------------------------------

/*

let obj = {
name : 'nandu'
}
console.log(obj);
obj.age = 23;
obj.height = 5.4;
console.log(obj);
console.log(obj.name);

*/

//-----------------------------------------------------
//       Video 20 :The Object Literal
//-----------------------------------------------------



//-----------------------------------------------------
//       Video 21 :Object Characteristics Summary
//-----------------------------------------------------



//-----------------------------------------------------
//       Video 22 :The dot and bracket notations
//-----------------------------------------------------

/*

let myObj = {
    name : "nandu" ,
    age : 23 ,
    height : 5.4
};

console.log("myObj.age = " +myObj.age);
console.log("myObj[age] = " +myObj["age"]);

*/


//-----------------------------------------------------
//       Video 23 :Difference between dot and bracket notations
//-----------------------------------------------------

/* 

Use [] notation when : 

Property name is reserved word / invalid identifier.
Property name starts with a number.
Property name is dynamic.

*/


/*

let myObj = {
    greet : 'namaste' , 
    1 : 'one'
};

console.log("myObj.greet = " +myObj.greet);
console.log("myObj[1] = " +myObj['1']);

*/


//-----------------------------------------------------
//       Video 24 : Nested Objects
//-----------------------------------------------------

/*

let myObj = {
    greet : 'namaste' , 
    1 : 'one',
    objProperty : {
        'innerProp' : 'Inner Property'
    }
};

console.log("myObj.greet = " +myObj.greet);
console.log(myObj.objProperty.innerProp);

*/

//-----------------------------------------------------
//       Video 25 : Revisiting === for objects
//-----------------------------------------------------

/*

var myObj = {
    'myProp' : 'Hello'
};

var myObj2;
myObj2 = myObj;

console.log(myObj2.myProp);

if(myObj === myObj2) {
    console.log('Variables are equal');
}

*/
//-----------------------------------------------------
//       Video 26 : Revisiting undefined vs null for objects
//-----------------------------------------------------

/*

let person = {
    firstname : 'Nandini' ,
    middlename : null ,  
    lastnme : 'Gnanesh'
};
console.log(person.age);
console.log(person.middlename);

*/

//-----------------------------------------------------
//       Video 27 :Deleting properties with the delete operator
//-----------------------------------------------------

/*

let person = {
    firstname : 'Nandini' ,
    middlename : null ,  
    lastnme : 'Gnanesh' , 
    age : 25
};

delete person.age;

console.log(person);
*/
//-----------------------------------------------------
//       Video 28 :Introducing Arrays
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 29 :The Secret behind JavaScript Arrays
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 30 : Wrapper Objects
//-----------------------------------------------------

/* Type wrapper objects 

String 
Boolean 
Number
Symbol

*/
//-----------------------------------------------------
//       Video 31 :Introduction To Functions
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 32 :Flexible argument counts
//-----------------------------------------------------

/*

function greet(name , timeOfDay) {
    console.log('Hello ' +name+ " The time of the day is : " +timeOfDay);
}
greet('Nandini');

function greet(name , timeOfDay) {
    console.log('Hello ' +name+ " The time of the day is : " +timeOfDay);
}
greet('Nandini' , 'Thursday' , 45);

*/


//-----------------------------------------------------
//       Video 33 :Return values
//-----------------------------------------------------

/*

function a() {
    return 'in a() function';
}
var result = a();
console.log(result);

*/

//-----------------------------------------------------
//       Video 34 :Function Expression 
//-----------------------------------------------------

/*

let a = function foo() {
    return 'in test() function';
}
var result = a();
console.log(result);

*/
//-----------------------------------------------------
//       Video 35 :Anonymous function expression
//-----------------------------------------------------

/*

let a = function () {
    return 'in test() function';
}
var result = a();
console.log(result);

*/
//-----------------------------------------------------
//       Video 36 :Functions as arguments
//-----------------------------------------------------

/*

var f = function(name) {
    console.log('Hello ' + name);
}

var executor = function(fn , name) {
    fn(name);
}
executor(f , 'Nandini');

*/

//-----------------------------------------------------
//       Video 37 :Functions as Objects
//-----------------------------------------------------

/*

var myObj = {
    "testProp" : true
};

myObj.myMethod = function() {
    console.log('Function in object');
};

myObj.myMethod();

*/

//-----------------------------------------------------
//       Video 38 :Understanding the this keyword
//-----------------------------------------------------

/*

var person = {
    'firstName' : ' Nandini',
    'lastname' : 'Gnanesh' , 
    getFullName : function() {
        return this.firstName + " " +this.lastname;
    } ,
};

console.log(person.getFullName());
var person2 = person;
person = {};
console.log(person2.getFullName());

*/
//-----------------------------------------------------
//       Video 39 :Code Exercise
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 40 :Exercise solution
//-----------------------------------------------------

/*

var person = {
    'firstName' : ' Nandini',
    'lastname' : 'Gnanesh' , 
    'getFullName()' : function() {
        return this.firstName + " " +this.lastname;
    } , 
    'address' : {
        street : '123 JS Street' , 
        city : 'JS' , 
        state : 'CA'
    } , 
    'isFromState' : function(state) {
        return (this.address.state === state);
    }
};

console.log(person.isFromState('CA'));

*/
//-----------------------------------------------------
//       Video 41 :Default function arguments 
//-----------------------------------------------------

/*

var add = function(a , b ) {
    console.log(arguments);
    return a+b;
};

console.log(add(10 , 30 , 2 , 4 , 5));

*/

/*
var add = function(a , b) {
    var i , sum = 0;
    for(i = 0; i < arguments.length; i++ ) {
        sum += arguments[i];
    }
    return sum;
};

console.log(add(10 , 20 , 30 , 5 , 10));
*/

// Note : The arguments value is not an array.

//-----------------------------------------------------
//       Video 42 :Unit Summary
//-----------------------------------------------------

/*

1. Function can be written in literal form
2. A function is a "value" that can be assigned to a variable.
3. can be called by passing in arguments
4. Functions are objects.

*/
//-----------------------------------------------------
//       Video 43 :Array Methods
//-----------------------------------------------------

/*

1.push(10);
2.pop();
3.shift();
4.unshift();

*/
//-----------------------------------------------------
//       Video 44 :Array for each method
//-----------------------------------------------------

/*

var myArray = [10 , 20 , 'hello' , {}];

var myFunction = function() {
    console.log('For an element');
};

myArray.forEach(myFunction);

*/

/*

var myArray = [10 , 20 , 'hello' , {}];

var myFunction = function(item) {
    console.log('For an element'+" item : " +item);
};

myArray.forEach(myFunction);

*/

//-----------------------------------------------------
//       Video 45 :Reading Assignments
//-----------------------------------------------------

/*
refer docs for Math and Date
*/

//-----------------------------------------------------
//       Video 46 : Next steps
//-----------------------------------------------------



