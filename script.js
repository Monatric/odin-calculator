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

// not sure if this works so test
// let operatorValue = '';

// let calcBtnsContent = calcBtns.textContent;


//different attempt 2
let btnRows = document.querySelectorAll('.btn-row');
let display = document.querySelector('.display');
let displayValue = 0;

btnRows.forEach((row) => {
    row.addEventListener('click', (event) => {
        let target = event.target;

        switch (target.id) {
            // 0-9
            case 'zer':
                display.textContent += '0';
                console.log('this is zero')
                break;
            case 'one':
                display.textContent += '1';
                console.log('this is one')
                break;
            case 'two':
                display.textContent += '2';
                console.log('this is two')
                break;
            case 'thr':
                display.textContent += '3';
                console.log('this is three')
                break;
            case 'fou':
                display.textContent += '4';
                console.log('this is four')
                break;
            case 'fiv':
                display.textContent += '5';
                console.log('this is five')
                break;
            case 'six':
                display.textContent += '6';
                console.log('this is six')
                break;
            case 'sev':
                display.textContent += '7';
                console.log('this is seven')
                break;
            case 'eig':
                display.textContent += '8';
                console.log('this is eight')
                break;
            case 'nin':
                display.textContent += '9';
                console.log('this is nine')
                break;
            
            // operators
            case 'plu':
                display.textContent += '+';
                console.log('this is nine')
                break;
            case 'min':
                display.textContent += '-';
                console.log('this is nine')
                break;
            case 'mul':
                display.textContent += '*';
                console.log('this is nine')
                break;
            case 'div':
                display.textContent += '/';
                console.log('this is nine')
                break;
            case 'equ':
                display.textContent += '=';
                console.log('this is nine')
                break;
            case 'cle':
                display.textContent = '';
                break;
        }
    })
})

// btnRows.addEventListener('click', (event) => {
//     let target = event.target;

//     switch (target.id) {
//         case 'sev':
//             console.log('this is seven')
//             break;
//         case 'eig':
//             console.log('this is eight')
//             break;
//         case 'fou':
//             console.log('this is four')
//     }
// })

console.log(btnRows)
// let calcBtnsContent = calcBtns.textContent;
// if (calcBtns === '7') {
//     console.log('works')
// }

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

// console.log(calcBtns)


console.log(operate(3, '*', 5))