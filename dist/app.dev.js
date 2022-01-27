"use strict";

var display = document.getElementById("console__display");
var totalDisplay = document.getElementById("console__total");
var numbers = document.querySelectorAll(".btn__number");
var operators = document.querySelectorAll(".btn__operator");
var clear = document.getElementById("clear");
var allClear = document.getElementById("allClear");
var total = document.getElementById("total");
var firstNumber;
var secondNumber;
var equals;
var symbol;
numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    display.innerHTML += number.innerHTML;

    if (firstNumber) {
      secondNumber = display.innerHTML;
    } else {
      firstNumber = display.innerHTML;
    }
  });
});
operators.forEach(function (operator) {
  operator.addEventListener("click", function (event) {
    totalDisplay.innerHTML = firstNumber;
    totalDisplay.innerHTML += operator.innerHTML;
    console.log(operator.innerHTML);
    symbol = operator.innerHTML;
    display.innerHTML = " ";
  });
});
total.addEventListener("click", function (event) {
  secondNumber = display.innerHTML;
  console.log(secondNumber);

  if (symbol === "+") {
    equals = Number(firstNumber) + Number(secondNumber);
    display.innerHTML = "".concat(firstNumber, " ").concat(symbol, " ").concat(secondNumber);
    totalDisplay.innerHTML = equals;
  } else if (symbol === "-") {
    equals = Number(firstNumber) - Number(secondNumber);
    display.innerHTML = "".concat(firstNumber, " ").concat(symbol, " ").concat(secondNumber);
    totalDisplay.innerHTML = equals;
  } else if (symbol === "*") {
    equals = Number(firstNumber) * Number(secondNumber);
    display.innerHTML = "".concat(firstNumber, " ").concat(symbol, " ").concat(secondNumber);
    totalDisplay.innerHTML = equals;
  } else if (symbol === "/") {
    equals = Number(firstNumber) / Number(secondNumber);
    display.innerHTML = "".concat(firstNumber, " ").concat(symbol, " ").concat(secondNumber);
    totalDisplay.innerHTML = equals;
  }
});
clear.addEventListener("click", function (event) {
  display.innerHTML = " ";
  firstNumber = "";
  secondNumber = "";
  symbol = "";
  totalDisplay.innerHTML = "";
});