const digits = document.querySelector("#digits");

for (let i = 0; i < 10; i++) {
    let digit = document.createElement("button");
    digit.setAttribute("class", "digit");
    digit.textContent = i;
    digits.appendChild(digit);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(first, second, operator) {
    switch (operator) {
        case "add":
            return add(first, second);
            break;
        case "subtract":
            return subtract(first, second);
            break;
        case "multiply":
            return multiply(first, second);
            break;
        case "divide":
            return divide(first, second);
            break;
    }
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const digitButtons = document.querySelectorAll(".digit");
const display = document.querySelector("#display");

let firstNum;
let secondNum;
let operation = '';
display.textContent = '0';
let retain = true;

digitButtons.forEach(button => button.addEventListener('click', () => {
    display.textContent == '0' || retain == false ? display.textContent = button.textContent : display.textContent += button.textContent;
    retain = true;
}));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = '0';
    operation = '';
    firstNum = 0;
    secondNum = 0;
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (operation != '') {evaluate()}
    firstNum = parseInt(display.textContent);
    retain = false;
    operation = button.id;
  })  
});

const equalButton = document.querySelector("#equals");

equalButton.addEventListener('click', () => {
    if (operation != '') {evaluate()}
})

function evaluate() {
    secondNum = parseInt(display.textContent);
    operation == 'divide' && secondNum == 0 ? display.textContent = "Error!" : display.textContent = round(operate(firstNum, secondNum, operation), 6);
    operation = '';
    retain = false;
}

