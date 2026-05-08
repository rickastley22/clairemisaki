//var x;

var x = document.getElementById("track-1-source");
var y = document.getElementById('track-1-img');


var trackPlaying = 1;

function playAudio() {
    x.play();
}

function pauseAudio() {
  x.pause();
    
//    y = document.getElementById('track-1-img').style.animation="none";
//    y = document.getElementById('track-2-img').style.animation="none";
//    y = document.getElementById('track-3-img').style.animation="none";
//    y = document.getElementById('track-4-img').style.animation="none";
//    y = document.getElementById('track-5-img').style.animation="none";
}

function changeTrack1() {
    trackPlaying = 1;
    x.pause();
    x = document.getElementById("track-1-source");
    x.load();
    x.play();
    
    y = document.getElementById('track-2-img').style.animation="none";
    y = document.getElementById('track-3-img').style.animation="none";
    y = document.getElementById('track-4-img').style.animation="none";
    y = document.getElementById('track-5-img').style.animation="none";
    
    y = document.getElementById('track-1-img').style.animation="rotateAnimation 3s linear infinite";


} 

function changeTrack2() {
    trackPlaying = 2;
    x.pause();
    x = document.getElementById("track-2-source");
    x.load();
    x.play();
    
    y = document.getElementById('track-1-img').style.animation="none";
    y = document.getElementById('track-3-img').style.animation="none";
    y = document.getElementById('track-4-img').style.animation="none";
    y = document.getElementById('track-5-img').style.animation="none";
    
    y = document.getElementById('track-2-img').style.animation="rotateAnimation 3s linear infinite";

} 

function changeTrack3() {
    trackPlaying = 3;
    x.pause();
    x = document.getElementById("track-3-source");
    x.load();
    x.play();
    
    y = document.getElementById('track-1-img').style.animation="none";
    y = document.getElementById('track-2-img').style.animation="none";
    y = document.getElementById('track-4-img').style.animation="none";
    y = document.getElementById('track-5-img').style.animation="none";
    
    y = document.getElementById('track-3-img').style.animation="rotateAnimation 3s linear infinite";

} 

function changeTrack4() {
    trackPlaying = 4;
    x.pause();
    x = document.getElementById("track-4-source");
    x.load();
    x.play();
    
    y = document.getElementById('track-1-img').style.animation="none";
    y = document.getElementById('track-2-img').style.animation="none";
    y = document.getElementById('track-3-img').style.animation="none";
    y = document.getElementById('track-5-img').style.animation="none";
    
    
    y = document.getElementById('track-4-img').style.animation="rotateAnimation 3s linear infinite";

} 

function changeTrack5() {
    trackPlaying = 5;
    x.pause();
    x = document.getElementById("track-5-source");
    x.load();
    x.play();
    
    y = document.getElementById('track-1-img').style.animation="none";
    y = document.getElementById('track-2-img').style.animation="none";
    y = document.getElementById('track-3-img').style.animation="none";
    y = document.getElementById('track-4-img').style.animation="none";
    
    y = document.getElementById('track-5-img').style.animation="rotateAnimation 3s linear infinite";

} 





//function trackSpin() {
//    document.getElementById('track-1-img').style.animation="rotateAnimation 3s linear infinite";
//
//}
