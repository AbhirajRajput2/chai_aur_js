
// const name= new Promise()

// let promise1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Abhiraj");
//         resolve()
//     }, 1000);
// })

// promise1.then(()=>{
//     console.log("Promise 1 completed");
// })


// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Promise 1 start");
//         resolve()
//     }, 1000);
// })
// .then(()=>{
//     console.log("Promise 1 completed");
// })


//Passing arguments

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Abhiraj"); //you can pass string,object,array anything
//         resolve("Rajput")
//     }, 1000);
// })
// .then((arg)=>{
//     console.log(arg);
// })


//then,catch,finally 

// new Promise((resolve,reject)=>{
//     let error=false
//     if(!error){
//         resolve({username:"Abhiraj",pass:123})

//     }else{
//         reject("ERROR:Something went wrong")
//     }
// })
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Promise either resolved or rejected");
// })


//asyn,await

// let promise6 =new Promise((resolve,reject)=>{
//     let error=false
//     if(!error){
//         resolve({username:"Javascript",pass:123})
//     }
//     else{
//         reject("ERROR:JS went wrong")
//     }
// });

// async function promise6res(){
//     try{
//         const res=await promise6
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
// }


//fetch using then,catch
//No need for async await as then wait till response


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
//     return response.json()
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(`E:${err}`);
// })


//Async,await

// async function apiresponse(){
//     try{
//         let res = await fetch('https://api.github.com/users/hiteshchoudhary')
//         let res1=await res.json()
//         console.log(res1);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// apiresponse()