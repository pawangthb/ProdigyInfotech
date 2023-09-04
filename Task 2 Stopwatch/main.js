const stopwatch = document.getElementById('stopwatch');
const time = document.getElementById('time');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');
let isRunning = false;
let interval;
let elapsedTime = 0;
function updateTime(){
    let seconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    hours %= 60;
    minutes %= 60;
    seconds %= 60;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    time.textContent = `${hours}:${minutes}:${seconds}`;
}
function startStopwatch(){
    if (!isRunning){
        isRunning = true;
        interval = setInterval(() =>{
            elapsedTime +=100;
            updateTime();
        },100);

    }
}

function stopStopwatch(){
    if (!isRunning){
        isRunning = true;
        clearInterval(interval);
    }
}
function resetStopwatch(){
    stopStopwatch();
    elapsedTime = 0;
    updateTime();
}

startbtn.addEventListener('click',startStopwatch);
stopbtn.addEventListener('click',stopStopwatch);
resetbtn.addEventListener('click',resetStopwatch);


































/*const timer = document.getElementById("stopwatch");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
    if (stoptime == true){
        stoptime = false;
        timerCycle();
    }
}

function stopTimer(){
    if (stoptime == false){
        stoptime = true;
    }
}
function timerCycle(){
    if (stoptime == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;
        if (sec == 60){
            min = min + 1;
            sec = 0;
        }
        if (min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0; 
        }
        if (sec < 10 ){
            sec = "0" + sec;
        }
        if (min < 10){
            min = "0" + min;
        }
        
        if (hr < 10){
            hr = "0" + hr;
        }
        timer.innnerHTML = hr + ":" + min + ":" + sec;
        setTimeout("timerCycle()", 1000);
        }
    }
    
        function resetTimer(){
            timer.innerHTML = "00:00:00";
            stoptime = true;
            hr = 0;
            sec = 0;
            min = 0;
        }
    
 */