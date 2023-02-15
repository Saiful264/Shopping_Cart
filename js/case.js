/*
1. add event listener to the case plus button 
2. get the value inside the case number field (inpunt field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case numebr field
*/ 

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }

    // const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

}


function updateCaseTotalPrice(caseTotalNumber) {
    const caseTotalPrice = caseTotalNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseTotalNumber = updateCaseNumber(true);
    updateCaseTotalPrice(caseTotalNumber);
    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    
    const caseTotalNumber = updateCaseNumber(false);
    
    updateCaseTotalPrice(caseTotalNumber);
    calculateSubTotal();
    
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    
    // const newCaseNumber = previousCaseNumber - 1;
    // caseNumberField.value = newCaseNumber;
})
