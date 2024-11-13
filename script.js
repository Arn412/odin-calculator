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

function solve() {
    num2 = parseInt(curNum)
    ans = operate(num1, num2, operator)
    updateDisplay(ans)

}
//i had functions for each operation but i didn't wanna use them because it was more convenient to hardcode 
//and it takes up less space :D
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