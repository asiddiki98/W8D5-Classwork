class Clock {
    constructor() {
        // 1. Create a Date object.
        let date = new Date();
        // 2. Store the hours, minutes, and seconds.
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        // 3. Call printTime.
        this.printTime();
        // 4. Schedule the tick at 1 second intervals.
        // function myfunction() {
            debugger
        setInterval(this._tick.bind(this), 1000);
        // }
    }

    printTime() {
        // Format the time in HH:MM:SS
        let time = `${this.hours % 12}:${this.minutes}:${this.seconds}`;
        // Use console.log to print it.
        console.log(time);
    }

    _tick() {
        // debugger
        // 1. Increment the time by one second.
        this.seconds++;
        if (this.seconds === 60){
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes === 60 ){
            this.minutes = 0;
            this.hours++;
        }
        // 2. Call printTime.
        this.printTime();
    }
}

const clock = new Clock();