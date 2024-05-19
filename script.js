// start initializing the three main  parameters
// functions for operations
let firstNum = '';
let secondNum = '';
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

// call the buttons and calculator display
let btnRows = document.querySelectorAll('.btn-row');
let display = document.querySelector('.display');
let displayValue = 0;

// delegate events
btnRows.forEach((row) => {
    row.addEventListener('click', (event) => {
        // set the default style for texts
        display.style.color = '#fff';
        display.style.fontSize = '3rem';

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
                break;
            case 'two':
                display.textContent += '2';
                displayValue += '2';
                break;
            case 'thr':
                display.textContent += '3';
                displayValue += '3';
                break;
            case 'fou':
                display.textContent += '4';
                displayValue += '4';
                break;
            case 'fiv':
                display.textContent += '5';
                displayValue += '5';
                break;
            case 'six':
                display.textContent += '6';
                displayValue += '6';
                break;
            case 'sev':
                display.textContent += '7';
                displayValue += '7';
                break;
            case 'eig':
                display.textContent += '8';
                displayValue += '8';
                break;
            case 'nin':
                display.textContent += '9';
                displayValue += '9';
                break;
            
            // operators
            case 'plu':
                // if firstNum and operator exists and this is clicked,
                // then add the firstNum and secondNum already
                if ((firstNum != 0) && (operator != '') ) {
                    // assign the displayed value to secondNum
                    // calculate
                    secondNum = parseInt(displayValue);
                    let results = operate(firstNum, operator, secondNum);
                    display.textContent = results;
                    
                    // assign the results to firstNum for continuous calculation
                    // then reset to 0
                    firstNum = results;
                    displayValue = 0;
                    
                    display.textContent += '+';
                    operator = '+';
                    break;

                } else {
                    display.textContent += '+';
                    operator = '+';

                    // on first click, assign the displayed value to firstNum
                    // then reset to 0
                    firstNum = parseInt(displayValue);
                    displayValue = 0;
                    break;
                }

            case 'min':
                // same comment as plus
                if ((firstNum != 0) && (operator != '') ) {
                    secondNum = parseInt(displayValue);
                    let results = operate(firstNum, operator, secondNum);
                    display.textContent = results;

                    firstNum = results;
                    displayValue = 0;

                    display.textContent += '-';
                    operator = '-';
                    break;

                } else {
                    display.textContent += '-';
                    operator = '-';
                    firstNum = parseInt(displayValue);
                    displayValue = 0;
                    break;
                }

            case 'mul':
                //  same comment as plus
                if ((firstNum != 0) && (operator != '') ) {
                    secondNum = parseInt(displayValue);
                    let results = operate(firstNum, operator, secondNum);
                    display.textContent = results;

                    firstNum = results;
                    displayValue = 0;

                    display.textContent += '*';
                    operator = '*';
                    break;

                } else {
                    display.textContent += '*';
                    operator = '*';
                    firstNum = parseInt(displayValue);
                    displayValue = 0;
                    break;
                }

            case 'div':
                // same comment as plus
                if ((firstNum != 0) && (operator != '') ) {
                    secondNum = parseInt(displayValue);
                    let results = operate(firstNum, operator, secondNum);

                    // round off
                    results = Math.round(results * 100) / 100;
                    display.textContent = results;

                    firstNum = results;
                    displayValue = 0;

                    display.textContent += '/';
                    operator = '/';
                    break;

                } else {
                    display.textContent += '/';
                    operator = '/';
                    firstNum = parseInt(displayValue);
                    displayValue = 0;
                    break;
                }

            case 'equ':
                // assign the second displayvalue to second num
                // then calculate
                secondNum = parseInt(displayValue);
                let results = operate(firstNum, operator, secondNum);

                // in case they divide to zero
                if (results == 'Infinity') {
                    display.textContent = 'lol'
                    break;
                } else if (secondNum == '' || operator == '') {
                    break;
                }

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