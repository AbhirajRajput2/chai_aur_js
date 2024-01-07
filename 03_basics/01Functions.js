//  function myfunc(number1,number2){
//      let result = number1+number2
//      return result
//  }

//  let result=myfunc(3,3)
//  console.log("Result: ",result)



// function loginusername(username){
//     return `${username} just logged in`
// }

// console.log(loginusername("Abhiraj"))

//If you dont put any value like " console.log(loginusername())"  then it will return "undefined".

// console.log(loginusername()) //undefined just logged in
//to avoid this situation use if,else to ckeck,like..


// function loginusername(username){
//     if(!username){
//         return`please enter a username`
//     }
//     return `${username} just logged in`
// }

// console.log(loginusername()); //please enter a username




//If you don't know how much parameter user will give use "Spread" it will take all parameter and make array of it

// function spreadfunc(...par){
//     console.log(par)
// }

// spreadfunc(1,2,3,3,4,54,5)




//If you wanna pass array or object into functions

// 1.Objects
// let myobj ={
//     user:"Abhiraj",
//     salary:1999
// };

// function func1(Myobject){
//     console.log(`${Myobject.user} have salary of ${Myobject.salary}`)
// }

// func1(myobj)

//You can also directly pass object through parameter
    // func1({
    //             user:"Abhiraj",
    //             salary:1999      
    // })

//Keep in mind if you bymistake make any mistake value will be "undefined"
//Example:
// function func1(Myobject){
//     console.log(`${Myobject.uuser} have salary of ${Myobject.saalary}`)
// }

// func1(myobj)


//2.Arrays

// let myarr=[1,2,3,4,5]
// function func2(...array){
//     console.log(array[0])
// }

// func2(myarr)
//You can directly pass array through parameter but user ...
// func2(1,2,3,4,5)

//Similarly herre if you make any mistake output will be undefined







