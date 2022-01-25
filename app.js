let display = document.getElementById("console__display");
const numbers = document.querySelectorAll(".btn__number");
const operators = document.querySelectorAll(".btn__operator")
// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");
// const zero = document.getElementById("0");
const clear = document.getElementById("clear");
let firstNumber = (0);

// for (let i=0; i<numbers.length; i++) {
//     numbers[i].addEventListener("click", (event) => {
//         display.innerHTML += numbers[i].innerHTML;
//     })
// }

numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        display.innerHTML += number.innerHTML;
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        firstNumber = display
        display.innerHTML += operator.innerHTML;
    })
})



// one.addEventListener("click", (event) => {
//     display.innerHTML += 1;
// })

// two.addEventListener("click", (event) => {
//     display.innerHTML += 2;
// })

// three.addEventListener("click", (event) => {
//     display.innerHTML += 3;
// })

// four.addEventListener("click", (event) => {
//     display.innerHTML += 4;
// })

// five.addEventListener("click", (event) => {
//     display.innerHTML += 5;
// })

// six.addEventListener("click", (event) => {
//     display.innerHTML += 6;
// })

// seven.addEventListener("click", (event) => {
//     display.innerHTML += 7;
// })

// eight.addEventListener("click", (event) => {
//     display.innerHTML += 8;
// })

// nine.addEventListener("click", (event) => {
//     display.innerHTML += 9;
// })

// zero.addEventListener("click", (event) => {
//     display.innerHTML += 0;
// })

// clear.addEventListener("click", (event) => {
//     display.innerHTML = " ";
// })

clear.addEventListener("click", (event) => {
    display.innerHTML = " ";
})