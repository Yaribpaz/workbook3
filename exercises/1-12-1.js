"use strict"

function displayMailingLabel(name, address, city, zip){
console.log(name, address, city, zip);
}
displayMailingLabel("Jason Funderberker", "123 Street", "Garden Wall", "CT", "06107");
displayMailingLabel("Wirt McLaughlin", "000 Street", "Over", "CT", "06117");

function addNumbers(number1, number2){
console.log(number1 + "+" + number2 +"=" + (number1 + number2))
}

addNumbers(1,5)
addNumbers(7,8)

function displayReceipt(totalDue, amountPaid) {
console.log("Total Due: $" + totalDue);
console.log("Amount Paid: $" + amountPaid);
console.log("Change Due: $" +(amountPaid - totalDue));
}

displayReceipt(2.50,4)
displayReceipt(155,110)