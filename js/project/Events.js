let ele = document.getElementsByClassName("container");

//Events in JavaScript

function clicked(){
console.log("Button is clicked")
}

window.onload= function(){
  
    console.log("window is loaded")
}


document.onload= function(){
  
    console.log("document is loaded")
}
let first = document.getElementById("first")
// first.addEventListener('click', function(){
// document.querySelectorAll('.container')[1].style= "background-color: red"; 
//  document.querySelectorAll('.container')[1].innerHTML= "<b>Color & text Changed</b>"; 
//  })
let previousHtml=document.querySelectorAll('.container')[1].style
let previousText= document.querySelectorAll('.container')[1].innerHTML

//Here first is the id for the container


first.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].style= "background-color: cyan"; 
    document.querySelectorAll('.container')[1].innerHTML= "<b>Color & Para Changed</b>"; 
    })

 first.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].style="background-color: green"
    document.querySelectorAll('.container')[1].innerHTML=previousText
 })




