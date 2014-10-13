
 
var $time;
var clocktimer;
var running = false;
 
 var stoppeKlokke = function() {

    var startAt = 0;    
    var lapTime = 0;    

    var now = function() {
            return (new Date()).getTime(); 
        }; 


    this.start = function() {
            startAt = startAt ? startAt : now();
        };

    this.stop = function() {
            // If running, update elapsed time otherwise keep it
            lapTime = startAt ? lapTime + now() - startAt : lapTime;
            startAt = 0; // Paused
        };

    this.reset = function() {
            lapTime = startAt = 0;
        };

    this.time = function() {
            return lapTime + (startAt ? now() - startAt : 0); 
        };
};
var stoppeKlokke = new stoppeKlokke();

function pad(num, size) {
    var s = "0000" + num;
    return s.substr(s.length - size);
}
 
function TimeFormater(time) {
    var h = m = s = ms = 0;
    var newTime = '';
 
    h = Math.floor( time / (60 * 60 * 1000) );
    time = time % (60 * 60 * 1000);
    m = Math.floor( time / (60 * 1000) );
    time = time % (60 * 1000);
    s = Math.floor( time / 1000 );
    ms = time % 1000;
 
    newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
    return newTime;
}
 
function showClock() {
    $time = document.getElementById('display-area');
    updateClock();
}
 
function updateClock() {
    $time.innerHTML = TimeFormater(stoppeKlokke.time());
}

function toggleClock(){

    if(running){
        stoppeKlokke.stop();
        clearInterval(clocktimer);
        running = false;
    }else{
        clocktimer = setInterval("updateClock()", 1);
        stoppeKlokke.start();
        running = true;
    }
}
 
function resetClock() {
    stop();
    stoppeKlokke.reset();
    updateClock();
}