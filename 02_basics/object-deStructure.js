//destructuting the Objects

const course = {
    course: "Java Script",
    price:"999",
    mentor:"Piyush"
} //now i want to use values, then what i do generaly
 course.mentor   // in this line 8 there is no any problem, but if i want to use value 3-4 times then what i do

//example
 const{} = course// {}= which i value i want ,, course = from where  
 const {mentor}= course                                               
 console.log(mentor); //Result is Piyush
 //Now if mentor word is big to you give a name for your conveneant

 const{mentor:m} = course //NOW mentor denotad as `m`
 console.log(m) // valuse is same as mentor


 //RANDOMUSERME == for api practice
 //json formatter > and json objects convert to tree