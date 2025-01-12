/* Basically Two type of Data
 Primitive, Non Primitive(Reference)
 Primitive  => Number, String, Null, Undefined, Boolean, Symbol, BigInt
 Non Premitive(Reference) => Array, Function, Object


 JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
 For example, in JavaScript, you can do the following:
 let x = 10; // x is now a number
 x = "Hello"; // x is now a string
  */
 //Symbol datatype is use for Unique ID,name,,,,,,,,example

 const ID = Symbol('123')
 const anotherIID = Symbol('123')
// they both are unique, if i chick both value, i will get differeence
console.log(ID==anotherIID) // result is differenet, bhalehi,  

//BigInt is a modified form of number, but it contain a large quantity of numbers
const bigNumber = 839979292837862873626n // is a example of bigInt




//NON PREMITIVE (Reference)
//Array => array are write in []
const heros = ['Piyush','Siyaram','InduBala'];

//Object => is written {}
{
    name : 'Piyush'
    age : 22
}
// Its on me, i can store object in variables, example
let myObject = {
    name :'Piyush',
    age : 22
}

// Function = there are many type to declare a function
// But i am learning how to treate a functin as a variable in javaScript
//definition of a function is ---------- function (){}
/* function (){}
now if a tore in a variable 
*/
const myFunction = function (){
    console.log("Hello World")

}
console.log(typeof outsideTemp)

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */