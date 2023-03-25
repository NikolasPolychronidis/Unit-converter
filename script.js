"use strict";
const inputEl = document.querySelector(".input");
const convertBtn = document.querySelector(".btn");
let meter, liter, kilogram;

let convert = function () {
  const inputValue = inputEl.value;
  meter = inputValue * 3.281;
  liter = inputValue * 0.264;
  kilogram = inputValue * 2.204;
  const numValue = parseFloat(inputValue);
  document.getElementById("meters-conv").textContent = `${numValue} meters = ${(
    numValue * 3.281
  ).toFixed(2)} feet `;
  document.getElementById("liters-conv").textContent = `${numValue} liters = ${(
    numValue * 0.264
  ).toFixed(2)} gallons `;
  document.getElementById(
    "kilograms-conv"
  ).textContent = `${numValue} kilograms = ${(numValue * 2.204).toFixed(
    2
  )} pounds `;
};
convertBtn.addEventListener("click", convert);
