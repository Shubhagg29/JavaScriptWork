//Regular Expression

//Character Sets
let regex = /sh[a-z]bham/;
regex = /sh[aty]bham/; //any character given in sqaure bracket
regex = /sh[^aty]bha[um]/;  //any character [^] that does not matches with it
regex = /sh[a-zA-Z]bha[um0-9][0-9]/;
const st = "shUbham8 is learning";

//Qunatifiers--> specify quantity of character
regex=/ra{2}m/ //a can occur 2 times
regex=/ra{0,2}m/  //a can occur from 0-2 times  
let str="raam   bhai"

//Groupings  --> use paranthese for groups
regex=/(ram){0,3}([0-9][sty]){2}/
str="ramram8s6y  bhai"

let strn='abca'
let re =/^([aeiou]).*\1$/i
let resu= re.exec(strn)
console.log(`this matches ${strn} with ${re.source}`)

let result = regex.exec(str);
console.log(result)

if (regex.test(str)) {
    console.log(`this matches ${str} with ${regex.source}`)
}
else {
    console.log(`this does not  matches ${str} with ${regex.source}`)
}
