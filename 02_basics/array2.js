/* Devloper tool or inspect then 
cnst myArr = [1,2,3,4]
myArr,,,,,,  and Prototype, and you will find many array function, learn*/




///push()
const Bollywood = [Chainu,Bipasa, Priyanka, Kangna, Tammana]
const Tollywood = [AshSubhash, NaN,MIDIAccess,Object,P]

Bollywood.push(Tollywood)
console.log(Bollywood) 
// Result => [Chainu,Bipasa, Priyanka, Kangna, Tammana,[AshSubhash, NaN,MIDIAccess,Object,P]]
//push() will push array under array,here all Tollywood array have a sigle index number 

console.log(Bollywood[6][1])
//6th index number is all Tollywood array, then[1] means AshSubhash

//****So dont use push *****//



///Concat()

const films = Bollywood.concat(Tollywood)
console.log(films); // concat return new array
// Result=> [Chainu,Bipasa, Priyanka, Kangna, Tammana,AshSubhash, NaN,MIDIAccess,Object,P]



///spread operator 
/* The spread operator in JavaScript (denoted by ...) is used to spread the elements of an 
array (or properties of an object) into individual items. It is a concise and powerful way to
 manipulate arrays and objects.*/

 const filmworld = [...Bollywood, ...Tollywood]
 console.log(filmworld);
 //Result=>[Chainu,Bipasa, Priyanka, Kangna, Tammana,AshSubhash, NaN,MIDIAccess,Object,P]
 // result is same as concat


 // in spread i can add too many individual operator at once,, example

 const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1(...Array1,...Array2,... Array3,...Array4)
console.log(concatAll)


///FLAT ARRAY
//Flattening an array in JavaScript means converting a multidimensional array 
// (an array containing nested arrays) into a single-dimensional array.

//example
const mutiarray = [1,2,1,[4,3],6,4,[2,2,[5,9,8,[2,3],4]],5,6,3]
const multivers = mutiarray.flat(infinity)// infinity show how many levels i have to solve, insted array i can give number for levels
console.log(multivers);
//result=> [1,2,1,4,3,6,4,2,2,5,9,8,2,3,4,5,6,3]



///Convert To ARRAY
//Basically during Data Scraping i got data in another formatlike JSON, Object, String

console.log(Array.isArray("Piyush"))// Basically i am asking is 'Piyush'  a ARRAY ,Result=>False, No array

//Now i want to convert to array
console.log(Array.from("Piyush"))// Result => P,i,y,u,s,h, 
//Hera from() make array

console.log(Array.from({name:"Piyush"}))
//Result=> is [] empty, so if you put a {}object this will return empity

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3))
//Result =>[100, 200, 300]

