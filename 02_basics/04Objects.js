//Objects in object

let human={
    email:"Abhiraj@email.com",
    fullname:{
       username:{
        firstname:"Abhiraj",
        lastname:"Rajput"
       }
    },
    id:1010
}

// console.log(human.fullname.username.firstname)


//Merging Objects:(use spread operator justlike in array merging)

const myobj1={1:"a",2:"b",3:"c"}
const myobj2={4:"a",5:"b",6:"c"}

// 1.Method1:Simple putting inside

// const myobj3={myobj1,myobj2}
// ?console.log(myobj3); //problem here is it will not merge both just put object inside object

// 2.Mehthod2 : Using "assign()" method

// const myobj3=Object.assign({},myobj1,myobj2) //always put a {} first for safety purpose
// console.log(myobj3) // It is right method but we will use something else

//3.Method3 : "Spread..."********
// const myobj3={...myobj1,...myobj2}
// console.log(myobj3); //Best way to merge object just like array



//Array of Object

// const myarr=[
//     {
//         userid:"12gdj3",
//         salary:1000
//     },
//     {
//         userid:"12g2j3",
//         salary:1020
//     }
// ]

// console.log(myarr[0].userid);

//Some object methods
let myobjj={
    username:"Abhiraj",
    class:'CS1',
    marks:7.33
}

//1. .Keys()   return all keys of onject in array format
    console.log(Object.keys(myobjj));

//1. .values()   return all values of onject in array format
console.log(Object.values(myobjj));

//1. .entries()   return all keys,value pair in array of array
// console.log(Object.entries(myobjj));


//************************************************************************* */
// Object Video 3

// Not mandatory but useful knowledge

// 1.Object destructuring: instead of writing long term again and again use shortform


// const mycourse={
//     name:"chai aur js",
//     price:"Free",
//     platform:"Youtube",
//     instructorname:"hiteshchaudary"
// }

// console.log(mycourse.instructorname); //instead of writin "mycourse.instructorname" again and again use..

// const{instructorname}=mycourse.instructorname;

// console.log(instructorname) //you can create shortcut by destructuring


//Now some API Chat

//API Outpput will be in JSON form quite similar to object , it can also be in form of array of JSOn

// JSON response
// {
//     "name":"Abhiraj",
//     "class":"CS1"
// }

//Array of JSON

// [
//     {
//             "name":"Abhiraj",
//             "class":"CS1"   
//     },
//    { 
//     "name":"Abhiraj",
//     "class":"CS1"   
// }
// ]

// We can use online tools like JSON formator to read data eadily of JSON files 