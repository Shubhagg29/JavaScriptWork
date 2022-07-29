console.log("regex");
//g flag gives search globally
reg = /shubham/

let s = "This is the learning time for shubham.Learning JS for shubham is good"
//exec
let result = reg.exec(s);
//console.log(result.index);
//result= reg.exec(s);
//console.log(result);

//match //Will give the array of matching 
result = s.match(reg)
console.log(result)

//search --> gives the index if match found else gives -1
//result = str.search(reg)
//console.log(result)


//Replace--> without /g/global it iwll replace only first one 
//result = s.replace(reg,'Ram')
//console.log(result)

//let see Some metacharacter symbol...>
let regex = /shubham/
regex = /^sh/ //^  string means starts with
regex = /am$/ //$  string ends with
regex = /s..bham/ // "." matches any one character
regex = /s*am/  //* matches any 0 or more character
regex = /sh?ubham/  //? after character means that character is Optional

let str = "shubham is good boy help Learning shubham"

let result = regex.exec(str);
console.log(result)

if (regex.test(str)) {
    console.log(`this matches ${str} with ${regex.source}`)
}
else {
    console.log(`this does not  matches ${str} with ${regex.source}`)
}