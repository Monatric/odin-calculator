let firstNum = 0;
let secondNum = 0;
let operator = '';

function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    return operand1 / operand2;
}

function operate(firstNum, operator, secondNum) {
    if (operator === '+') {
        return add(firstNum, secondNum)
    } else if (operator === '-') {
        return subtract(firstNum, secondNum)
    } else if (operator === '*') {
        return multiply(firstNum, secondNum)
    } else if (operator === '/') {
        return divide(firstNum, secondNum)
    }
}

// console.log(add(2, 1))
// console.log(subtract(1, 2))
// console.log(multiply(2, 1))
// console.log(divide(2, 8))
console.log(operate(3, '*', 5))