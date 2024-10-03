let list_element1 = document.getElementById("itemWrap");
let list_element2 = document.getElementById("itemWrap2");

var deleteBtn1 = document.getElementById("deleteBtn");
var deleteBtn2 = document.getElementById("deleteBtn2");

let num1 = 880;
let num2 = 705;
let result = num1 + num2;

let resultElement = document.getElementById("result");
resultElement.textContent = "¥" + result;

deleteBtn1.addEventListener("click", function() {
  list_element1.remove();
  num1 = 0;
  result = num1 + num2;
  let resultElement = document.getElementById("result");
  resultElement.textContent = "¥" + result;
});

deleteBtn2.addEventListener("click", function() {
  list_element2.remove();
  num2 = 0;
  result = num1 + num2;
  let resultElement = document.getElementById("result");
  resultElement.textContent = "¥" + result;
});
