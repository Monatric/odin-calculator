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

// attempt 1
let display = document.querySelector('.display');

let calcBtnsZer = document.querySelector('.zer');
let calcBtnsOne = document.querySelector('.one');
let calcBtnsTwo = document.querySelector('.two');
let calcBtnsThr = document.querySelector('.thr');
let calcBtnsFou = document.querySelector('.fou');
let calcBtnsFiv = document.querySelector('.fiv');
let calcBtnsSix = document.querySelector('.six');
let calcBtnsSev = document.querySelector('.sev');
let calcBtnsEig = document.querySelector('.eig');
let calcBtnsNin = document.querySelector('.nin');


let calcBtnsPlu = document.querySelector('.plu');
let calcBtnsMin = document.querySelector('.min');
let calcBtnsMul = document.querySelector('.mul');
let calcBtnsDiv = document.querySelector('.div');
let calcBtnsEqu = document.querySelector('.equ');
let calcBtnsCle = document.querySelector('.cle');

// not sure if this works so test
let displayValue = 0;
// let operatorValue = '';

console.log(calcBtnsEqu)
// let calcBtnsContent = calcBtns.textContent;


//different attempt 2
// let calcBtns = document.querySelector('');
// let calcBtnsContent = calcBtns.textContent;
// let display = document.querySelector('.display');
// // if (calcBtns === '7') {
// //     console.log('works')
// // }

// calcBtns.addEventListener('click', () => {
    
//     switch (calcBtnsContent) {
//         case '7':
//             display.textContent += '7';
//             console.log('7')
//             break;
//         case '8':
//             display.textContent = '8';
//             console.log('8')
//             break;
//     }
// })

//console.log(calcBtns)


console.log(operate(3, '*', 5))