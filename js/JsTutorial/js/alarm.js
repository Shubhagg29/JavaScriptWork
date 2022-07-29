console.log('Alarm Clock')

const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click',setAlarm);

var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

setInterval(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let a = new Date();
     let date = a.toLocaleDateString(undefined, options);
     let time= a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
     document.getElementById("time").innerHTML = time + '<br> ' + date;  
}, 1000);

      

function setAlarm(e){
    e.preventDefault();
    console.log('Alarm is set')
    const alarm = document.getElementById('alarm');
    console.log(`Setting Alarm for ${alarm.value}...`)
    alarmDate= new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
  
    if(timeToAlarm<=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }

 
}