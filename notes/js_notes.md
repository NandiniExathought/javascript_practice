# What is JavaScript ?
Javascript is a lightweight , interpreted , object-oriented language with first-class functions ,  
 and is best known as the scripting language for Web pages , but it's used in many non-browser environments as well.

 # Buzzwords and meanings  
 1. lightweight - Small memory footprint , easy to implement   
 2. interpreted - No compilation. Instructions executed directly.  
 3. object-oriented - Modeled around objects.   
 4. first-class functions - Functions as values.  
 5. scripting - language - Instructions written for a runtime environment.

# Why learn JavaScript ? 

1. Client side web development  
    * Native Javascript 
    * jQuery 
    * AngularJS , React , Ember.  

2. Server side development 
    * NodeJS
    * Express

# History Of JavaScript ? 
* Created by Brendan Eich at Netscape
* Created to compliment java(in server side , js is in client side.)
* Designed to be easy.
* Standardized as ECMAScript. 

Development environment : **Chrome/firefox**

# Variable Declaration And Types : 

    
    var val = 20;
    Or
    var val;
    val = 10; 

# Primitive Types 
* Number
* String
* Boolean
* Undefined
* Null

1. **Number**   
    Number in js are "double precision 64-bit format IEEE 754 values"

2. **String**  
    Sequence of unicode characters(16-bit).

3. **Boolean**  
    true/false(used in conditional statements)

    > Note :   
    > * Loose typing is nothing but the variables which have no types  
    > * JavaScript is one such language which supports loose typing.

4. **undefined**  
      
        var val; //Declaration 
        val = 10; //Definition
        let a;
        console.log(a);//undefined

5. **Null**  
    Intentional absence of value.

# Types and Variables 

* No need to declare variable type. 
* The same variable can be assigned values of different types. 
* No scoping information in variable declarations. 
* Variables and Values can be "interrogated".

# typeof operator 
     
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

# Coercion  
      
      123+"4"; // 1234
      1+2+"3";//33
      "3"+4+6;//346

# === operator 
      
    let a = 10;
    let b = "10";

    if( a === b ) {
        console.log('values are equal');
    } else {
        console.log('values are not equal');
    }

> B.P : always use === operator in js to compare instead of ==.

> Falsy values in js : 
> * false
> * 0
> * ""
> * undefined 
> * null

# Object 

Object is nothing but a collection of key - value pairs.
    
    let obj = {
    name : 'nandu'
    }
    console.log(obj);
    obj.age = 23;
    obj.height = 5.4;
    console.log(obj);
    console.log(obj.name);

# Javascript Objects 

* Free from - not bound to a class.
* Object literal notation 

# Dot and bracket notation


         
     
    