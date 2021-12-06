class Rocket {
    constructor(
        fuelType,
        weight,
        power,

    ) {
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch() {
        alert("launch sequence started");
        return true;
    }
    landing() {
        alert("landing sequence started");
        return true;
    }
    detachThuruster(thurusterID) {
        alert("Thuruster" + thurusterID + "has been detached.");
        return true;
    }

}
class Mission {
    constructor(
        objective,
        launchDateDay,
        launchDateMonth,
        launchDateyear,
        spaceCraft,
        numAstornauts
    ) {
        this.objective = objective;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateyear = launchDateyear;
        this.spaceCraft = spaceCraft;
        this.numAstornauts = numAstornauts
    }
    displayMissionparameter() {
        alert("the spacecraft" + this.spacecraft + "will launch on" + this.lauchDataDay + "of" + this.launchDateMonth + " " + this.launchdataYear)
    };

    launch() {
        alert("launch sequence started");
    }
}
function LaunchFall() {
    console.log("launchFall() started");
    fallLaunch.launch();
}
function displayFall() {
    console.log(LaunchFall)
}

function goUATSpace(){
    console.log("goUATSpace() started")
    location.replace("login.html"); //finish the code for all buttons
}
function goborads(){
    console.log("goborads() started")
    location.replace("borads.html");
}