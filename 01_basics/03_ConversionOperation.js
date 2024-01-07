let score1 = "100"
let score2 ="100a"
let score3 = null
let score4=undefined
let score5=22
let islogged = 1
let islogged2 =""
let islogged3 = "Abhiraj"

let value1 = Number(score1)
let value2 = Number(score2)
let value3= Number(score3)
let value4= Number(score4)
let value5= String(score5)
let value6= Boolean(islogged)
let value7= Boolean(islogged2)
let value8= Boolean(islogged3)

console.table([value1,value2,value3,value4,value5,value6,value7,value8])

console.table([typeof(value1),typeof(value2),typeof(value3),typeof(value4),typeof(value5),typeof(value6),typeof(value7),typeof(value8)])

//NaN : Not a Number "means not a valid value"

//"33"=>33
//"33ab"=>NaN
//true/false=>1/0
//null=>0
//undefined=>NaN
//"" => false
//"Anything"=>true
//null=>false
//undefined=>false