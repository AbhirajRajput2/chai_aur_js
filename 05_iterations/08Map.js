const myarr=[1,2,3,4,5,6,7,8,9]

const mynewarr=myarr.map((num)=>num+10)

console.log(mynewarr);

//Chaining
const mynewarr1= myarr.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)

console.log(mynewarr1);