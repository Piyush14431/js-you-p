//in js study function with js memory management
// function ==> written code pack in a package and i can do copy, and trancpoart any where

function sayMyNm (){
    console.log("M");
    console.log("N");
    console.log("O");
    console.log("P");
    console.log("Q");
    console.log("R");
}

sayMyNm()// calling from here
//-------------------------------------------------------------------------

function addTwoNumbers(Number1, Number2){
    //Number1, Number2 is called parameters
    console.log(Number1+Number2)
}
addTwoNumbers(3,4)// calling Result 7  // 3,4 ko arguments bolenge
addTwoNumbers(3,"4")// Result 34
addTwoNumbers(3,"a")// 3a  function me koi checking nahi dala tha abhi tak jo check kre ki dono parameters(number1, number2) ka datatype numbers hi hai
addTwoNumbers(3,null)// 3
//--------------------------------------------------------------------------

function addTwoNumber(Num1, Num2){
    let result = Num1 + Num2
    return result // Jab bhi mai return karunga, to kisi variable me store kar sakta hu,
    // ex= const result = addTwoNumber(3,4)

    //OR
    return Num1 + Num2
}

const result = addTwoNumber(3,4) //calling the function
console.log("Result:", result)

//-----------------------------------------------------------------------------
// 1
function loginUserMessaage(username){
      return`$(username) just logged in`
}
console.log(loginUserMessaage("Piyush")) // Result = Piyush just logged in




//2     if when i not passed any value  --Result is "UNDEFINED"
function loginUserMessaage(username){
    return`$(username) just logged in`
}
console.log(loginUserMessaage()) // Result = undefined



//3
//Now Undefine Check karne ke liye pahle se hi IF Else statement ka use kar lenge
function loginUserMessaage(username){
    if(username === undefined){
          console.log("Please enter a user Name")
          return // return dalne ke baad line 63 ki koi value nahi rah gyi
          // Because after return no line will print 
    }
    return`$(username) just logged in`
}
console.log(loginUserMessaage()) // Result = Please enter a user name
                                // undefined

//------------------------------------------------------------------------------------------
/* NOTE -- JS (username===undefined) ko 'TRUE' samjhega, tabhi to line no 60 pe jaega
  BUT JS me kuch false bhi honge , ex= undefined ek false hai, tabhi to undefined nahi chahiye
  
  symbol `!` is a converter jo TRUE ko FALSE me aur FALSE ko TRUE me convert kar deta hai

  So why i need This symbol `!`, if statement me agar line 59 hi false hi to line 60 pe ja hi nahi paenge
  to line number 59 me False ke sath ! ka use kar ke True bna dunga,*/
//---------------------------------------------------------------------------------------------------------
  function loginUserMessaage(username){
    if(!username){  // (!username) ab ye bhi line 59 ke equivelent ho gya
        console.log("Please enter your user name")
        return
    }
     return `$(username) just logged in`
  }
  console.log(loginUserMessaage())

//------------------------------------------------------------------------------------------------
// if i want to avoid ifstatement 
//to pahle hi username ko defined kar do

function loginUserMessaage(username = "use"){
     return `$(username) just logged in`
  }
  console.log(loginUserMessaage()) // yha (loginUserMessage(empty hai fir bhi)) undefined nahi hoga
  // ku ki pahle hi username defined kar rakha hai














  //------------------------------------------------------------------------------------------------------------------------------
  /*VIDEO 2 ON FUNCTION*/


  // Situation = Sopping Cart , Jisme ye nahi pta ki User Kitne Shop karega, Bas mere paas 
  //  Sopping item add hote hi jate hai, to mere ko item add karte hi jana hoga
  // jaise ki upar ke example me pta tha ki bas do hi arguments haii, 3&4, but yha ka pta nahi hai 


  //____________REST OPERATOR________________//

  // (...num1) REST OPERATOR , &  SPREAD OPERATOR both are same, only difference by use case
  // (...num1) use to calculate to many arguments
  function calculateCartPrice(...num1){  // abhi yha ka parameter nahi pta
    return num1

  }
   console.log(calculateCartPrice(200,300,500, 800)) // abhi jo argument diya 200,300, 500......ye abhi add hote hi jaa rha, depend on user wo kitna samman karidega
   // to isi liye mai (...num1) REST OPerator ka use kiya
   //Result= i got a ARRAY [200,300,500,800] so by theuse of REST OPERATOR, I will bundle arguments
   //------------------------------------------------------------------------------------------------------------------

   function calculateCartPrice(val1,val2,...num1){  
    return num1

  }
   console.log(calculateCartPrice(200,300,500, 800)) 
   //Result = [500,800]

   //-------------------------------------------------------------------------------------------------


   //OBJECTS//
 ===========================
   const user = {
    name: "Piyush",
    email: "piyushyadav@14431",
    EmpId: "10336947"

   }
   function handle0bject(user){
        return
   }
   //_-----------------------------------------------------------------------------------------------
   const user1 = {
    name: "Piyush",
    email: "piyushyadav@14431",
    price: 899

   }
   function handle0bject(anyObject){//user ki jagah `anyObject` lene ka matlab, mai koi bhi object is function me le sakta hu, bas user hi nahi
      console.log(`Username is ${anyObject.name} and the price is ${anyObject.price}`)
   }
     handle0bject(user1) 
     //Suppose object me price ki  jagah prices jeson object ke through aaya hota, 
     //aur functin me {anyObject .price} likha to to resultUndefined aata
     //To yahi use aata hai TypeScript, TypeSafety

     //OR
     handleObject({
        username:'SAM'
        price: 399
     })

     //--------------------------------------------------------------------------------------------------


     //ARRAY//
     ==============

     const myNewArray = [200,300,500]
     function returnSecondValue(getArray){
        return getArray[2]// 2=index number of array list
     }
     console.log(returnSecondValue(myNewArray))











    