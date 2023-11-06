var billAmount = document.querySelector("#bill_amount");
var cashGiven = document.querySelector("#cash_given");
const checkBtn = document.querySelector("#check_btn");
var message = document.querySelector(".error");
const noOfNotes = document.querySelectorAll(".no_of_notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

checkBtn.addEventListener("click", validateBillCashAmount);

function validateBillCashAmount() {

    checkBtn.style.backgroundColor= `#caaf00`;
    checkBtn.style.border= `none`;
    checkBtn.style.fontSize = `3vh`;
    message.style.display=`none`;

    var billValue = Number(billAmount.value);
    var cashValue = Number(cashGiven.value);

    if (billValue > 0) {
        if (cashValue > billValue){
            const amountToReturn = cashValue - billValue;
            calculateAmountToReturn(amountToReturn);
        }
        else if (cashValue == billValue){
            message.style.color = `orange`;
            showOutput(
                `Hurray! Thank you for giving exact cash`
            )
        }
        else {
            message.style.color = `red`;
            showOutput(
                `Oh no! you still owe me rupees `+ Math.abs(cashValue - billValue)
            );
        }
    }
    else if (cashValue < 0 && billValue < 0) {
        message.style.color = `red`;
        showOutput(
            `invalid bill and cash amount`
        );
    }
    else {
        message.style.color = `red`;
        showOutput(
            `Your bill amount must not be negetive`
        );
    }
}

function showOutput(errmessage){
    message.style.display=`block`;
    message.innerHTML = errmessage;
}

function calculateAmountToReturn(returningAmount){
    message.style.color = `rgb(8, 123, 200)`;

    showOutput(
        `Thank you, and I owe you `+returningAmount+` rupees in cash`
    );
    for(let i=0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(returningAmount / availableNotes[i]
        );
        returningAmount %= availableNotes[i];
        noOfNotes[i].innerText= numberOfNotes;
    }
}
