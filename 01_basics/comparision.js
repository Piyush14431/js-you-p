console.log(2 > 1) // so answer in boolean
console.log(2==1)
console.log(2 != 1)
// all this comparision is ok but main problem start with when i compair , string with number

console.log("2" > 1) // result is 2, because node automaticaly detect string is number

// *typeScript* is also a language, and this type of error will not get in typescript,
// So if i train my self on NodeJS enough, i will avoide typescript

console.log(null==0)  //false, 
console.log(null > 0) // false, under comparesion processs, JavaScript convert null into 0,  0>0, is not true
console.log(null>=0)  // true, valuse conversion problem
// same confusion comes under "undefined" 
