// function myfunc(a){
//     console.log(a)
// }

// function myfunc2(a,b){
//  console.log("callfreturn")
//     return a+b;
// }
// myfunc(myfunc2(4,5))



function myf2(a,b){

    console.log("champion")
return a+b
}


function myf1(callback){
    console.log("Inside myf1") 
   console.log (callback(10,4));
   
}

myf1(myf2);

//function Returing Function

function test(){
   function check(a,b){
       console.log("hello world")
      return a+b;
   } 
   return check;
}
const ans= test();
console.log(ans(5,6));


//2 
function mtest(){
    return function check(a,b){
        console.log("hello test")
       return a+b;
    } 
}
const ant= mtest();
console.log(ant(9,91))