const operation = document.querySelector(".operation");
const result = document.querySelector(".result");
const screen = document.querySelector(".screen");

let currentCalculation = [];

let currentValue = null;

let parenthesis = false;

let temporary;

let squareRoot = false;

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
        else if (temporary === undefined){
            return;
        }
        else {
            currentCalculation.pop();

            temporaryArray = temporary.split("");

            if (temporaryArray.includes("√")) temporaryArray.pop();
            temporaryArray.pop();

            if (temporaryArray.length === 0) {

            }
            else {
            temporary = temporaryArray.join("");

            currentCalculation.push(temporary);
            }
        }
        }
    

    

    if (currentCalculation.length === 0 && (value != "()" && value != "√")){} 
    else if (currentCalculation[currentCalculation.length-1] === "²" && (value === "²")){}
    else if ( (value != "()" && value !="√") &&(
        currentCalculation[currentCalculation.length-1] === "+" ||
        currentCalculation[currentCalculation.length-1] === "-" ||
        currentCalculation[currentCalculation.length-1] === "%" ||
        currentCalculation[currentCalculation.length-1] === "(" ||
        currentCalculation[currentCalculation.length-1] === "/" ||
        currentCalculation[currentCalculation.length-1] === "*")){}
    
    else if (value === "()" && (currentCalculation[currentCalculation.length-1] === "(" || currentCalculation[currentCalculation.length-1] === ")")){} 
    else if ((value === "√" || value=="()")&& (currentCalculation[currentCalculation.length-1] === "√(" || currentCalculation[currentCalculation.length-1] === ")")){}
        else {
            
            if (value === "delete") {
            }

            else if (value == "()"){
                    if (parenthesis === false) {
                        value = "(";
                        parenthesis = true;
                        squareRoot = true;
                    }       
                 else {
                value = ")";        
                    parenthesis = false;
                    squareRoot = false;
                }
            
                if (
                    currentCalculation[currentCalculation.length-1] === "+" ||
                    currentCalculation[currentCalculation.length-1] === "-" ||
                    currentCalculation[currentCalculation.length-1] === "%" ||
                    currentCalculation[currentCalculation.length-1] === "/" ||
                    currentCalculation[currentCalculation.length-1] === "*"){ currentCalculation.pop();}
                    currentCalculation.push(value);
            }
            else if (value === "√"){
                if (squareRoot === false) {
                    squareRoot = true;
                    parenthesis = true;
                    currentCalculation.push(value +"(");
                }
                else if (squareRoot === true && parenthesis && true && currentCalculation[currentCalculation.length-1] === "(") {

                }
                else if (squareRoot === true) {
                    value = ")";
                    parenthesis = false;
                    squareRoot = false;
                    if (
                    currentCalculation[currentCalculation.length-1] === "+" ||
                    currentCalculation[currentCalculation.length-1] === "-" ||
                    currentCalculation[currentCalculation.length-1] === "%" ||
                    currentCalculation[currentCalculation.length-1] === "/" ||
                    currentCalculation[currentCalculation.length-1] === "*"){currentCalculation.pop();}
                    else currentCalculation.push(value);
                }
                
                
                
            }
            else currentCalculation.push(value);
        }
        updateScreen(currentCalculation.join(""));
        scrollRight()
    } 



function updateValue(number) {
    if (currentValue === null && number === ".") {
        currentValue = "";
    }
    else if (currentCalculation[currentCalculation.length-1] === "²"){}
    else if (currentValue !== null && number === "-") {}
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


/* this function iterates through the currentCalculation array and searches for operators in PEMDAS order,
 if it finds one, it finds the numpers closest to it and performs the operation, then deletes the numbers 
 and the operator and replaces the operator with the result of the operation. It then repeats the process 
 until there are no more operators in the array. It then returns the result of the calculation.*/

function updateScreen(value) {
    operation.innerText = value;
    result.innerText = calculate(currentCalculation);

}
function clearScreen() {
    currentCalculation = [];
    currentValue = null;
    parenthesis = false;
    squareRoot = false;
    updateScreen("");
}

let parenthesisPresent = false;

let parenthesisClosed = false;

let squareRootPresent = false;

let openingParenthesis;

let closingParenthesis;

let openingSquareRoot;

function calculate (arr) {

    let result;

    if (arr.includes("(")) parenthesisPresent = true;

    if (arr.includes(")")) parenthesisClosed = true;
    if (arr.includes("√(")) squareRootPresent = true;

    arr = [...arr];

    if (arr.length == 0) return "";
    if (arr.length == 1) return arr[0];
    if (arr.length == 2 && arr[0] == "(") return arr[1];
    if (
    arr[arr.length-1] === "+" ||
    arr[arr.length-1] === "-" ||
    arr[arr.length-1] === "(" ||
    arr[arr.length-1] === "√(" ||
    arr[arr.length-1] === "%" ||
    arr[arr.length-1] === "/" ||
    arr[arr.length-1] === "*"){
        
        arr.pop();
        
    }
    
    if (
        arr[arr.length-1] === "+" ||
        arr[arr.length-1] === "-" ||
        arr[arr.length-1] === "(" ||
        arr[arr.length-1] === "√(" ||
        arr[arr.length-1] === "%" ||
        arr[arr.length-1] === "/" ||
        arr[arr.length-1] === "*"){
            
            arr.pop();
            
        }

   
    if (parenthesisPresent || squareRootPresent) {
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
        if(squareRootPresent){

            if (arr[i] === "√(") {
                if (parenthesisClosed){
                for (let j = i; j < arr.length; j++){
                    if (arr[j] === ")") {                
                        closingParenthesis = j;
                       
                        break;
                    }
                    
                }
            }
            else closingParenthesis = arr.length;
            
                openingSquareRoot = i;
            
                if (squareRootPresent) delete arr[openingSquareRoot]
                
                if (parenthesisClosed)delete arr[closingParenthesis]
                
               
                
            
               
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
            
                        for (let b = openingSquareRoot +1; b < closingParenthesis; b++){
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

                        for (let i = openingSquareRoot; i < closingParenthesis; i++){
                            if (arr[i] === undefined){}
                            else arr[i] = Math.sqrt(arr[i])
                        }
            
                        if (openingSquareRoot!=0 && !(arr[openingSquareRoot-1] === "*" || arr[openingSquareRoot-1] === "/" || arr[openingSquareRoot-1] === "+" || arr[openingSquareRoot-1] === "-" || arr[openingSquareRoot-1] === "%")) {
                            arr[openingSquareRoot] = "*"
                        }
                        
                        if (!(arr[closingParenthesis+1] === "*" || arr[closingParenthesis+1] === "/" || arr[closingParenthesis+1] === "+" || arr[closingParenthesis+1] === "-" || arr[closingParenthesis+1] === "%" || arr[closingParenthesis+1] === undefined)) {
                            arr[closingParenthesis] = "*"
                        }
                        
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
    parenthesisPresent = false;

    parenthesisClosed = false;

    if (roundValue == null) {
        result = Math.round(result);
    }
    else if (roundValue == 0) {}
    else {
        result = Math.round(result * roundValue) / roundValue;
    }
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
    if (currentValue !== null && currentValue !== "") { currentCalculation.push(currentValue)}
   
    
    if( operationDone === false && currentCalculation.length  >= 3 ){
        
        operation.classList.toggle("operationDone");
        result.classList.toggle("resultDone");
        operationDone = true
        scrollRight()
    }
    
    
}

function scrollRight() {
    operation.scrollLeft = operation.scrollWidth;
    
}


addEventListener("keydown", (key) => {
    if (!userTyping){
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
    if (key.key === "r") {
        updateArray("√");
    
    }
    }
});

let round = document.querySelector(".wrapper");

let roundButton = document.querySelector(".round");

let roundTo = document.createElement("input")

roundTo.setAttribute("type", "number");

let counter = 0;

roundTo.defaultValue = 0;

roundTo.min = 0;

let roundValue = 0;

let userTyping = false ;


roundButton.addEventListener("click", () => {
    if (counter == 1){
        round.removeChild(roundTo)
        roundButton.innerText = "Dont round";
        counter = 0;
        roundButton.style.fontSize = "22px";
        roundValue = 0;
        if (currentValue === null) {}
        else currentCalculation.push(currentValue);
        updateScreen(currentCalculation.join(""));
        if (currentValue === null) {}
        else currentCalculation.pop();
    }
    else{
    roundButton.innerText = "Round to x decimals";
    round.appendChild(roundTo);
    counter = 1;
    roundButton.style.fontSize = "15px";
    roundTo.value = 0;
    roundValue = null;
    if (currentValue === null) {}
    else currentCalculation.push(currentValue);
    updateScreen(currentCalculation.join(""));
    if (currentValue === null) {}
    else currentCalculation.pop();
    }

   
});

roundTo.addEventListener("change", () => {
    roundValue = roundTo.value;
    if (roundValue == 0) {
        roundValue = null;
    }
    else roundValue = Math.pow(10, roundValue);
    if (currentValue === null) {}
    else currentCalculation.push(currentValue);
    updateScreen(currentCalculation.join(""));
    if (currentValue === null) {}
    else currentCalculation.pop();
});


roundTo.addEventListener("focus", () => userTyping = true);

roundTo.addEventListener("blur", () => userTyping = false);