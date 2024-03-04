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
