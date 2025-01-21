//Date is a OBJECT
// Date in JS is calculated a fter 01/01/1970
// Dates are calculate in mili second
// Temporal is a API for Date, like MATH is a API,  (means i can use Temporal with many fuctions)
// But for Now i will do code not on Temporal, But on Date

let myDate = new Date ()
console.log(myDate) // this will show date, but not easly readble
console.log(myDate.toString())// when i convert to string, date is readble
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())// ye dono methods, toDateString, toLocalString Kuch n kuch change krenge Date Formate me
console.log(typeof myDate) // this will show Date is an Object

//MONTHS start with 0 inJS

let myCreatedDate = new Date (2025, 0, 23)
console.log(myCreatedDate.toDateString())// this function will show date in particular formate

let CreaterdDate = new Date(2025, 0, 23, 5, 4) 
console.log(CreaterdDate.toLocaleString()) //so this will show date and Time both in a particular formate

// YYYYDDMM ke formate me month 1 se start hoga
let CreateDate = new Date ("2025-01-24")
console.log(CreateDate.toLocaleString())

//MMDDYY ke formate jo india me use hoga
let createDate = new Date ("01-01-2025")
closensole.log(createDate.toLocaleString())

//Time Stamp in Date

let myTimeStamp = Date.now()// iski values milisecond me aaega

console.log(myTimeStamp)// timestamp mili second me aaega jo ki lamba data hai,
                       //  to koi date wali value de dunga jo maine pahle define kar rakhi hai
console.log(createDate.getTime()) // ab yha date object hai isi lye yha ,,.getTime() nikala hai

// seconds me bhi convert kar sakte hai
// Data Comparision hamesa mili second me hona chahiye

console.log(Date.now())//Date.now() exact abhi ki value dega // ye abhi bhi milisecond me hai, second me convert karna hai
console.log(Date.now()/1000)
// One problem with divided with 1000, decimal value will come

//solution is 
console.log(Math.floor(Date.now()/1000))// Math.floor will a prevention of decimal

//Another Methods come with Date
//if i want to get only year, or only day, or only month

const newDate = new Date();

console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getYear())
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1)

// user se date lani hai to 
`${newDate.getMonth()} on this date your school will open`

newDate.toLocaleString()
//toLocalString <= this is a interesting string because i define a OBJECT in this,
//  now if i use '' in ()
//so i take defaut internatlization, and then 
// object { press ctrl+space, and you will get so many properties}
newDate.toLocaleString('default',{
    weekday: "long",


});