//-----------------------------------------------------
//       Video 1 : Introduction 
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 2 : Objects Basics 
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 3 : Creating Objects 
//-----------------------------------------------------

/*

var emp1 = {};
emp1.firstname = 'Michael';
emp1.lastname = 'Scott';
emp1.gender = 'M';
emp1.designation = 'Regional Manager';

function createEmployee( firstname , lastname , gender , designation ) {

    var newObject = {};
    newObject.firstname = firstname;
    newObject.lastname = lastname;
    newObject.gender = gender;
    newObject.designation = designation;
    return newObject;
    
}

var emp3 = createEmployee('Jim' , 'Halpert' , 'M' , 'Sales Representative');
console.log(emp1);
console.log(emp3);

*/

// b.p is to use functions without duplicating the code.

//-----------------------------------------------------
//       Video 4 : JavaScript Constructors 
//-----------------------------------------------------

/*

var emp1 = {};
emp1.firstname = 'Michael';
emp1.lastname = 'Scott';
emp1.gender = 'M';
emp1.designation = 'Regional Manager';

function CreateEmployee( firstname , lastname , gender , designation ) {

    // var this = {}; done by compiler automatically
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.designation = designation;
    // return this; done by compiler
    
}

var emp3 = new createEmployee('Jim' , 'Halpert' , 'M' , 'Sales Representative');
console.log(emp1);
console.log(emp3);

*/
//-------------------------------------------------------------------------
//       Video 5 : Difference between regular functions and constructors 
//-------------------------------------------------------------------------

/*

var bicycle1 = createBicycle( 50 , 20 , 4 );//way to call function
var bicycle2 = createBicycle( 20 , 5 , 1 );

function createBicycle ( cadence , speed , gear ) {
    
    var newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;

}

function Bicycle( cadence , speed , gear ) {
    
    //var this = {};
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    //return this;

}

var bicycle3 = new Bicycle(50 , 20 , 4);//way to call constructor

Note : 
1. constructor Bicycle starts with capital(in a method name)
2. in a constructor , we use to call using new keyword followed by function name. 
3. no need to create or return obj in constructor , which was done automatically.

*/
//-----------------------------------------------------
//       Video 6 : Switching function types and calls 
//-----------------------------------------------------

/*
Calling a constructor function without the new keyword doesn't work!
No new object gets created , and the return value is undefined.

var bicycle1 = new createBicycle( 50 , 20 , 4 );
var bicycle2 = createBicycle( 20 , 5 , 1 );

function createBicycle ( cadence , speed , gear ) {
    
    //var this = {};
    var newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;
    //return this;

}

function Bicycle( cadence , speed , gear ) {
        
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;

}

var bicycle3 = Bicycle(50 , 20 , 4);

above code doesn't work out if we do vice-versa.

*/

//-----------------------------------------------------
//       Video 7 : Function Execution Types 
//-----------------------------------------------------

/*

There are 4 ways to call a function in javascript 
1. Using regular function.
2. Using a constructor.
3. Obj.function();
4. function.call(argument);

function foo() {
    console.log('Hello');
}

foo(); // Method #1

var obj = {};

obj.foo = function() {
    console.log('Hello');
};

obj.foo();//Method #2

new foo();//Method #3

foo.call();//Method 4.

*/

//-----------------------------------------------------
//       Video 8 : The this argument values 
//-----------------------------------------------------

/*

There are 2 default arguments to every function call : arguments and this.

Method 1 : Calling standalone functions directly.
this reference -> points to global object(i.e window).

ex.
function foo() {
    console.log('Hello');
    console.log(this);
}

foo();

Method 2 : Calling functions as property of an object reference
this.reference : The object reference.

ex.
var obj = {
    'prop' :'This is the object itself'
};

obj.foo = function() {
    console.log('Hello');
    console.log(this);
};

obj.foo();

Method 3 : Calling standalone functions using new keyword 
this reference : The newly created object.

function foo() {
    //var this = {};
    console.log('Hello');
    console.log('this');
    //return this;
}

new foo();//Method #3
*/

//-----------------------------------------------------
//       Video 9 : Working on objects with this reference 
//-----------------------------------------------------

/*

//function meant to be called in constructor mode
function Bicycle( cadence , speed , gear , tirePressure) {
        
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
    this.tirePressure += 3;

    }
    
}

//calling the function in constructor mode
var bicycle1 = new Bicycle( 50 , 20 , 4 , 25);
console.log(bicycle1);

var bicycle2 = new Bicycle( 50 , 20 , 4 , 30);
console.log(bicycle2);

bicycle1.inflateTires();
bicycle2.inflateTires();

*/
//-----------------------------------------------------
//       Video 10 : Using the call function 
//-----------------------------------------------------

/*

//function meant to be called in constructor mode
function Bicycle( cadence , speed , gear , tirePressure) {
        
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
    this.tirePressure += 3;
    
    }
    
}

//calling the function in constructor mode
var bicycle1 = new Bicycle( 50 , 20 , 4 , 25);
console.log(bicycle1);

var bicycle2 = new Bicycle( 50 , 20 , 4 , 30);
console.log(bicycle2);

bicycle1.inflateTires();
bicycle2.inflateTires();

function Mechanic(name) {
    this.name = name;
}

var mike = new Mechanic('Mike');
mike.inflateTires = bicycle1.inflateTires;
mike.inflateTires();
mike.inflateTires.call(bicycle1);//Method #4
console.log(bicycle1);//bicycle1 -> tirepressure will be incremented by 3.

//-----------------------------
Method - 4 :

function foo() {
    this.abc = def;//this bind to foo.call-> {} obj
}

foo.call({});

foo.call() === foo();//but foo.call() accepts arguments

*/
//-----------------------------------------------------
//       Video 11 : When constructors aren't good enough 
//-----------------------------------------------------

/*

1. Javascript objects don't own methods. They just have properties ,
    and any property could be a function.

2. There is a `class` keyword in the newer version of JavaScript(ES6) 
    that simulates class-like behaviour. But javascript does not have the 
    class concept.


function Bicycle( cadence , speed , gear , tirePressure) {
        
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
    this.tirePressure += 3;
    
    }
    
}

var bicycle1 = new Bicycle(50, 20, 4, 25);
var bicycle2 = new Bicycle(50, 20, 4, 30);
console.log(bicycle1);
console.log(bicycle2);


*/
//-----------------------------------------------------
//       Video 12 :  Introducing the prototype 
//-----------------------------------------------------

/*
To access prototype object

function foo() {}

foo.prototype


For every object prototype will be there , whether an obj is empty or not. 
If we call using new keyword then __proto__ will be created.
*/
/*
__proto__ obj will be created when we say new foo();

steps (happens when new foo() called)
1. new object created with __proto__ , that points to prototype obj.
2. __proto__ will come into existence only if we use new keyword.


Function 
    prototype  ------------Prototype object
                            1       1
                            1       1
Object                      1       1               Object
    __proto__  -------------1       1------------- __proto__

*/

//-----------------------------------------------------
//       Video 13 :  Property lookup with prototypes
//-----------------------------------------------------

/*
try these things in development tools

function foo() {}
undefined

foo.prototype
{constructor: ƒ}constructor: ƒ foo()[[Prototype]]: Object

var newObj = new foo();
undefined

newObj
foo {}[[Prototype]]: Objectconstructor: ƒ foo()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: Objectconstructor: ƒ foo()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()get __proto__: ƒ __proto__()length: 0name: "get __proto__"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]set __proto__: ƒ __proto__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

foo.prototype.test = 'This is the prototype object of foo';
'This is the prototype object of foo'

foo.prototype.test
'This is the prototype object of foo'

newObj.__proto__.test
'This is the prototype object of foo'

foo.prototype === newObj.__proto__
true

------------------------------------------------------

newObj.__proto__
{test: 'This is the prototype object of foo', constructor: ƒ}

newObj.hello//this property is not there..i.e why its undefined.
undefined

newObj.__proto__.hello = 'This value is from the prototype og hello';
'This value is from the prototype og hello'

newObj.__proto__.hello;
'This value is from the prototype og hello'

newObj.hello
'This value is from the prototype og hello'

Steps :

In the above ex , first it will check for hello in newObj , if it's not find there
, then it will search in __proto__ , if it finds it will give to us.


newObj.hello = 10;
10
newObj.hello
10
newObj.__proto__.hello = 'This value is from the prototype og hello';

Note : first it will search for hello in newObj , only if it's not there , then only
it will look into the __proto__

delete newObj.hello;
true

newObj.hello
'This value is from the prototype og hello'

*/

//-----------------------------------------------------
//       Video 14 : Object behaviors using prototypes
//-----------------------------------------------------

//Note : new obj created for emp like newEmp ,
//  newEmp all of them share a common prototype. 
// Prototype is like a template.

/*
function Employee(name){this.name = name;}
undefined

var emp1 = new Employee('Jim');
undefined

emp1
Employee {name: 'Jim'}name: "Jim"[[Prototype]]: Object

var emp2 = new Employee('pam');
undefined

emp2
Employee {name: 'pam'}

If we wish to have a common functionality for these 2 employees , we can go
for using prototype instead of defining function inside a function constructor bcz 
we want a single copy but not multiple copies.

Employee.prototype.playPranks = function() {console.log("Prank played");};
ƒ () {console.log("Prank played");}

Employee.prototype.playPranks();
VM2385:1 Prank played
undefined

emp1.__proto__.playPranks();
VM2385:1 Prank played
undefined

emp2.playPranks();
VM2385:1 Prank played

var emp3 = new Employee('sam');
undefined

emp3.playPranks();
VM2385:1 Prank played

emp2.playPranks();
VM2385:1 Prank played
undefined

Employee.prototype.greet = function() { console.log('welcome'); };
ƒ () { console.log('welcome'); }

emp2.greet();
VM3027:1 welcome

Advantage is we can add methods at runtime in javascript.
*/

//-----------------------------------------------------
//       Video 15 : Object Links With Prototypes
//-----------------------------------------------------

/*
The double-underscores are referred to as "dunder" as in "Dunder Mifflin".
So this property is called "dunder-proto".(__proto__)

In function we have property __proto__ to point to a prototype object.
Similarly we have constructors in prototype that points back to function.

function foo(){}
undefined

foo();
undefined

var a = new foo();
undefined

a
foo {}[[Prototype]]: Objectconstructor: ƒ foo()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: Objectget __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
foo.prototype
{constructor: ƒ}

var proto = foo.prototype
undefined

proto.constructor
ƒ foo(){}

a.__proto__.constructor
ƒ foo(){}//to know which constructor created.

b.p : is to use prototype instead of dunder proto.

*/



//-----------------------------------------------------
//       Video 16 : The Object Function
//-----------------------------------------------------

// Function                                 Prototype 
//     prototype  -------------------------------constructor
//                                                  1
//                                                  1
//     __proto__ ---------------------------------- 1

/*
Ways to create an empty object.
1. var simple = {};
2. var obj = new Object();

var simple = {};
undefined
simple
{}
var obj = new Object();
undefined
obj
{}

*/

/*
Object.prototype
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

obj.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

simple.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

obj.__proto__ === simple.__proto__
true

Object.prototype === simple.__proto__
true

*/

//-----------------------------------------------------
//       Video 17 : The Prototype Object 
//-----------------------------------------------------

// The automatically created prototype object is actually created using 
// 'new Object'.
                                                    //  Object prototype
/*                                                  1
                                                    1
Employee function---------Employees prototype -------
        prototype                  __proto__
                                    1
emp                                 1
    __proto__ ----------------------1


function Employee() {}
undefined

var emp = new Employee();
undefined

emp.test;
undefined

emp.prop = 'Employee';
'Employee'
emp.prop 
'Employee'

emp.__proto__.parentProp = 'Parent of the Employee';
'Parent of the Employree'

emp.parentProp
'Parent of the Employree'

Object.__proto__.lastProp = 'last property';
'last property'
emp.lastProp;
undefined
emp.__proto__.__proto__.lastProp = 'last property';
'last property'

emp.lastProp;
'last property'

Object.prototype.grandParentProp = 'Grand Parent';
'Grand Parent'
emp.__proto__.__proto__ === Object.prototype
true

Object.prototype.grandParentProp = 'grand parent';
'grand parent'

emp.grandParentProp;
'grand parent';

*/

//-----------------------------------------------------
//       Video 18 : Inheritance In JavaScript
//-----------------------------------------------------

/*
function Employee(name) {this.name = name;}
undefined

Employee.prototype.getName = function() { return this.name;}
ƒ () { return this.name;}

var emp1 = new Employee('Jim');
undefined

emp1.getName();
'Jim'

function Manager( name , dept ) { this.name = name; this.dept = dept;}
undefined

Manager.prototype.getDept = function() {return this.dept;}
ƒ () {return this.dept;}

var mgr = new Manager('Michael' , 'Sales');
undefined

mgr.getDept();
'Sales'

mgr.getName();
VM5782:1 Uncaught TypeError: mgr.getName is not a function
at <anonymous>:1:5

Now if I wish to access emp property , no need to point mgr.__proto__ 
to object prototype , point it to emp.__proto__.

mgr.__proto__.__proto__ === Object.prototype
true

mgr.__proto__.__proto__ = Employee.prototype;
{getName: ƒ, constructor: ƒ}

mgr.getName();
'Michael'

*/

// Employee.prototype.getSalary = function() { return 100;}
// ƒ () { return 100;}
// emp1.getSalary();
// 100
// mgr.getSalary();
// 100

//-----------------------------------------------------
//       Video 19 : Conclusion
//-----------------------------------------------------


