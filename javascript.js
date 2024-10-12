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

let firstNum;
let secondNum;
let operation;

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