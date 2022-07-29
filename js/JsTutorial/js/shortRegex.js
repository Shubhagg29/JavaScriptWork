
let regex = /\wham/;  //  \w--> word character-->  ( _ alphabet or number)
regex = /\w+ham/;   //-->  \w+ means one or more 
regex = /\Wham/;  //--> \W stands for non word characters 
regex = /\d+/;  //-->\d for digit
regex = /\s+is/;  // \s--> white space matching 
regex= /\D+9999/;  // D non digit
regex=/\Sis/;     //S non space
regex=/@@&\b/     //Word Boundary

//Assertions
regex=/s(?=r)/;  //r after s will match 
regex=/s(?!h)/;  //anything after s but not h will match
const str = "sh_ubhdfjoijowjpojp%@@&ham is learning ais  su9990 sr9999";

let result = regex.exec(str);
console.log(result)

if (regex.test(str)) {
   console.log(`this matches ${str} with ${regex.source}`)
}
else {
    console.log(`this does not  matches ${str} with ${regex.source}`)
}