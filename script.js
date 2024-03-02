const operation = document.querySelector(".operation");
const result = document.querySelector(".result");
/*const clear = document.querySelector(".clear");
const back = document.querySelector(".delete");
const parenthesis = document.querySelector(".parenthesis");
const percentage = document.querySelector(".percentage");
const one = document.querySelector(".1");
const two = document.querySelector(".2");
const three = document.querySelector(".3");
const division = document.querySelector(".division");
const four = document.querySelector(".4");
const five = document.querySelector(".5");
const six = document.querySelector(".6");
const multiplication = document.querySelector(".multiplication");
const seven = document.querySelector(".7");
const eight = document.querySelector(".8");
const nine = document.querySelector(".9");
const subtraction = document.querySelector(".minus");
const decimals = document.querySelector(".decimals");
const zero = document.querySelector(".0");
const equals = document.querySelector(".equals");
const addition = document.querySelector(".plus");

 all buttons and screens are refrenced above 
*/

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
    

    

    if (currentCalculation.length === 0){}

    else if (
        currentCalculation[currentCalculation.length-1] === "+" ||
        currentCalculation[currentCalculation.length-1] === "-" ||
        currentCalculation[currentCalculation.length-1] === "(" ||
        currentCalculation[currentCalculation.length-1] === ")" ||
        currentCalculation[currentCalculation.length-1] === "%" ||
        currentCalculation[currentCalculation.length-1] === "/" ||
        currentCalculation[currentCalculation.length-1] === "*" ||
        currentCalculation[currentCalculation.length-1] ==="."){}
    
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
    } 


function updateValue(number) {
    if (currentValue === null) currentValue = number;
    else {
    currentValue += number;
    }
    operation.innerText = currentCalculation.join("") + currentValue;
    currentCalculation.push(currentValue);
    result.innerText = calculate(currentCalculation);
    currentCalculation.pop();
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



function calculate (arr) {
   
    arr = [...arr];

    if (arr.length == 0) return "";
    if (arr.length == 1) return arr[0];
    if (
    arr[arr.length-1] === "+" ||
    arr[arr.length-1] === "-" ||
    arr[arr.length-1] === "(" ||
    arr[arr.length-1] === ")" ||
    arr[arr.length-1] === "%" ||
    arr[arr.length-1] === "/" ||
    arr[arr.length-1] === "*" ||
    arr[arr.length-1] ==="."){
        
        arr.pop();
        
    }

    let result = "hehe" ;

    for(let i = 0; i < arr.length; i++) {
        
        if (arr[i] === "(") {
            for (let j = i; j < arr.length; j++){
                if (arr[j] === ")") {
                break;  
                }
            delete arr[i]
            delete arr[j]
            i++
            for (;i < j; i++){
                if (arr[i] === "*"){
                    arr[i] = arr[i-1] * arr[i+1]
                    delete(arr[i-1])
                    delete(arr[i+1])   
                }
                else if (arr[i] === "/"){
                    arr[i] = arr[i-1] / arr[i+1]
                    delete(arr[i-1])
                    delete(arr[i+1])   
                }
                else if (arr[i] === "%"){
                    arr[i] = arr[i-1] & arr[i+1]
                    delete(arr[i-1])
                    delete(arr[i+1])   
                }
                else if (arr[i] === "+"){
                    arr[i] == arr[i-1] + arr[i+1]
                    delete arr[i-1]
                    delete arr[i+1]
                }
                else if (arr[i] === "-"){
                    arr[i] == arr[i-1] + arr[i+1]
                    delete arr[i-1]
                    delete arr[i+1]
                }
            }
            }
    
        }
        else if (arr[i] === "*"){
            arr[i] = arr[i-1] * arr[i+1]
            delete(arr[i-1])
            delete(arr[i+1])   
            }
            else if (arr[i] === "/"){
                arr[i] = arr[i-1] / arr[i+1]
                delete(arr[i-1])
                delete(arr[i+1])   
                }
            else if (arr[i] === "%"){
                arr[i] = arr[i-1] & arr[i+1]
                delete(arr[i-1])
                delete(arr[i+1])   
                }
            else if (arr[i] === "+"){
                    arr[i] == arr[i-1] + arr[i+1]
                    delete arr[i-1]
                    delete arr[i+1]
                }
            else if (arr[i] === "-"){
                    arr[i] == arr[i-1] + arr[i+1]
                    delete arr[i-1]
                    delete arr[i+1]
                }
        }

        console.log(arr)
        return "result";
    }
        
