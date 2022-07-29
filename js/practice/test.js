console.log('great')
let btn = document.getElementById('btn');
let count = 0;
// btn.addEventListener('click',function (){
//     count++;
//     btn.innerHTML=count;
//     console.log(count)
    
// })


let btnIds= document.getElementsByClassName('buttonClass')
//console.log(btnIds)
let av;
Array.from(btnIds).forEach(element => {
 av  =element.innerText;

});
