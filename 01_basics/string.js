let name = 'Piyush'
let nameCount = '50'

console.log(name + nameCount + 'Values')
// So the result is Pitysh50 Values,,,, But this The outdated thing

//New is String Interpolation
console.log('Hey My name Is ${name} and my name count is ${naemCount}') 
//yha pe mai method bhi lga sakta hu, jaise {name.TO}

//So there rate Two way To declare object
//1) let name = 'Piyush'
//2) By the help of **Constructor**
const gameName = new String ("Piyush") // ()this braces denote constructor

// Now go to web page console,   => By the help of developer tool
// and run thsi const gameName = new String ("Piyush")
// and type only "gameName"
//you will get thsi "String {'Piyush'}
/*0
: 
"P"
1
: 
"i"
2
: 
"y"
3
: 
"u"
4
: 
"s"
5
: 
"h"
length
: 
6
[[Prototype]]
: 
String
anchor
: 
ƒ anchor()"*/

//and you will so many prototypes, go through one time, its helpfull in development

// String for Trim

const newStringOne = "  Piyush  "
console.log(newStringOne)  // So the Result is "  Piyush  "
console.log(newStringOne.trim()); // Result is Piyush, means no Space

// Go mdn Documentation for more trim , you will found 'startTrim', 'endTrim'

const url = "https://piyushyadav%20piyushEbook"

console.log(url.replace('%20','-')) 
//So the result is https://piyushyadav-piyushEbook
console.log(url.includes(piyush))// so the result is TRUE because piyush word is present