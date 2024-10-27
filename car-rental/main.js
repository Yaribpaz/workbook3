"use strict";

console.log("got here");

let pickupDateInput = document.getElementById("pickupDateInput");
let numberOfDaysInput = document.getElementById("numberOfDaysInput");

let electronicRadio = document.getElementById("electronicRadio");
let gpsRadio = document.getElementById("gpsRadio");
let roadsideRadio = document.getElementById("roadsideRadio");

let under25RadioYes = document.getElementById("under25RadioYes");
let under25RadioNo = document.getElementById("under25RadioNo");

let carRentalCostSpan = document.getElementById("carRentalCostSpan");
let optionsCostSpan = document.getElementById("optionsCostSpan");
let under25CostSpan = document.getElementById("under25CostSpan");
let totalCostSpan = document.getElementById("totalCostSpan");

function estimateTotal() {
  let pickupDate = pickupDateInput.value;
  let numberOfDays = Number(numberOfDaysInput.value);

  let toll = electronicRadio.checked;
  let gps = gpsRadio.checked;
  let roadside = roadsideRadio.checked;
  let under25 = under25RadioYes.checked;

  let carRentalCost = 0;
  let optionsCost = 0;
  let under25Cost = 0;
  let totalCost = 0;

  // Calculate car rental cost
  carRentalCost = numberOfDays * 29.99;
  carRentalCostSpan.innerText = carRentalCost.toFixed(2);

  // Calculate options cost
  if (toll) {
    optionsCost += 3.95 * numberOfDays;
  }
  if (gps) {
    optionsCost += 2.95 * numberOfDays;
  }
  if (roadside) {
    optionsCost += 2.95 * numberOfDays;
  }
  optionsCostSpan.innerText = optionsCost.toFixed(2);

  // Calculate under 25 surcharge
  if (under25) {
    under25Cost = carRentalCost * 0.3;
    under25CostSpan.innerText = under25Cost.toFixed(2);
  }

  // Calculate total cost
  totalCost = carRentalCost + optionsCost + under25Cost;
  totalCostSpan.innerText = totalCost.toFixed(2);
}
