const { createModuleResolutionCache } = require("typescript");

function reverse() {
  
    let num='Shubham'
   let  rev='';
    for(let i=num.length-1;i>=0;i--)
    {
        rev=rev+num[i];
    }
    console.log(rev)
}

//reverse();

function reverseSplit(str){
 
try {
  console.log(str.split(" ").reverse().join(" "));
  console.log(str.split("").reverse().join(""));

} catch (error) {
    console.log(error.message)
    console.log(str)
}
 
}
//reverseSplit("India is 12 country ");

function checkNUm(num) {
   
    if(num>0){
        return "YES";
    }


    else if(num==0){
        throw new Error("Zero Error");
    }
    else if (num<0){
        throw new Error("Nega Eror");
    }    
}
       
   let doll='shubham one' 
console.log(doll.slice(-3))
//checkNUm(4)