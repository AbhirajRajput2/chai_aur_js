// Syntax:  object.filter((num)=> Condition)

let myarr=[1,2,3,4,5,6,7,8,9,10]


//implicit return without {} no return required
let mynewarr= myarr.filter((num)=> num>5)

//Explicit return with {} return required
mynewarr = myarr.filter((num)=>{return num>5})

console.log(mynewarr)


//** */

let myobj=[
    {name:"sunrise",genre:"history",published:2000},
    {name:"moonrise",genre:"geography",published:1999},
    {name:"sunrise1",genre:"history",published:2758},
    {name:"sunrise2",genre:"science",published:2888},
    {name:"sunrise4",genre:"history",published:1397},
    {name:"sunrise5",genre:"science",published:3937},
    {name:"sunrise6",genre:"geography",published:2000},
    {name:"sunrise7",genre:"history",published:1930},
    {name:"sunrise8",genre:"geography",published:2094},
    {name:"sunrise9",genre:"history",published:1009},
    {name:"sunrise10",genre:"science",published:2737}
]

let mynewobj= myobj.filter((obj) => obj.genre==='history')
console.log(mynewobj);

let mynewobj1= myobj.filter((obj) => obj.genre==='geography' && obj.published>2000)
console.log(mynewobj1);
