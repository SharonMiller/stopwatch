'use strict';
//create a stopwatch object with var: start, stop, and reset
//create errors for start and stop if they are already going
//create get Time using Date() for start, note it for stop and then subtract it for time past
//use setinterval

let sw = function Stopwatch () {
  let startTime, stopTime, running, duration=0;

  this.interval = function(){
    //setInterval(function) 1000 getElementbyid to write to html
  };

  this.start = function(){
    //add if statement for error, else running true this.interval()
    this.startTime = new Date();
  };




}

console.log(sw);