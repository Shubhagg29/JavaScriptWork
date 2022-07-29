//#Sqaure Root of number
let sqrRoot=((val)=>{

  return  Math.sqrt(val)
});
//console.log(sqrRoot(4))

//# Swap two varibles
let swapVarible=(a,b)=>{
    a=a+b;
    b=a-b;
    a=a-b;
console.log(`Value of A ${a} and value of B ${b}`)
}
swapVarible(5,8);

//Largest Number Among three number

let largestNumber =((a,b,c)=>{
let result;
if (a>b){
    if(a>c){
        result =a;
    }
    else{
        result = c;
    }
}

else{
    if (b>c){
        result = b
    }
    else{
        result = c
    }
}
console.log(`The largest number  is ${result}`)
});

largestNumber(10,11,3)


// Creating Tables 
function Multiply(num) {
    for (let i=1;i<=10;i++){
        console.log(`Table of the ${4}*${i} is:`,num*i)
    } 
}
Multiply(4) 
