
//-----------------------------------------------------
//       Video 1 : Introduction 
//-----------------------------------------------------


//-----------------------------------------------------
//       Video 2 : JavaScript Functions Primer 
//-----------------------------------------------------

/*

function foo() {
    console.log('function foo called');
}

var bar = function() {
            console.log('function bar called');
        }

foo();
bar();  

*/

//-----------------------------------------------------
//       Video 3 : Understanding Scopes and Block Scoping 
//-----------------------------------------------------


//-----------------------------------------------------
//       Video 4 :  Function Scoping in JavaScript 
//-----------------------------------------------------

/*
js won't create scopes for {}
*/
/* 

var name = 'Nandini';

if( name === 'Nandini') {
    var department = 'Engineering';
}

console.log(name);//Nandini
console.log(department);//Engineering

*/

//Anything which is defined inside a function , is available only in that function.

/*

var name = 'Nandini';

function allocateDepartment() {
    if(name === 'Nandini'){
        var department = 'Engineering';
    }
}

allocateDepartment();
console.log(department);//runtime error.

*/

//-----------------------------------------------------
//       Video 5 :  Scope Exercises 
//-----------------------------------------------------

/*
note : js is function scoped.
1. 
var top = 10;

function foo() {
    var inner = 20;
    console.log(inner);
}
output : nothing

*/


/*

2. 
var top = 10;

function foo() {
    var inner = 20;
    console.log(inner);
}

foo();

output : 20

*/

/*
3.
var top = 10;
var inner = 50;

function foo() {
    var inner = 20;
}

foo();
console.log(inner);//50

*/

/*
4.
var top = 10;
var inner = 50;

function foo() {
    var inner = 20;
    console.log(inner);//20
    console.log(this.inner);//50
}

foo();
console.log(inner);//50
*/

/*

5.
var name = 'rama';

function greet(name) {
    console.log('Hello ' +name);
}

greet('Sita');//Hello Sita

*/

//-----------------------------------------------------
//       Video 6 :  IIFE [Immediately Invoked Functional Expression]
//-----------------------------------------------------

/*
1. B.p is to avoid using global variable. And wrap them in a function.
/*

(function () {
    var a = 10;
    var b = 10;
    console.log(a+b);
})();

*/

//-----------------------------------------------------
//       Video 7 :  Read and Write Operations 
//-----------------------------------------------------

/*

var a = 10;//write operation

console.log(a);//read operation

function greet(name) {//write 
    console.log(name);//read
}

greet('Nandini');

*/

//-----------------------------------------------------
//       Video 8 :  Implications of Read and Write operations 
//-----------------------------------------------------

/*
1. Without declaring a variable , we can't do read operation , but we can do a write operation. 

for write operation : 
    foo = 10;
    console.log(foo);//success

for read operation : 
    console.log(foo);//failure
*/

//-----------------------------------------------------
//       Video 9 :  The window object 
//-----------------------------------------------------

//-----------------------------------------------------
//       Video 10 :  Compilation and Interpretation 
//-----------------------------------------------------

/*

1. The runtime executes the code directly -> interpreter 
2. Browser do a compilation , a fraction of seconds followed by executing at runtime.

*/


//-----------------------------------------------------
//       Video 11 :  Understanding the compilation phase 
//-----------------------------------------------------


//-----------------------------------------------------
//       Video 12 :  Understanding the interpretation step 
//-----------------------------------------------------


//-----------------------------------------------------
//       Video 13 :  The Global scope problem
//-----------------------------------------------------

/*
var a = 10;

function myFun() {

    var b = a;
    console.log(b);
    c = 100;//write operation creates undeclared variable in global scope. 
    console.log(c);//read operation

}

myFun();
*/

//-----------------------------------------------------------------
//       Video 14 :   Some Exercises and a surprising result 
//----------------------------------------------------------------

/*

var a = 10;

function outer() {

    var b = a;
    console.log(b);//10

    function inner() {
        var c = b;
        console.log(c);//undefined
        var b = 20;
    }
    inner();
}
outer();
*/

//-----------------------------------------------------
//       Video 15 : Hoisting
//-----------------------------------------------------


//-----------------------------------------------------
//       Video 16 : Using Strict mode
//-----------------------------------------------------

/*

function myCode() {

    'use strict';

    var myVar = "empty";

    myvar = 'nandu';    

}

myCode();

*/

// During write operation ex myvar = 'nandu' , a new variable created in global object.
//To avoid that we need to use strict. i.e : 'use strict'.

//-----------------------------------------------------
//       Video 17 : Introducing Closures
//-----------------------------------------------------

/*
A function which remembers it's scope - closure
*/

/*

var a = 10;

function outer() {

    var b = 20;

    var inner = function() {
        console.log(a);
        console.log(b);
    };
    return inner;

}

var innerFn = outer();
innerFn();

*/
//-----------------------------------------------------
//       Video 18 : Closures In Detail
//-----------------------------------------------------
/*

var a = 10;

function outer() {

    var b = 20;

    var inner = function() {
        a++;//11  //12
        b++;//21 //21
        console.log(a);
        console.log(b);
    };
    return inner;

}

var innerFn = outer();
innerFn();

var innerFn2 = outer();
innerFn();

*/
//-----------------------------------------------------
//       Video 19 :  Closures In Callbacks
//-----------------------------------------------------

/*

var a = 10;
//wait for 1 second

var fn = function() {
    console.log(a);
}

setTimeout(fn , 1000);
console.log('Done');

*/

//-----------------------------------------------------
//       Video 20 :The Module Pattern
//-----------------------------------------------------

/*

var person = {
    'firstName' : 'Nandini' , 
    'lastName' : 'Gnanesh' ,
    'getFirstName' : function() {
        return this.firstName;
    } ,
    'getLastName' : function() {
        return this.lastName;
    }
};
 I wish to provide data hiding for fname and lname property.
*/

/*

function createPerson() {
    var firstName = 'Nandini';
    var lastName = 'Gnanesh';

    var returnObj = {
    
        'getFirstName' : function() {
            return firstName;
        } ,
        'getLastName' : function() {
            return lastName;
        } , 
        'setFirstName' : function(name) {
            firstName = name;
        } , 
        'setLastName' : function(name) {
            lastName = name;
        }
    };
    return returnObj;
}

var person = createPerson();
console.log(person.firstName);
console.log(person.getFirstName());
person.setFirstName('nandu');
console.log(person.getFirstName()); 

*/

//-----------------------------------------------------
//       Video 21 : Closures In async Callbacks
//-----------------------------------------------------

/*

var i ;

var print  = function() {
    console.log(i);
};

for( i = 0 ; i < 10; i++ ) {
    setTimeout(print , 1000); 
}

*/

//-----------------------------------------------------
//       Video 22 : Solving async with closures
//-----------------------------------------------------

/*

var i ;

for( i = 0 ; i < 10; i++ ) {
    
    (function () {
        var currentValueOfI = i;

        setTimeout( function() {
            console.log(currentValueOfI);
        } , 1000);

        
    })();
    
}

*/

//-----------------------------------------------------
//       Video 23 : Conclusion
//-----------------------------------------------------














// Refer : You don't know JS by Kyle Simpson(youdontknowjs.com)