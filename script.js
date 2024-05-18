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
                displayValue += '0';
                break;
            case 'one':
                display.textContent += '1';
                displayValue += '1';
                console.log(displayValue)
                break;
            case 'two':
                display.textContent += '2';
                displayValue += '2';
                console.log('this is two')
                break;
            case 'thr':
                display.textContent += '3';
                displayValue += '3';
                console.log('this is three')
                break;
            case 'fou':
                display.textContent += '4';
                displayValue += '4';
                console.log('this is four')
                break;
            case 'fiv':
                display.textContent += '5';
                displayValue += '5';
                console.log('this is five')
                break;
            case 'six':
                display.textContent += '6';
                displayValue += '6';
                console.log('this is six')
                break;
            case 'sev':
                display.textContent += '7';
                displayValue += '7';
                console.log('this is seven')
                break;
            case 'eig':
                display.textContent += '8';
                displayValue += '8';
                console.log('this is eight')
                break;
            case 'nin':
                display.textContent += '9';
                displayValue += '9';
                console.log('this is nine')
                break;
            
            // operators
            case 'plu':
                // if firstNum and operator exists and this is clicked,
                // then add the firstNum and secondNum already
                if ((firstNum != 0) && (operator != '') ) {
                    // assign the displayed value to secondNum
                    // calculate
                    secondNum = parseInt(displayValue);
                    console.log(firstNum, operator,  secondNum)
                    let results = operate(firstNum, operator, secondNum);
                    display.textContent = results;
                    
                    // assign the results to firstNum for continuous calculation
                    // then reset to 0
                    firstNum = results;
                    displayValue = 0;
                    
                    display.textContent += '+';
                    operator = '+';
                    console.log("bulok")
                    break;
                } else {
                    display.textContent += '+';
                    operator = '+';

                    // on first click, assign the displayed value to firstNum
                    // then reset to 0
                    firstNum = parseInt(displayValue);
                    displayValue = 0;
                    console.log(operator)
                    break;
                }

            case 'min':
                // same comment as plus
                if ((firstNum != 0) && (operator != '') ) {
                    secondNum = parseInt(displayValue);
                    console.log(firstNum, operator,  secondNum)
                    let results = operate(firstNum, operator, secondNum);
                    display.textContent = results;

                    firstNum = results;
                    displayValue = 0;

                    display.textContent += '-';
                    operator = '-';
                    console.log("bulok")
                    break;
                } else {
                    display.textContent += '-';
                    operator = '-';
                    firstNum = parseInt(displayValue);
                    displayValue = 0;
                    // console.log('this is nine')
                    break;
                }

            case 'mul':
                //  same comment as plus
                if ((firstNum != 0) && (operator != '') ) {
                    secondNum = parseInt(displayValue);
                    console.log(firstNum, operator,  secondNum)
                    let results = operate(firstNum, operator, secondNum);
                    display.textContent = results;

                    firstNum = results;
                    displayValue = 0;

                    display.textContent += '*';
                    operator = '*';
                    console.log("bulok")
                    break;
                } else {
                    display.textContent += '*';
                    operator = '*';
                    firstNum = parseInt(displayValue);
                    displayValue = 0;
                    // console.log('this is nine')
                    break;
                }

            case 'div':
                // same comment as plus
                if ((firstNum != 0) && (operator != '') ) {
                    secondNum = parseInt(displayValue);
                    console.log(firstNum, operator,  secondNum)
                    let results = operate(firstNum, operator, secondNum);

                    // round off
                    results = Math.round(results * 100) / 100;
                    display.textContent = results;

                    firstNum = results;
                    displayValue = 0;

                    display.textContent += '/';
                    operator = '/';
                    console.log("bulok")
                    break;
                } else {
                    display.textContent += '/';
                    operator = '/';
                    firstNum = parseInt(displayValue);
                    displayValue = 0;
                    //console.log('this is nine')
                    break;
                }

            case 'equ':
                // assign the second displayvalue to second num
                // then calculate
                secondNum = parseInt(displayValue);
                let results = operate(firstNum, operator, secondNum);
                
                // show the text with  results
                // round off immediately regardless of operators
                results = Math.round(results * 100) / 100;
                display.textContent = results;

                // assign the next displayValue to results
                displayValue = results;
                firstNum = results;
                operator = '';
                secondNum = 0;
                break;
                
            case 'cle':
                // reset everything
                display.textContent = '';
                firstNum = 0;
                operator = '';
                secondNum = 0;
                displayValue = 0;
                break;
        }
    })
})


console.log(operate(3, '*', 5))