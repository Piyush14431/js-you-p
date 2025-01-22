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
    // How to declear SYMBOL in object
   const mySym = Symbol("key1")
   const mySymbol = {
    [mySym]: "key1"
   }

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
       Symbol  =>  symbol    How to declear this SYMBOL in onject
       

       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */


//***********************MEMORY****************************//

//Steak && Heap memory
//stake (premitive),  Heap (non premitive)
//In Stake (premitive) memory reference is is like not permanent type, change after every variable
//In Heap(non premitive) memory is like permanaent, if one time enter, then after in multiple chane in variable, referance is same

//stake example
let myLaptop = "Dell"
let anotherLaptop = myLaptop

anotherLaptop = 'Lenovo'

console.log(myLaptop) // myLaptop me abhi bhi purani wali value hai,
console.log(anotherLaptop) //But anotherLaptop me value chane ho gyi hai, basicaly yha original value change nahi hui, copy me change hua

//Note == Heap me ye nahi hota, jo bhi last me value di gyi hai wahi value sare me reflect hone lgega
let userOne = {
    email : "piyushyadav14431@gmail.com",
    age :"30"
}

let userTwo = userOne
userTwo.email = "17a144311@gmail.com" //object ke ander is tarah se access karte hai, "user.email"

console.log(userOne.email)
console.log(userTwo.email) // inke result same hi honge
//Heap ke andar dono ko same hi response milega, basicaly Heap ke andar referance hi milega

//Basicaly Stake ke andar Copy milega
//And Heap Ke andar Reference milega, meaning, all change,Update original value ke andar hi karte hai