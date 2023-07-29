let currentOparation = null;
let firstnumber = '';
let lastnumber= '';
let shouldresetscreen = false;


const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[operatorbtn]")
const equalbtn = document.getElementById('equalbtn');
const clearbtn = document.getElementById('clearbtn');
const currentDisplay = document.getElementById('display-current');
const lastDisplay = document.getElementById('display-last');

clearbtn.addEventListener('click', clearDisplay);
equalbtn.addEventListener('click', evaluate);



numberButtons.forEach((button) =>
button.addEventListener('click',() => appendNumber(button.textContent)))

operatorButtons.forEach((button) => 
button.addEventListener('click', () => setOperator(button.textContent)))



function clearDisplay(){
    currentDisplay.textContent = '';
    lastDisplay.textContent = '';
    firstnumber = '';
    lastnumber = ''
    currentOparation = null;
    shouldresetscreen = false;
}


function appendNumber(number){
    if(currentDisplay.textContent === '0' || shouldresetscreen) resetScreen()
    currentDisplay.textContent += number;

}

function resetScreen(){
    currentDisplay.textContent = ''
    shouldresetscreen = false;
}

function setOperator(operator){
    if(currentOparation !== null) evaluate()
    firstnumber = currentDisplay.textContent;
    currentOparation = operator;
    lastDisplay.textContent = `${firstnumber} ${currentOparation} `
    shouldresetscreen = true
}

function evaluate(){
    if(currentOparation === null || shouldresetscreen) return
    if(currentOparation === '÷' && currentDisplay.textContent === '0'){
        alert("YOU CANT DIVIDE BY 0!!!!!")
        return
    }

    lastnumber = currentDisplay.textContent;
    currentDisplay.textContent = operate(currentOparation, firstnumber, lastnumber)
    lastDisplay.textContent = `${firstnumber} ${currentOparation} ${lastnumber} `

    currentOparation = null;
}



//math functions
function add(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}


function operate(operator, a ,b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case "+":
            return add(a,b)
        case "-":
            return substract(a,b)
        case "x":
            return multiply(a,b)
        case "÷":
            return divide(a,b)
        default:
            return null  
    }
}