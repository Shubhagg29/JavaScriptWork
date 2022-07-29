const str= "this is the greatest satsifactory  Sunday evening ever observed";
const strArray= str.split(' ');
console.log(strArray)
const longestWord= ()=>{
let sortedArray= strArray.sort((a,b)=>{
    if(b.length >a.length)
    {
        return 1;

    }
    else{
        return -1
    }
   
});
console.log(sortedArray)
return sortedArray[1]
};
//console.log(longestWord())

const str1= "this is the greatest satsifactory  Sunday evening ever observed";

let LongestWord="";
const strArray1= str1.split(' ');
for (let i=0;i<strArray1.length;i++){
    let  indWord=strArray1[i]; 

if(indWord.length>LongestWord.length){
    LongestWord= indWord
}

}
console.log(LongestWord)