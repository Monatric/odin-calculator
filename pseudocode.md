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