
let a = document;
//console.log(document.images)
Array.from(a).forEach(element => {
    //console.log(element)
});

//Css changes 
let btn = document.getElementById("click")

btn.style.color = 'green'
btn.style.border += '2px solid black'

let st = btn.getAttribute("Style");
console.log(st)


let ele = document.querySelector('div')
let tes = ele.getElementsByClassName('test')
//console.log(test)

Array.from(tes).forEach(element => {

    element.style.color = 'cadetblue';
    st1 = element.getAttribute("style")
});
console.log(st1)


let tex = "Google"


let b = document.links
Array.from(b).forEach(element => {
    if (element.innerText.includes(tex)) {
        element.innerText = "Shubham"
    }
    // console.log(element)
});

let creat=document.createElement('h2');
let text= document.createTextNode("Go to Images");
let link=document.createElement('a');
console.log(link);
link.setAttribute('href','https://www.youtube.com')
creat.id="head";
creat.className="imagehead";
creat.appendChild(link);
link.appendChild(text);

console.log(creat);
let form=document.getElementById('frm');
form.appendChild(creat)





