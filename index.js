
function clock(){
  
let hrDots = document.getElementById('hrDots');   
let minDots = document.getElementById('minDots');
let secDots = document.getElementById('secDots');

let date = new Date();
let hours = date.getHours() % 12 // convert to 12 hours format
let amPm = date.getHours() >= 12 ? 'PM'  :  'AM'
hours = hours === 0 ? 12 : hours; // handle midnight (0 hours)
let minutes = date.getMinutes(); 
let seconds = date.getSeconds();

let secondsDots= '';
for(let i = 1; i < 61; i++){
    let rotation = i * 6; // rotate each line by 6 degree
    if( i === seconds){
        secondsDots += '<div class="dot active" style="transform: rotate('+rotation+'deg"></div>';
    }
    else {
        secondsDots += '<div class="dot" style="transform: rotate('+rotation+'deg"></div>';
    }
}

let minutesDots= '';
for(let i = 1; i < 61; i++){
    let rotation = i * 6; // rotate each line by 6 degree
    if( i === minutes){
        minutesDots += '<div class="dot active" style="transform: rotate('+rotation+'deg"></div>';
    }
    else {
        minutesDots += '<div class="dot" style="transform: rotate('+rotation+'deg"></div>';
    }
}

let hoursDots= '';
for(let i = 1; i < 13; i++){
    let rotation = i * 30; // rotate each line by 30 degree
    if( i === hours){
        hoursDots += '<div class="dot active" style="transform: rotate('+rotation+'deg"></div>';
    }
    else {
        hoursDots += '<div class="dot" style="transform: rotate('+rotation+'deg"></div>';
    }
}

secDots.innerHTML = secondsDots + '<b>' + amPm + '</b>' + '<h2>' + zero(seconds) + '<br><span>Seconds</span></h2>';
minDots.innerHTML = minutesDots + '<h2>' + zero(minutes) + '<br><span>Minutes</span></h2>';
hrDots.innerHTML =  hoursDots + '<h2>' + zero(hours) + '<br><span>Hours</span></h2>';
}

// add zero in single digit number
function zero(number){
    if (number < 10 ){
        return '0' + number;
    }
    return number;
}

setInterval(clock,1000);