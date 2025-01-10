///---NUMBER CONVERSION---///
let score = 33
let scope = "33"
console.log(typeof score);
console.log(typeof (score));
console.log(typeof scope);
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






//****************OPERATIONS************************** */
let value = 3
let negValue = -value
console.log(negValue)  // result always in "negative" because of negValue

//console.log(2+2)
//console.log(2*2)
//console.log(2-2)
//console.log(2**2)// power of 2
//console.log (2/2)

let str1 = "Piyush"
let str2 = "Yadav"
let str3 = str1 + str2
console.log(str3)

//According to link in test.js file, here are some rules
// like, firstword or degit will deside what will be the result example
console.log(1 + "2") // in this case Number is on first place so result = 12
console.log(1+2+"2")// again first place will lead by Number so result is 32 (Two number is add to each other and one string is concatnate)
console.log("1"+1+2)// Now a change is String is on first place, so result is 112, no addition takes place in last two degits

// go to that link, that guidline and, go to convert two premitive, and read



//******PREFIX, POSTFIX********/
let gameCounter = 100
gameCounter++;

console.log(gameCounter); //so result is "101"

let gamesCounter = 100
++gamesCounter

console.log(gamesCounter)  // so result is "101" again
// so in this example there is no change in prefix, and postfic,  But difference exist, 
//so go with documentation
//prefix and Postfic js mdn
