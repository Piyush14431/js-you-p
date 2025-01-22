//Object1 was on literals

//This Object2 is about constructor, singlton

const tinder = new object ()
console.log(tinder)//result is {}
// there is no deferance b/w Singalton Object and literal for example

//literal 
const tinderU = {}
//console.log(tinderU)//samer result result is {}

//now i am not going to use const, because its already decleared with tinder
tinderU.id = "123ab"
tinderU.name = "Piyush"
tinderU.email = "piyushyadav14431@gmail.com"
tinderU.isLoggedIn = false

console.log(tinderU)

// Suppose i need all keys & values from tinderU
console.log(object.keys(tinderU)); //Result ['id','name','email','isLoggedIn']
console.log(object.values(tinderU));//Result is ["123ab","Piyush","piyushyadav14431@gmail.com",false]

console.log(object.entries(tinderU))
//Result is ['id','123ab'], ['name','Piyush'], ['email','piyushyadav14431@gmail.com'],[isLoggedIn,false]

//If some thing is not present in data, and you already mention it So most probebly it will crash
console.log(tinderU.hasOwnProperty('email'))//Result is True because emails is in the data what i decleared above
//hasOwnProperty syntex will use for this type of work
//for more syntex go to developer tool in property section and find more



//Like Nested ARRAYS, NoW we have nested Object
const nestedObject = {
    id: 1,
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "New York",
      country: {
        name: "USA",
        code: "US"
      }
    },
    hobbies: ["reading", "traveling", "coding"]
  };

  console.log(nestedObject)
  console.log(nestedObject.name)
  console.log(nestedObject.address.country.name)
  console.log(nestedObject.hobbies[1])


  //Optional Chaning
  //suppose address is not exist in data but i am printing adress, then what i do

  console.log(nestedObject.address?.country.code)
  //so use ? for that, If in API response, this address resposce is available then prin, other wise let it go
  //If i am not using `?`
  // then i have to use if else statements, jo ki lamba ho jaega



  //Like i combined Arrays, Now i will combined Objects 
  const obj1 = {1:"a",2:"b"}
  const obj2 = {3:"a",4:"b"}

  const obj3 = {...obj1, ...obj2}
  console.log(obj3)


  //Syntex i use when data come form DtaBase
  // suppose i will get many object in Array, and ihave to print or loop throung
   const user =[
    {
        id:1,
        email:"piyushyadav14431@gmail.com"
    },
    {
        id:1,
        email:"piyushyadav14431@gmail.com"
    },
    {
        id:1,
        email:"piyushyadav14431@gmail.com"
    },
    {
        id:1,
        email:"piyushyadav14431@gmail.com"
    }
   ]

   user[1].email// [1] data array me tha to [1] index le liya jo hamesa object me hoga, and then point lga ke jo bhi chahiye wo lga diya