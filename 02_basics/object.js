/*In JavaScript, an object is a collection of key-value pairs where keys (also called properties) 
  are strings or symbols, and values can be of any type (e.g., string, number, array, function,
   or even another object). */
   
// OBJECT can be decleared in two ways  1) LITERAL     2)Construct
///SINGLETON OBJECT => when ever i make an object by the help of constructor, only one unique object is made
// through literal singleton is not making  
 Object.create // singleton object

 //in object i can define key and value both, Like 'name:Piyush' , ab mai apne man se name ki jagah kuch aur bhi define kar sakta hi , and value ki jagah pe bhi
         
//LITERAL
const ello = {} // this is object

//this is not a singleton object
const Hello = {
    name: 'Piyush',
    "fullName": "Piyush YADAV",
    age: 30,
    [mySym]: "key1", // Symbole(DataType(premitive)) decleared, key must be in [ ]
    isemployed: True,
    email: "piyushyadav14431@gmail.com",
    greet: function() {
       return `My name is ${this.name}`
    }

}
console.log(Hello.name)  // 1 aur tarika hai print karne ka console.log(Hello[name])
console.log(Hello.greet())

console.log(Hello[name])// isko jaana ku jaruri hai, because name:"Piyush", me jo name hai as a strig backend me jaa rha hai
//"fullName":"Piyush Yadv", me "FullName" ko bina [] aap print kar hi nahi sakte
console.log(Hello["fullName"])
console.log(Hello[mySym])


/* Data Type (Premetive) SYMBOL ko agar declear karna hai to bhi, key ko [] me declear karenge
[mySys]: 'key1'*/


//How To change Values in Object
Hello.email = "17a114431@gmail.com"
// simpley by the help of '=' i can override the value


//***I can lock the value by the help of freeze ***/
object.freeze(Hello) // ye object pe hi lgega
//Now if change email this will not responde because this is locked now




//Function 

Hello.greeting = function (){
    console.log("Hello my name is Piyush Yadav")
}
console.log(Hello.greeting) //make sure Unlock Object(Hello)



Hello.greetingtwo = function (){
    console.log(`Hello my name is Piyush Yadav,${this.name}`)
}
console.log(Hello.greetingtwo)


