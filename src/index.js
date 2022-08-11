import aNumber from "./a.js";
import bNumber from "./b.js";
import cNumber from "./c.js";
import "./style.css";

console.log("aNumber", aNumber);
console.log("bNumber", bNumber);
console.log("cNumber", cNumber);
console.log("hi");

const $buttonA = document.querySelector("#button-a");
const $buttonB = document.querySelector("#button-b");
const $buttonC = document.querySelector("#button-c");
const $display = document.querySelector("#display");

$buttonA.addEventListener("click", function () {
  $display.innerHTML = aNumber;
});
$buttonB.addEventListener("click", function () {
  $display.textContent = bNumber;
});
$buttonC.addEventListener("click", function () {
  $display.textContent = cNumber;
});
