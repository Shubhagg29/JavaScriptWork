function evenOdd(num){
    if(num % 2===0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}
function doubleIt(number){
    number =number*2;
    console.log("Number is " + number);
    
}

var mynum=[2,3,4,5];
evenOdd(4)
mynum.map(doubleIt);


const addAll= (a,...b)=>{
    return a+b;
}

console.log("Addition++>> ",addAll(3,4))