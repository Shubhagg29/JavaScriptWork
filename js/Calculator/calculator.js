console.log('project 7 learning')
let screen= document.getElementById('screen');

let buttons = document.querySelectorAll('button')
let screenValue="";
for(item of buttons){
   
    item.addEventListener('click',(e)=>{
    let buttonText=e.target.innerText

   if(buttonText=='*'){
    screenValue+=buttonText;
    screen.value=screenValue;

   }
   else if(buttonText=='C'){
    screenValue= "";
    screen.value= screenValue;
    
   }
   else if(buttonText=='='){
    
      // screen.value = eval(screenValue)

      if(screenValue==""){
        screen.value= screenValue;
        console.log( screen.value)
      }
      else{
        screen.value = eval(screenValue)   
        console.log( screen.value)
      }
   
    
      //screen.value = "";
      
   }

    else if (buttonText=='Del'){
       let num= screen.value;
    let len = num.length-1;
    if(num===""){
        screenValue= "";
        screen.value= screenValue;
    }
    else{
        
        console.log(len)
    let newNum=num.substr(0,len)
    console.log(newNum)
    screen.value=newNum;
    }
    }

   
   else {
    screenValue += buttonText;
    screen.value = screenValue;
}


    })
}