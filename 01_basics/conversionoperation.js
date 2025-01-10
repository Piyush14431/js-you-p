///---NUMBER CONVERSION---///
let score = 33
let scope = "33"
console.log(typeof score);
console.log(typeof (score));
console.let(typeof scope);
// line 4 run karne pe result "number" lower case me tha,
// line 5 rune karne pe result "String sho krega"

let valueInNumber = Number(score) // this line may insure result always in "Number"
console.log(typeof valueInNumber); // result "Number hi aayega"
// bhale hi socre = 33abc likha ho, result always Number sho hoga

//to ek baar mai print kra ke check karunga valueInNumber me hai kya
console.log(valueInNumber) // karnga valueInNumber ki value check karne ke liye,
// result aaeha NAN (Not a Nubmer), NAN is also a DataType
// id score = Null hai, to result hoga "0"
// basicaly score = Number (33)=>  convert into Number
//                          33abs=> NAN
//                          NULL => 0
//                          undefined => NAN
//                  boolean TRUE=>1, False=>0



///---BOOLEAN CONVERSION---///
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn)

//Result will,   when i do isLoggedIn = 1 =>  True,     isLoggedIn =0 => False
//                         isLoggedIn = ""=>  false,     isLoggedIn ="Piyush"=> True


///---STRING CONVERSION---///
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
// so the value is Number (33) but the output is String