let result = [];
console.log(result)

function noTwoOperator (operator){
    if(result.length != 0){
        if(result[result.length-1] != "+" && result[result.length-1] !=  "x" && result[result.length-1] !=  "-" && result[result.length-1] !=  "/"){
            result.push(operator)
            updateResult();
        }
    }
}
function arrayNull(){
    if(result.length == 0){
        // result = ["0"];
        // updateResult()
        document.getElementById("result").innerHTML = "0";

    }
}


function pleaseEnterTheNextNum(){
    if (result[result.length-1] == "+" || result[result.length-1] == "x" || result[result.length-1] == "-" || result[result.length-1] == "/"){
        document.getElementById("result").innerHTML = "please Enter The Next Number ";
        
    }
}


function updateResult(){
    document.getElementById("result").innerHTML = result.join("");
    console.log(result)
    arrayNull()

    if (result.length < 15) {
        document.getElementById("result").style.fontSize = '40px';
    } else if (result.length >= 15 && result.length <= 29) {
        document.getElementById("result").style.fontSize = '20px';
    } else if (result.length >= 30 && result.length <= 50) {
        document.getElementById("result").style.fontSize = '10px';
    }
}

function n9(){

    result.push(9)
    updateResult()
}




function n8(){

    result.push(8)
    updateResult()
}
function n7(){

    result.push(7)
    updateResult()
}
function n6(){

    result.push(6)
    updateResult()
}
function n5(){

    result.push(5)
    updateResult()
}
function n4(){

    result.push(4)
    updateResult()
}
function n3(){

    result.push(3)
    updateResult()
}
function n2(){

    result.push(2)
    updateResult()
}
function n1(){

    result.push(1)
    updateResult()
}
function n0(){

    result.push(0)
    updateResult()
}


function backspace(){
    result.pop();
    updateResult()
}


function dot(){
    let dotNumber=0
    let operationNumber=0
    if(result.length != 0){
        if(result[result.length-1] != "."){
            if(dotNumber < 1){
              ++dotNumber;
              result.push(".")
              updateResult()
            }
           
        }
      
    }
   
}

function plusMinus(){
    if(result.length != 0){
        if(result[0] != "-"){

            result.unshift("-") 
            updateResult()
        }
    }
}


function c(){
    document.getElementById("result").innerHTML = "0";
    result = [];
    updateResult()
}


function addition(){
   noTwoOperator('+')
    
}


function multiplication(){
    noTwoOperator('x')

}

function division(){
    noTwoOperator('/')

}

function subtraction(){
    noTwoOperator("-")

}


function sliceAndRemove(array, start, end) {
    // Validate start and end indices
    if (start < 0 || end > array.length || start > end) {
        throw new Error("Invalid start or end index");
    }

    // Extract the slice
    let slicedElements = array.slice(start, end);

    // Remove the elements from the original array
    array.splice(start, end - start);

    // Return the sliced elements
    return slicedElements;
}


function performOperation(number1, number2, operator) {
    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "x":
            return number1 * number2;
        case "/":
            return number1 / number2;
        default:
            throw new Error(`Unknown operator: ${operator}`);
    }
}


    
function makeTheResult() {
    // pleaseEnterTheNextNum()
    let operatorIndex = -1;
    let lastresult = 0;
    let number1, number2;
    let currentOperator = null;
    
    console.log("Starting makeTheResult function...");
    console.log(`Initial result array: ${result}`);

    for (let i = 0; i < result.length; i++) {
        if (result[i] == "+" || result[i] == "x" || result[i] == "-" || result[i] == "/") {
            if (operatorIndex === -1) {
                console.log(`Operator ${result[i]} found at index ${i}.`);
                number1 = Number(result.slice(0, i).join(""));
                currentOperator = result[i];
                operatorIndex = i;
                console.log(`number1: ${number1}, currentOperator: ${currentOperator}`);
            } else {
                number2 = Number(result.slice(operatorIndex + 1, i).join(""));
                console.log(`Second operator ${result[i]} found at index ${i}.`);
                console.log(`number2: ${number2}`);
                lastresult = performOperation(number1, number2, currentOperator);
                console.log(`Intermediate result after operation: ${lastresult}`);
                number1 = lastresult;
                currentOperator = result[i];
                operatorIndex = i;
            }
        }
    }

    if (operatorIndex !== -1 && currentOperator !== null) {
        number2 = Number(result.slice(operatorIndex + 1).join(""));
        console.log(`Final operation with number2: ${number2}`);
        lastresult = performOperation(number1, number2, currentOperator);
    }
    
    console.log(`Final result: ${lastresult}`);
    result = [lastresult.toString()]; 
    // the next line because when you make backspace after you click equal it remove all numbers not last number only because it all in one  element like this ["1234"]
    result = result[0].split("")
    console.log(result)
    updateResult()

}


   



function equal() {
    
    makeTheResult()
}




//    // the original
//     function equal() {
//         let counter = 0; // Reset counter at the start of the function
//         let theResult = []; // Reset the result array
    
//         for (let i = 0; i < result.length; i++) {
//             console.log(`Inspecting result[${i}]: ${result[i]}`); // Debugging: Log current element
            
//             if (result[i] == "+" || result[i] == "x" || result[i] == "-" || result[i] == "/") {
//                 counter++;
//                 console.log(`Operator found. Counter incremented: ${counter}`); // Debugging: Log counter value
                
//                 if (counter == 2) {
//                     theResult = result.slice(0, i); // Slice up to the current index
//                     console.log(`Counter reached 2. Slicing result to form theResult: ${theResult}`); // Debugging: Log theResult
//                     break; // Exit the loop after slicing
//                 }
//             }
//         }
        
//         if (counter < 2) {
//             theResult = result.slice(); // Handle cases where less than 2 operators are found
//             console.log(`Less than 2 operators found. theResult is the entire result: ${theResult}`); // Debugging: Log theResult
//         }
        
//         console.log(`Final theResult: ${theResult}`); // Debugging: Log final theResult
        

//         for (let i = 0; i < theResult.length; i++){
//             if (theResult[i] == "+" || theResult[i] == "x" || theResult[i] == "-" || theResult[i] == "/"){
//                 console.log(theResult)
//                  number1   =  Number(theResult.slice(0,i).join(""))
//                  console.log(`number1 : ${number1}`);
//                  number2   =  Number(theResult.slice(++i,theResult.length).join(""))
//                  console.log(`number2 : ${number2}`);
//                  --i;
//                  console.log(`i : ${theResult[i]}`);
//                  console.log(theResult)
//                  let lastresult;
//                  switch (theResult[i]){
//                     case  "+" :
//                         lastresult  = number1 + number2;
//                         document.getElementById("result").innerHTML = lastresult;

//                        break;
//                     case  "-" :
//                         lastresult  = number1 - number2;
//                         document.getElementById("result").innerHTML = lastresult;

//                        break;
//                     case  "x" :
//                         lastresult  = number1 * number2;
//                         document.getElementById("result").innerHTML = lastresult;

//                        break;
//                     case "/" :
//                         lastresult  = number1 / number2;
//                         document.getElementById("result").innerHTML = lastresult;

//                        break;

//                     default :
//                     document.getElementById("result").innerHTML = "error";
//                     lastresult = "error"
        
//                  }
//                  console.log(lastresult)
        
//             }
//         }
            
//     }
    
    

    
