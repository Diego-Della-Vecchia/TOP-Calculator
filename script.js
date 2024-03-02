const operation = document.querySelector(".operation");
const result = document.querySelector(".result");

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
        currentCalculation[currentCalculation.length-1] === "*"){}
    
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
    if (currentValue === null && number === ".") {
        currentValue = "";
    }
    else if (currentValue == "" && number === ".") {}
    else if (currentValue === null || currentValue === "") currentValue = number;
    else {
        if (currentValue.includes(".") && number === ".") {}
    else currentValue += number;
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
    arr[arr.length-1] === "*"){
        
        arr.pop();
        
    }

    let result;

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
                    arr[i] = arr[closestNumberDown(arr, i)] & arr[closestNumberUp(arr, i)]
                    delete(arr[closestNumberDown(arr, i)])
                    delete(arr[closestNumberUp(arr, i)])
                }
                else if (arr[i] === "+"){
                    arr[i] == arr[closestNumberDown(arr, i)] + arr[closestNumberUp(arr, i)]
                    delete(arr[closestNumberDown(arr, i)])
                    delete(arr[closestNumberUp(arr, i)])
                }
                else if (arr[i] === "-"){
                    arr[i] == arr[closestNumberDown(arr, i)] + arr[closestNumberUp(arr, i)]
                    delete(arr[closestNumberDown(arr, i)])
                    delete(arr[closestNumberUp(arr, i)])
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
                arr[y] = arr[closestNumberDown(arr, y)] % arr[closestNumberUp(arr, y)]
                delete(arr[closestNumberDown(arr, y)])
                delete(arr[closestNumberUp(arr, y)])
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
        
        console.log(arr)
        for (let a = 0; a < arr.length; a++){
            if (arr[a] != undefined){
               result = arr[a];
            }
            
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


function enter() {
   operation.classList.toggle("operationDone");
    result.classList.toggle("resultDone");
  
}