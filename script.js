const display = document.getElementById("#display")

let num1, num2, operator, curNum = "", second = false;

function appendNum(n) {
    curNum += n
    if (second) {
        updateDisplay(num1 + operator + curNum)
    }
    else {
        updateDisplay(curNum)
    }
}

function updateDisplay(n) {
    document.getElementById("display").value = n;
}

function clearDisplay() {
    num1 = ""
    num2 = ""
    operator = ""
    curNum = ""
    second = false
    document.getElementById("display").value = "";
}

function setOperator(o) {
    switch (o) {
        case "add":
            operator = "+"
            break;
        case "sub":
            operator = "-";
            break;
        case "mult":
            operator = "*";
            break;
        case "div":
            operator = "/";
            break;
    }
    console.log(operator)
    num1 = parseInt(curNum);
    curNum = "";
    second = true;
    updateDisplay(num1 + operator)

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