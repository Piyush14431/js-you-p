const myArr = [0,1,2,3,'Piyush','Array']
// Array Definition = collection of multiple items under a single variable name
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//ARRAY are RESIZABLE in JAVASCRIPT

/*Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

console.log(myArr[2])

//SHALLOW COPY //        //DEEP COPY//

/*SHALLOW COPY = A shallow copy of an object is a copy, if i change in array that will be change in orignal array too(Stake, Heap)
DEEP COPY = Properties do not share same referance*/ 

//Array Method

myArr.push(6)  //push() will push one array to pre decleared list 
console.log(myArr)// result is like = [0,1,2,3,'Piyush','Array',6] original referance is changed now
myArr.pop()// remove the last value in the list, So from the list 6 will removed

myArr.unshift(9) //
console.log(myArr)// [9,0,1,2,3,'Piyush','Array']
myArr.shift()
console.log(myArr)// [0,1,2,3,'Piyush','Array']

console.log(myArr.includes(9))//So includes() is like question Answer, (9) is pressent in array are not
// so the result is FALSE because in result 9 is not present

console.log(myArr.indexOf(9))// Result is -1 because 9 is not present in the Array List

//Convert to STRING

const newArr = myArr.join()// join( ) is a array to string converter
console.log(myArr)// check karne ke liye Array print kaise hoga
console.log(newArr)//This will convert to string , result look like 0,1,2,3,'Piyush','Array'




//SLICE AND    //SPLICE

/*The SLICE() method is used to extract a portion of an array without modifying the original
 array. It returns a new array containing the selected elements.

 The SPLICE() method is used to add, remove, or replace elements in an array. It modifies the
  original array.*/

  console.log("A",myArr)// original array

  const myn1 = myArr.slice(1,3)
  console.log(myn1)// use slice not manapulative  original array

  console.log("B",myArr)

  const myn2 = myArr.splice(1,3)
  console.log("C",myArr)// Splice manipulate original array

