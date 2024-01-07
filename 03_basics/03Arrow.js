// const myobj ={
//     name:"Abhiraj",
//     rollno:5,
//     welcome:function myfunc(){
//         console.log(`${this.name} is the student of rolll no: ${this.rollno}`)
//     }
// }

// myobj.welcome()
// myobj.name="Hitesh"
// myobj.welcome()
//Okay so we understand "this" is used to refer inside values,But 

// ************** Empty this
// console.log(this)
//this will provide {} empty object , But if you will run it in browser it will provide "Window" Object

//****What if inside function
//  function myfunc1(){
//     console.log(this) //this will provide multiple things which is some system kinda just run and see
//  }
//  myfunc1()


//"This" will not work simply in function()
// function myfunc2(){
//     let username="Abhiram"
//     console.log(this.username); //OUTPUT will be "undefined"
// }
// myfunc2()


//"This" will not also work simply in "Arrow Function"
// const name=()=>{
//     username="afn"
//     console.log(this.username); //OUTPUT will be undefined
// }
// name()





//"ARROW FUNCTION"


//1.Arraow function with explicit return 

// const add=(num1,num2)=>{
//     return num1+num2
// }

// let sum=add(2,2)
// console.log(sum);

//2. Arrow function with implicit return

//  const add1=(num1,num2)=> num1+num2
 //OR
//  const add1=(num1,num2)=>(num1+num2) //this will be helpful when you will return object




//  let sum=add1(2,2)
//  console.log(sum);

