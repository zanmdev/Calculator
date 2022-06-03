const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals");



numberButtons.forEach(button => {
    button.addEventListener("click", () =>{
        updateDisplay(button.textContent);
    })
});

operatorButtons.forEach(op =>{
    op.addEventListener("click",() =>{
        setOperator(op.textContent);
    })
});

clearButton.addEventListener("click", clearDisplay);
equalButton.addEventListener("click", equals);

let displayNum ="";
let numbers = [];

let screenReset = false;
let mathOperator="";


function add (num1, num2){
    let result = Number(num1)+Number(num2);
    
    return result;
}

function subtract(num1,num2){
    let result = Number(num1)-Number(num2);
    
    return result;
}

function multiply(num1,num2){
    let result = Number(num1)*Number(num2);
    
    return result;
}

function divide(num1,num2){
    
    if(num2==0){
      return console.log(":^)");
    }
    let result = Number(num1)/Number(num2);
    
    return result;
}

function operate(equalsStack,operator){

    console.log(equalsStack);
    let num2 = equalsStack.pop();
    let num1 = equalsStack.pop();

    console.log(equalsStack);

    let result =0;

    if(operator =="+"){
       result = add(num1,num2);
    }else if(operator =="-"){
        result = subtract(num1,num2);
    }else if(operator =="*"){
        result = multiply(num1,num2);
    }else if(operator =="/"){
        result =divide(num1,num2);
    }
    updateDisplay(result);
    screenReset = true;
    operator = "";
    console.log(numbers);
    return result;
}

function updateDisplay(number){
    if(screenReset){
        display.textContent = number;
        screenReset = false;
    }else{
        displayNum += number
        display.textContent = displayNum;
    }
}

function setOperator(operator){
    displayNum = display.textContent;
    numbers.push(displayNum);
    screenReset = true;
    if(isOperateble()){
        numbers.push(operate(numbers,mathOperator));
        
    }

    mathOperator = operator;

}



function equals(){
    if(mathOperator !=""){ 
    displayNum = display.textContent;
    numbers.push(displayNum);
    screenReset = true;
    if(isOperateble()){
        operate(numbers,mathOperator);

    }
    mathOperator = "";
}
}



function isOperateble(){   

    return numbers.length == 2 && mathOperator != "";
}




function clearDisplay(){
    
    display.textContent="0";
    displayNum="";
}