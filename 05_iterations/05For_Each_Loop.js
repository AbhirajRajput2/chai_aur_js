//array
let myarr = ["a", "b", "c", "d", "e"];

myarr.forEach((item) => {
  console.log(item);
});

//object
let myobj = { name: "abhiraj", class: "4th" };

Object.keys(myobj).forEach((item) => {
  console.log(`${item} : ${myobj[item]}`);
});

//Array of object

let name = [
  {
    name: "abhiraj",
    class: "4th",
  },
  {
    name: "ram",
    class: "3th",
  },
  {
    name: "raj",
    class: "5th",
  },
  {
    name: "ggg",
    class: "7th",
  },
];

name.forEach((item)=>{
    console.log(`${item.name}`);
})

//for each doesn't return anything