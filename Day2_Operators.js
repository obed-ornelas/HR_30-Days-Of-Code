/*
  Task
  ----------------------------------------------------------------------------------------------------------
  Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip),
  and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's
  total cost.

  Input Format
  ----------------------------------------------------------------------------------------------------------
  There are 3 lines of numeric input:

  The first line has a double, mealCost (the cost of the meal before tax and tip).
  The second line has an integer, tipPercent (the percentage of mealCost being added as tip).
  The third line has an integer, taxPercent (the percentage of mealCost being added as tax).

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  12.00
  20
  8

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  15

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", stdin => {
  inputString += stdin;
});

process.stdin.on("end", () => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function calculateTotalCost(meal_cost, tip_percent, tax_percent) {
  const calculated_tip = meal_cost * (tip_percent / 100);
  const calculated_tax = meal_cost * (tax_percent / 100);

  return Math.round(meal_cost + calculated_tip + calculated_tax);
}

function main() {
  const meal_cost = parseFloat(readLine());
  const tip_percent = parseInt(readLine(), 10);
  const tax_percent = parseInt(readLine(), 10);

  console.log(calculateTotalCost(meal_cost, tip_percent, tax_percent));
}
