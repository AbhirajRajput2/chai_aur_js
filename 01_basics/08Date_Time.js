//Date calculated from January 1 1970.
//provide time in milisecond
//Still date and time is pain in js even js itself is trying to fix it

let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)

let createdate = new Date(2023,0,17)
// console.log(createdate)
// console.log(createdate.toString())  // here 0 index is january

let createdate1 = new Date(2023,0,17,5,3,2)
// console.log(createdate1.toString())  

let createdate2 = new Date("2023-01-17") //("01-17-2023") also valid you can change (mm/dd/yy) as your choice
// console.log(createdate2.toString())  // Here january start from 01

let timestamp =  Date.now()
// console.log(timestamp)  
// it will provide milisecond from 1 january 1970
//to convert it into second divide by 1000 and ...

// console.log(createdate2.getTime())


let latest = new Date()
//this will provide you current date,hour,month by get method
console.log(latest.getDate())
console.log(latest.getMonth())
console.log(latest.getHours())
