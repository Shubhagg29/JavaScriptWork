console.log('wall')

// setInterval(() => {
//     updateClock();   
// }, 1000);


setInterval('updateClock()'), 1000;

function updateClock(){
    let wallclock = document.getElementById('time');
    let a= new Date();
    let hour=a.getHours();
    let minutes= a.getMinutes();
    let seconds=a.getSeconds();


    //minutes=(minutes<10 ? "0": "") + minutes
    if(minutes<10){
        minutes=  "0"+ minutes;
    }
    else{
        minutes=  "" + minutes;
    }
    //let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    let timeofDay="";

    if(hour<12){
        
        timeofDay="AM" 
    }
else{
  
    hour = hour % 12; 
    hour=  "0"+ hour;
    timeofDay="PM" ;
}
    
let time = hour+ ':' + minutes + ':' + seconds + " "+timeofDay;
wallclock.innerHTML=time;
}



