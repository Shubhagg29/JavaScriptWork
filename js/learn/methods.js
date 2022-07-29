const numbers =[1,2,4,5,8,7,10]

const even= numbers.filter((num)=>{
    return num%2==0
})
console.log(even)


const loggedInUser = 'John';
function greet(userName) {
  console.log('Welcome ' + userName + '!');
}
setTimeout(()=>{
    greet(loggedInUser)
}, 3000);

