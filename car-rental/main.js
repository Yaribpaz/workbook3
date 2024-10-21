"use strict";

console.log("got here");

let numberOfDaysInput = document.getElementById("numberOfDaysInput");
let electronicRadio = document.getElementById("electronicRadio");
let gpsRadio = document.getElementById("gpsRadio");
let roadsideRadio = document.getElementById("roadsideRadio");

function estimateTotal() {
  let numberOfDays = numberOfDaysInput.value;
  let carRentalAmount = 29.99 * numberOfDays;

  console.log(carRentalAmount);
}
