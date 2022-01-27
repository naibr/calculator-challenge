const display = document.getElementById("console__display");
const totalDisplay = document.getElementById("console__total");


const numbers = document.querySelectorAll(".btn__number");
const operators = document.querySelectorAll(".btn__operator")
const clear = document.getElementById("clear");
const allClear = document.getElementById("allClear");

const total = document.getElementById("total");

let firstNumber;
let secondNumber;
let equals;
let symbol;


numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        display.innerHTML += number.innerHTML;
        if (firstNumber) {
            secondNumber = display.innerHTML
        } else {
            firstNumber = display.innerHTML
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        totalDisplay.innerHTML = firstNumber;
        totalDisplay.innerHTML += operator.innerHTML;
        console.log(operator.innerHTML);
        symbol = operator.innerHTML;
        display.innerHTML = " ";
    })
})


total.addEventListener("click", (event) => {
    
    secondNumber = display.innerHTML;
    console.log(secondNumber);
    if (symbol === "+") {
        equals = Number(firstNumber) + Number(secondNumber);
        display.innerHTML = `${firstNumber} ${symbol} ${secondNumber}`;
        totalDisplay.innerHTML = equals;
    } else if (symbol === "-") {
        equals = Number(firstNumber) - Number(secondNumber);
        display.innerHTML = `${firstNumber} ${symbol} ${secondNumber}`;
        totalDisplay.innerHTML = equals;
    } else if (symbol === "*") {
        equals = Number(firstNumber) * Number(secondNumber);
        display.innerHTML = `${firstNumber} ${symbol} ${secondNumber}`;
        totalDisplay.innerHTML = equals;
    } else if (symbol === "/") {
        equals = Number(firstNumber) / Number(secondNumber);
        display.innerHTML = `${firstNumber} ${symbol} ${secondNumber}`;
        totalDisplay.innerHTML = equals;
    }
})

clear.addEventListener("click", (event) => {
    display.innerHTML = " ";
    firstNumber = ""
    secondNumber = ""
    symbol = ""
    totalDisplay.innerHTML = ""
})