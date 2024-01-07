let myarr=[1,2,3]

let mynewarr1=myarr.reduce(function(acc,num){
    return acc+num
},0);

console.log(mynewarr1);

//using Arrow function

let mynewarr2=myarr.reduce((acc,num)=>acc+num,0);

console.log(mynewarr2);


//array of object

const Shoppingcart=[
    {
        course:"JS course",
        price:2000
    },
    {
        course:"PY course",
        price:999
    },
    {
        course:"Java course",
        price:4000
    },
    {
        course:"CPP course",
        price:3000
    },
    {
        course:"MERN course",
        price:6000
    }
]

let totalprice=Shoppingcart.reduce((acc,course)=>acc+course.price,0)

console.log(totalprice)