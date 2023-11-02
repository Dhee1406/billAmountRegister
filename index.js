var billAmount = document.querySelector("#bill_amount");
var cashGiven = document.querySelector("#cash_given");
const checkBtn = document.querySelector("#check_btn");
var message = document.querySelector(".error");

checkBtn.addEventListener("click", validateBillCashAmount);

function validateBillCashAmount() {
    message.style.display=`none`;
    var num = Number(billAmount.value)
    if (num > 0) {

    }
    else {
        message.style.display=`block`;
        showOutput(
            `invalid input`
        );
    }
}

function showOutput(errmessage){
    message.innerHTML = errmessage;
}

