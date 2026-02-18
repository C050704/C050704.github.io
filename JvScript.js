function getCounterValue() {
    return parseInt(document.getElementById("counter").textContent);
}

function setCounterValue(value) {
    document.getElementById("counter").textContent = value;
}

function tickUp() {
    let counter = getCounterValue();
    setCounterValue(counter + 1);
}

function tickDown() {
    let counter = getCounterValue();
    setCounterValue(counter - 1);
}

function runForLoop() {
    let counter = getCounterValue();
    let result = "";

    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}

function showOddNumbers() {
    let counter = getCounterValue();
    let result = "";

    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}

function addMultiplesToArray() {
    let counter = getCounterValue();
    let arr = [];

    for (let i = counter; i >= 5; i--) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }

    console.log(arr);
}

function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}

function loadCar(num) {
    let car;

    if (num === 1) car = carObject1;
    if (num === 2) car = carObject2;
    if (num === 3) car = carObject3;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(num) {
    let paragraph = document.getElementById("styleParagraph");

    if (num === 1) paragraph.style.color = "red";
    if (num === 2) paragraph.style.color = "green";
    if (num === 3) paragraph.style.color = "blue";
}
