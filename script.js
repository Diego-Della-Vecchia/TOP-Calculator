const operation = document.querySelector(".operation");
const result = document.querySelector(".result");
const screen = document.querySelector(".screen");

let currentCalculation = [];

let currentValue = null;

let parenthesis = false;

let temporary;

let temporaryArray;

function updateArray(value) {
   
    if (currentValue === null);

    else if (value === "delete"){
        currentCalculation.push(currentValue)
        currentValue = null;
    }
    else {
    
        currentCalculation.push(currentValue)
        currentValue = null;
    }

    if (value === "delete") {

        temporary = currentCalculation[currentCalculation.length - 1];

        if (temporary === ")") {
            currentCalculation.pop();
            parenthesis = true;
        }

        else if (temporary === "(") {
            currentCalculation.pop();
            parenthesis = false;
        }
        else {
            currentCalculation.pop();

            temporaryArray = temporary.split("");

            temporaryArray.pop();

            if (temporaryArray.length === 0) {

            }
            else {
            temporary = temporaryArray.join("");

            currentCalculation.push(temporary);
            }
        }
        }
    

    

    if (currentCalculation.length === 0 && value != "()"){} 
    else if (currentCalculation[currentCalculation.length-1] === "²" && value === "²"){}
    else if ( value != "()" &&(
        currentCalculation[currentCalculation.length-1] === "+" ||
        currentCalculation[currentCalculation.length-1] === "-" ||
        currentCalculation[currentCalculation.length-1] === "%" ||
        currentCalculation[currentCalculation.length-1] === "(" ||
        currentCalculation[currentCalculation.length-1] === "/" ||
        currentCalculation[currentCalculation.length-1] === "*")){}
    
    else if (value === "()" && (currentCalculation[currentCalculation.length-1] === "(" || currentCalculation[currentCalculation.length-1] === ")")){} 
        else {
            
            if (value === "delete") {
            }

            else {
                if (value === "()") {
                    if (parenthesis === false) {
                        value = "(";
                        parenthesis = true;
                    }       
                 else {
                value = ")";
                    parenthesis = false;
                }
                }
            currentCalculation.push(value);
            }
        }
        updateScreen(currentCalculation.join(""));
        scrollRight()
    } 



function updateValue(number) {
    if (currentValue === null && number === ".") {
        currentValue = "";
    }
    else if (currentValue == "" && number === ".") {}
    else if (currentValue === null || currentValue === "") currentValue = number;
    else {
        if (currentValue.includes(".") && number === ".") {}
    else currentValue += number;
    }
    currentCalculation.push(currentValue);
    updateScreen(currentCalculation.join(""));
    currentCalculation.pop();
    scrollRight()
    
    }




function updateScreen(value) {
    operation.innerText = value;
    result.innerText = calculate(currentCalculation);

}
function clearScreen() {
    currentCalculation = [];
    currentValue = null;
    parenthesis = false;
    updateScreen("");
}

let parenthesisPresent = null;

let parenthesisClosed = false;

function calculate (arr) {
    
    if (arr.includes("(")) parenthesisPresent = true;
    console.log
    if (arr.includes(")")) parenthesisClosed = true;

    arr = [...arr];

    if (arr.length == 0) return "";
    if (arr.length == 1) return arr[0];
    if (arr.length == 2 && arr[0] == "(") return arr[1];
    if (
    arr[arr.length-1] === "+" ||
    arr[arr.length-1] === "-" ||
    arr[arr.length-1] === "(" ||
    arr[arr.length-1] === "%" ||
    arr[arr.length-1] === "/" ||
    arr[arr.length-1] === "*"){
        
        arr.pop();
        
    }
    
    if (
        arr[arr.length-1] === "+" ||
        arr[arr.length-1] === "-" ||
        arr[arr.length-1] === "(" ||
        arr[arr.length-1] === "%" ||
        arr[arr.length-1] === "/" ||
        arr[arr.length-1] === "*"){
            
            arr.pop();
            
        }

    let result;
    let openingParenthesis;
    let closingParenthesis;
    if (parenthesisPresent){
    for(let i = 0; i < arr.length; i++) {
        
        if (arr[i] === "(") {
            if (parenthesisClosed){
            for (let j = i; j < arr.length; j++){
                if (arr[j] === ")") {                
                    closingParenthesis = j;
                   
                    break;
                }
                
            }
        }
        else closingParenthesis = arr.length;

            openingParenthesis = i;

            if (parenthesisPresent) delete arr[openingParenthesis]
            
            if (parenthesisClosed)delete arr[closingParenthesis]
            
            console.log(arr)
            

           
            i++
            for (;i < closingParenthesis; i++){
                if (arr[i] === "*"){
                    arr[i] = arr[closestNumberDown(arr, i)] * arr[closestNumberUp(arr, i)]
                    delete(arr[closestNumberDown(arr, i)])
                    delete(arr[closestNumberUp(arr, i)])
                    }
                    else if (arr[i] === "/"){
                        arr[i] = arr[closestNumberDown(arr, i)] / arr[closestNumberUp(arr, i)]
                        delete(arr[closestNumberDown(arr, i)])
                        delete(arr[closestNumberUp(arr, i)])
                        }
                    else if (arr[i] === "%"){
                        arr[i] = arr[closestNumberDown(arr, i)] /100 * arr[closestNumberUp(arr, i)]
                        delete(arr[closestNumberDown(arr, i)])
                        delete(arr[closestNumberUp(arr, i)])
                        }
                    else if (arr[i] === "²"){
                        arr[i] = arr[closestNumberDown(arr, i)] * arr[closestNumberDown(arr, i)]
                        delete(arr[closestNumberDown(arr, i)])
                    }
                    }
        
                    for (let b = openingParenthesis +1; b < closingParenthesis; b++){
                        if (arr[b] === "+"){
                            arr[b] = parseInt(arr[closestNumberDown(arr, b)]) + parseInt(arr[closestNumberUp(arr, b)])
                            delete(arr[closestNumberDown(arr, b)])
                            delete(arr[closestNumberUp(arr, b)])
                        }
                        else if (arr[b] === "-"){
                            arr[b] = arr[closestNumberDown(arr, b)] - arr[closestNumberUp(arr, b)]
                            delete(arr[closestNumberDown(arr, b)])
                            delete(arr[closestNumberUp(arr, b)])
                            
                        }
                    }

                    if (openingParenthesis!=0 && !(arr[openingParenthesis-1] === "*" || arr[openingParenthesis-1] === "/" || arr[openingParenthesis-1] === "+" || arr[openingParenthesis-1] === "-" || arr[openingParenthesis-1] === "%")) {
                        arr[openingParenthesis] = "*"
                    }
                    
                    if (!(arr[closingParenthesis+1] === "*" || arr[closingParenthesis+1] === "/" || arr[closingParenthesis+1] === "+" || arr[closingParenthesis+1] === "-" || arr[closingParenthesis+1] === "%" || arr[closingParenthesis+1] === undefined)) {
                        arr[closingParenthesis] = "*"
                    }
                    
        }
        }
        }
        for (let y = 0; y < arr.length; y++){
          
        if (arr[y] === "*"){
            arr[y] = arr[closestNumberDown(arr, y)] * arr[closestNumberUp(arr, y)]
            delete(arr[closestNumberDown(arr, y)])
            delete(arr[closestNumberUp(arr, y)])
            }
            else if (arr[y] === "/"){
                arr[y] = arr[closestNumberDown(arr, y)] / arr[closestNumberUp(arr, y)]
                delete(arr[closestNumberDown(arr, y)])
                delete(arr[closestNumberUp(arr, y)])
                }
            else if (arr[y] === "%"){
                arr[y] = arr[closestNumberDown(arr, y)] /100 * arr[closestNumberUp(arr, y)]
                delete(arr[closestNumberDown(arr, y)])
                delete(arr[closestNumberUp(arr, y)])
                }
                else if (arr[y] === "²"){
                    arr[y] = arr[closestNumberDown(arr, y)] * arr[closestNumberDown(arr, y)]
                    delete(arr[closestNumberDown(arr, y)])
                }
            }

            for (let b = 0; b < arr.length; b++){
            if (arr[b] === "+"){
                    arr[b] = parseInt(arr[closestNumberDown(arr, b)]) + parseInt(arr[closestNumberUp(arr, b)])
                    delete(arr[closestNumberDown(arr, b)])
                    delete(arr[closestNumberUp(arr, b)])
                }
            else if (arr[b] === "-"){
                    arr[b] = arr[closestNumberDown(arr, b)] - arr[closestNumberUp(arr, b)]
                    delete(arr[closestNumberDown(arr, b)])
                    delete(arr[closestNumberUp(arr, b)])
                }
        }
    
        for (let a = 0; a < arr.length; a++){
            if (arr[a] != undefined){
               result = arr[a];
            }
            
        }
        if (isNaN(result)) {
            result = "Error";
        }
        console.log(arr)
        return result;
    }
        
function closestNumberDown(array, index){
    index--;
    for(; index >= 0; index--){
        if (array[index] === undefined){

        }
        else return index
    }
}

function closestNumberUp(array, index) {
    index++;
    for(; index <= array.length; index++){
        if (array[index] === undefined){

        }
        else  return index;
    }
}

let operationDone = false;

let allButtons = document.querySelectorAll("button");
let equals = document.querySelector(".equals");



allButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (operationDone === true && event.target != equals) {
            operation.classList.toggle("operationDone");
            result.classList.toggle("resultDone");
            scrollRight()
            operationDone = false;  
        }
    });
});



function enter() {
    currentCalculation.push(currentValue)
    if( operationDone === false && currentCalculation.length  >= 3 && currentValue != null && currentValue != "" ){
        
        operation.classList.toggle("operationDone");
        result.classList.toggle("resultDone");
        operationDone = true
        scrollRight()
    }
    currentCalculation.pop();
    
}

function scrollRight() {
    operation.scrollLeft = operation.scrollWidth;
    
}


addEventListener("keydown", (key) => {
    if (key.key === "Enter") {
        enter();
    }
    if (key.key === "Backspace") {
        updateArray("delete");
    }
    if (key.key === "Escape") {
        clearScreen();
    }
    if (key.key === "1") {
        updateValue("1");
    }
    if (key.key === "2") {
        updateValue("2");
    }
    if (key.key === "3") {
        updateValue("3");
    }
    if (key.key === "4") {
        updateValue("4");
    }
    if (key.key === "5") {
        updateValue("5");
    }
    if (key.key === "6") {
        updateValue("6");
    }
    if (key.key === "7") {
        updateValue("7");
    }
    if (key.key === "8") {
        updateValue("8");
    }
    if (key.key === "9") {
        updateValue("9");
    }
    if (key.key === "0") {
        updateValue("0");
    }
    if (key.key === ".") {
        updateValue(".");
    }
    if (key.key === "+") {
        updateArray("+");
    }
    if (key.key === "-") {
        updateArray("-");
    }
    if (key.key === "*") {
        updateArray("*");
    }
    if (key.key === "/") {
        updateArray("/");
    }
    if (key.key === "%") {
        updateArray("%");
    }
    if (key.key === "(") {
        updateArray("()");
    }
    if (key.key === ")") {
        updateArray("()");
    }
    if (key.key === "=") {
        enter();
    }

});




