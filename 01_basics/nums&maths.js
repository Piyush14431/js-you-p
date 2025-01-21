const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

// agar Developer Tool me ja ke console me ja ke, yahi 4th line daal ke, Number{100} daal ke check kiya
// to jaise function String me aa rhe the waise hi Number me bhi function aane lgenge, example
console.log(balance.toString())// result me 100 to aaega but ye String hoga, Number nahi
// aa jab ye string ban hi gya hai to, string ki properties bhi use karunga
console.log(balance.toString().length )// iski vaiue 3 aaegi, kuki 100 me three values hai
console.log(balance.toFixed())// Point ke baad ke values ke liye

const fixNumber = 123.333
console.log(fixNumber.toPrecision(3))// This Precision method show 123 only,  toPrecision will give result before decimal
//if i change the value of fixNuber = 1123.333, and toPrecision is(3) only then this will show you a error in result 


const hundred = 1000000000
console.log(hundred.toLocaleString(en-IN))//Result is like 10,00,00,00,00
// en-IN <= this will show result in Indian Style

// When you go on Console , you will get varius functions, method
//ex =>   number.MAX_VALUE
//        number.MIN_VALUE




//************************** MATHS *************************************//

//Go to console under Inspect>Developer Tool>
console.log(Math) // And You will get a lot of function
console.log(Math.abs(-4))// abs() provide a absolute value like -4 convert into 4, But 4 convert into 4
console.log(Math.around(3.4)) // converts to 3, give a round of number
console.log(Math.around(3.6)) // convert to 4
console.log(Math.ceil(4.2))// ceil means Cealing , result is 5, meaning 4 ke upar jitna bhi ho 5 me convert hoga
console.log(Math.floor(4.8))// result is 4

Math.random //give random value and alwayes give value between 0 to 1
console.log(Math.random())
console.log(Math.random() * 10)// ab 0 to 1 ke beech me value nahi aaegi, value 10 se multiply ho ke aaegi
// but abhi value 0 aa sakta hai to isko avoid karne ke liye +1
console.log(Math.random() * 10 + 1)
console.log(Math.floor(Math.random() * 10) + 1) // floor basically value ko round kar dega
// line 45 ka result 7 ya 8 ya 9 , round off me aaega

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min)
// remember this formula
