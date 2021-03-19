class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.stop_check = false;
    }
}

Timer.prototype.stop = function(timer){
    timer.stop_check = true;
}

Timer.prototype.continue = function(timer){
    timer.stop_check = false;
    timer.start();
}

Timer.prototype.tick = function(thisTimer, title, stopCount, delay){
    console.log("Timer " + title + " Tick! | cycles left " + (--stopCount) );
    document.getElementById("timer").innerHTML= title;
    document.getElementById("count").innerHTML= stopCount;
    document.getElementById("delay").innerHTML= delay;
    if(stopCount > 0 && !thisTimer.stop_check){
        setTimeout(Timer.prototype.tick, delay, thisTimer, title, stopCount, delay);
    }
    else{
        document.getElementById("count").innerHTML= stopCount;
        console.log(`Timer ${title} stopped`);
    }
};

Timer.prototype.start = function(){
    console.log("Timer " + this.title + " started (delay=" + this.delay + ", stopCount=" + this.stopCount + ")");

    /*while(this.stopCount > 0){
        console.log(`Start tick ${this.stopCount}`);
        document.getElementById("timer").innerHTML= this.title;
        document.getElementById("count").innerHTML= this.stopCount;
        document.getElementById("delay").innerHTML= this.delay;
        setTimeout(this.tick, this.delay, this.title, this.stopCount);
        //while(wait){console.log("waiting")}
        this.stopCount--;
        console.log(`End tick ${this.stopCount}`);
    }*/

    /*let id = setInterval(this.tick, this.delay, this.title, this.stopCount, this.delay);
    setTimeout(clearInterval, this.delay*this.stopCount, id)*/

    let timerId = setTimeout(this.tick, this.delay, this, this.title, this.stopCount, this.delay);
    //setTimeout(clearTimeout, 4000, timerId);

}

var timer;

function runTimer(title, delay, stopCount){
    timer = new Timer(title, delay, stopCount);
    timer.start()
    return timer;
}




//timer.start();
//setTimeout(timer.stop, 7000, timer);

//runTimer("Bleep", 1000, 5);
/*Console output:
Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/
