function play_craps() {
    console.log("play_crabs()funtion Started");
    var die1 = Math.ceil(Math.random() * 6); //pick a random number from 0-6,it rounds it to the nears whole number, result becomes die1


    var die2 = Math.ceil(Math.random() * 6); //pick a random number from 0-6, it rounds it to the nears whole number , result becomes die2



    var sum = die1 + die2; //the final result is the combation of die1 and die2
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //shows the result of die1
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; // shows the result of die2
    document.getElementById("sumRes").innerHTML = "Sum = " + sum; //shows the result of the sum

    if (sum == 7 || sum == 11) //check the vaule for loss/win/tie if 7 or 11 its a loss 
    {
        //loss = loss + 1; //
        //document.getElementById("loseRes").innerHTML = loss; //cauclates the results for a loss
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose"; //it writes the loss stament if vaules are hit

    }
    else if (die1 == die2 && die1 % 2 == 0) {
        //win++;
        // document.getElementById("winRes").innerHTML = wins; //calatites the results for a win
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win"; //it writes the win statment if win vaules are hit
    } else {
        //document.getElementById("tieRes").innerHTML = tie; //cauclates the results for a tie
        document.getElementById("finalRes").innerHTML = "Draw - you neither won nor lost. Please try again "; // write statment if tie vaules are hit

    }
}


function blastoff() {
    var currTime = 50;
    document.getElementById("countdowntimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 10000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 15000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 20000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 25000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = "Blastoff!";
    }, 30000)
}

function btrBlastOff() {
    console.log("btrBlastOff() started");
    var currTime = 50;
    for (var i = 0; i < 11; i++) {
        setTimeout(function () {

            if (currTime >= 25) {
                //greater than 25 so only countdown
                document.getElementById("countdownTimer").innerHTML = currTime; //if contions are true, ++++++++++++++++++++misspelled countdownTimer
            } else if (currTime == 0) {
                //0 so blastoff
                document.getElementById("countdownTimer").innerHTML = "Blastoff!" //++++++++++++++++++misspelled countdownTimer
            } else {
                //les than 25 so the 1/2 way to launch style
                document.getElementById("countdownTimer").innerHTML = "Warning Less 1/2 way to launch, time left = " + currTime; //if contion are not true, need to finish, +++++++++++++++++ misspelled countdownTimer
            }
            currTime = currTime - 5;
        }, i * 5000);
    }
}
function start() {
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop() {
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
function getData() {
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>"; //added /
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
// function dataRow(legend, value, units) {
//     msg = "<td>" + legend + ": <td><td>" + value + " " + units + "</td>";
//     return msg;
// }

function playStation() {
    console.log("playStation started");
    mySound = new sound("us-lab-background.mp3")
    mySound.play();
}
function sound(scrFile) {
    this.sound = document.createElement("audio");
    this.sound.src = scrFile
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound)
    this.play = function () {
        this.sound.play();
    }
    this, stop = function () {
        this.sound.pause();
    }
}
function playWolf() {
    console.log("playWolf() started"); // change actal
    mySound = new sound("us-lab-background.mp3"); //change to actal one
    mySound.play();
}
class InputData {
    constructor(
        time_seconds,
        Latitude,
        Longitude,
        GPS_Altitude,
        BMP_Sensor_Altitude,
        BMP_Sensor_Pressure,
        BMP_Sensor_Temperature,
        Digital_Sensor_Temperature,
        CSS_Sensor_Temperature,
        CSS_Sensor_eCO2,
        CSS_Sensor_TVOC,
        UV,
        Accel_X,
        Accel_Y,
        Accel_Z,
        Magnetic_X,
        Magnetic_Y,
        Magnetic_Z,
        Gyro_X,
        Gyro_Y,
        Gyro_Z,
    ) {
        this.time_seconds = time_seconds;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.GPS_Altitude = GPS_Altitude;
        this.BMP_Sensor_Altitude = BMP_Sensor_Altitude;
        this.BMP_Sensor_Pressure = BMP_Sensor_Pressure;
        this.BMP_Sensor_Temperature = BMP_Sensor_Temperature;
        this.Digital_Sensor_Temperature = Digital_Sensor_Temperature;
        this.CSS_Sensor_Temperature = CSS_Sensor_Temperature;
        this.CSS_Sensor_eCO2 = CSS_Sensor_eCO2;
        this.CSS_Sensor_TVOC = CSS_Sensor_TVOC;
        this.UV = UV;
        this.Accel_X = Accel_X;
        this.Accel_Y = Accel_Y;
        this.Accel_Z = Accel_Z;
        this.Magnetic_X = Magnetic_X;
        this.Magnetic_Y = Magnetic_Y;
        this.Magnetic_Z = Magnetic_Z;
        this.Gyro_X = Gyro_X;
        this.Gyro_Y = Gyro_Y;
        this.Gyro_Z = Gyro_Z;
    }

}