window.addEventListener("DOMContentLoaded", () => {

    window.getCounterValue = function () {
        return parseInt(document.getElementById("counter").textContent);
    };

    window.setCounterValue = function (value) {
        document.getElementById("counter").textContent = value;
    };

    window.tickUp = function () {
        setCounterValue(getCounterValue() + 1);
    };

    window.tickDown = function () {
        setCounterValue(getCounterValue() - 1);
    };

    window.runForLoop = function () {
        let counter = getCounterValue();
        let result = "";

        for (let i = 0; i <= counter; i++) {
            result += i + " ";
        }

        document.getElementById("forLoopResult").textContent = result.trim();
    };

    window.showOddNumbers = function () {
        let counter = getCounterValue();
        let result = "";

        for (let i = 1; i <= counter; i += 2) {
            result += i + " ";
        }

        document.getElementById("oddNumberResult").textContent = result.trim();
    };

    window.addMultiplesToArray = function () {
        let counter = getCounterValue();
        let arr = [];

        for (let i = counter; i >= 5; i--) {
            if (i % 5 === 0) arr.push(i);
        }

        console.log(arr);
    };

    window.printCarObject = function () {
        let car = {
            cType: document.getElementById("carType").value,
            cMPG: document.getElementById("carMPG").value,
            cColor: document.getElementById("carColor").value
        };

        console.log(car);
    };

    window.loadCar = function (num) {
        let car;

        if (num === 1) car = carObject1;
        if (num === 2) car = carObject2;
        if (num === 3) car = carObject3;

        document.getElementById("carType").value = car.cType;
        document.getElementById("carMPG").value = car.cMPG;
        document.getElementById("carColor").value = car.cColor;
    };

    window.changeColor = function (num) {
        let paragraph = document.getElementById("styleParagraph");

        if (num === 1) paragraph.style.color = "red";
        if (num === 2) paragraph.style.color = "green";
        if (num === 3) paragraph.style.color = "blue";
    };

});
