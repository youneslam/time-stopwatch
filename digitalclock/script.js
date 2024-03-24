function updateClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("horloge").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
const plasma=document.getElementById("plasma");
let timer=null;
let starttime=0;
let passedtime=0;
let isrunning=false;

function start(){
    if(!isrunning){
        starttime=Date.now()-passedtime;
        timer=setInterval(update,10);
        isrunning=true;
    }
}
function stop(){
    if(isrunning){
        clearInterval(timer);
        passedtime=Date.now()-starttime;
        isrunning="false";
    }

}
function reset(){
    clearInterval(timer);
    starttime=0;
    passedtime=0;
    isrunning=false;
    plasma.textContent=`00:00:00:00`;

}
function update(){
    const date=Date.now();
    passedtime=date-starttime;
    let hours=Math.floor(passedtime/(1000*3600));
    let minutes=Math.floor((passedtime/(1000*60))%60);
    let seconds=Math.floor((passedtime/(1000))%60);
    let milliseconds=Math.floor(passedtime%1000/10);
    hours = String(hours).padStart(2, '0');
    minutes =String(minutes).padStart(2, '0');
    seconds =String(seconds).padStart(2, '0');
    milliseconds=String(milliseconds).padStart(2, '0');
    plasma.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;



}

    
