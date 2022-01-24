"use strict";

var display = document.getElementById("console__display");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var zero = document.getElementById("0");
one.addEventListener("click", function (event) {
  display.innerHTML += 1;
});
two.addEventListener("click", function (event) {
  display.innerHTML += 2;
});
three.addEventListener("click", function (event) {
  display.innerHTML += 3;
});
four.addEventListener("click", function (event) {
  display.innerHTML += 4;
});
five.addEventListener("click", function (event) {
  display.innerHTML += 5;
});
six.addEventListener("click", function (event) {
  display.innerHTML += 6;
});
seven.addEventListener("click", function (event) {
  display.innerHTML += 7;
});
eight.addEventListener("click", function (event) {
  display.innerHTML += 8;
});
nine.addEventListener("click", function (event) {
  display.innerHTML += 9;
});
zero.addEventListener("click", function (event) {
  display.innerHTML += 0;
});