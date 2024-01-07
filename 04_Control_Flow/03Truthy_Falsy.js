let username="abhr"

if(username)
console.log("username not empty");
else
console.log("empty");


//Falsy values:
// 0,"",false,0,-0,BigInt(0n),null ,undefined,NaN


//Some Truthy value
//"0" ,"false", " ",[],{},function(){}


const myobj={
   
    
}

if(Object.keys(myobj).length==0){
    console.log("empty");
}