**STEP 2**
"A  calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later."

create global variables for first number, operator, and second number
let firstNum = 0
let secondNum = 0 // starts at 0 so JS knows it is int
let operator = '' // because it should take +-*/ but i believe it will be taken as strings

**STEP 3**
"Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers."

function operate takes firstNum, secondNum, and operator as parameters
if operator is +
    return add(firstNum, secondNum)
else operator is -
    return subtract(firstNum, secondNum)
else operatir is *
    return multiply(firstNum, secondNum)
else operator is /
    return divide(firstNum, secondNum)

**STEP 4**
"Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
- Do not worry about wiring up the JS just yet.
- There should also be a display for the calculator. Go ahead and fill it with some dummy numbers - so it looks correct.
- Add a “clear” button."

**STEP 5**
"Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step."

start by changing the classes of btn tags in html to texts instead of actual numbers
document query select display
add a global variable that stores a 'display value', set it to 0?
add a global variable that stores the operator, set it to ''?
document query select every single one of them and store in a variable
each variable will have a click event listener based on the number or operator it provides
    in each listener, it will display the selected number or operator
    if it's a number, store it in the displayValue variable
        add innerhtml to display variable
    if it's an operator, store it in the displayOperator variable
        add innerhtml to display variable

*different attempt 2*
document query select calcBtns the btn tags and get the textcontent
document query select display
add a global variable that stores a 'display value', set it to 0?
add a global variable that stores the operator, set it to ''?
add event listener on calcBtns and display the value
    if textContent is a number, store it in the displayValue variable
        add innerhtml to display variable
    if textContent is an operator, store it in the displayOperator variable
        add innerhtml to display variable
    

**STEP 6**
    now that the numbers/operators can populate the display

    store nums in the displayValue as string
    if an operator is clicked, store it in the operator variable
        then store the displayValue inside firstNum
        parseInt 
        put displayValue to 0
        put operator in operator variable
    store nums again in the displayValue as string
        when equals is clicked, store the displayValue inside secondNum 
        parseInt 
        put displayValue to 0 
        use operate(firstNum, operator, secondNum)
        display.textContent the result of operation

// new add since months
if last click ang operators, then disable lahat ng operators

**Your calculator should not evaluate more than a single pair of numbers at a time**
kung may laman na ang firstnum, operator, at secondnum, pero di pa napindot ang equals,
