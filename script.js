const display = document.getElementById("#display")

let num1, num2, operator;


function updateDisplay(n) {
    document.getElementById("display").value = n;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}


function operate(x, y, operator) {
    switch (operator) {
        case "+":
            return x + y;
            break;
        case "-":
            return x - y;
            break;
        case "*":
            return x * y;
            break;
        case "/":
            return x / y;
            break;
    }
}