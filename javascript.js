const digits = document.querySelector("#digits");

for (let i = 0; i < 10; i++) {
    let digit = document.createElement("button", `class = ${i}`);
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
const digitButtons = document.querySelectorAll("#digits button");
const display = document.querySelector("#display");

let firstNum;
let secondNum;
let operation;
let displayVal = '0';

display.textContent = displayVal;

digitButtons.forEach(button => button.addEventListener('click', () => {
    display.textContent == '0' ? displayVal = button.textContent : displayVal += button.textContent; 
    display.textContent = displayVal;
}));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => display.textContent = '0');

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    firstNum = parseInt(display.textContent);
    display.textContent = '0';
    operation = button.id;
  })  
});

const equalButton = document.querySelector("#equals");

equalButton.addEventListener('click', () => {
    secondNum = parseInt(display.textContent);
    display.textContent = operate(firstNum, secondNum, operation);
})