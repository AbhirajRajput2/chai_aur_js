//Immediately Invoked Function Expression(IIFE)

//To avoid global variable polluting we use IIFE so it will run as soon code executes and we mainly do this to function which we wanna do only ones time in whoole programm

//Syntax:  (Definition)(parameter);


(
    function myfunc(){
        console.log("HEllo")
    }
)();

//Arrow function
(
    ()=>{
        console.log("Hello");
    }
)();

//using parameter

(
    function myfunc1(name){
        console.log(`${name}`)
    }
)("Abhiraj");

//In the end ; is very necessary because it will tell function when to stop execution