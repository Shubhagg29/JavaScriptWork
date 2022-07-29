
const assert=require("assert")


function start(a,b){
    
   let c=a+b;
   return c
}
console.log(start(10,40))

//Anonymous function
let myfunction=function(){
    
    console.log("hello Js")
}
myfunction();

//function inside array
let arr=[1,"shubham",f2=function(){
    console.log("Inside array for Js")
}]
arr[2]();

//Arrow function
 let address=(houseno) =>{
    console.log(` ${houseno} Inside arrow`)
    
}
address(48);
//Using Variable in function
function add(no,street){
    console.log(`${no} ${street}  Indore`)
    assert(50<60,"Expected")
}
add(47,"Ashish NAgar")

setTimeout(()=>{
    console.log('3')
    setTimeout(() => {
        console.log('2')
    }, 1000);
},1000)


