let displayValue = "0";
let historyValue = "";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function updateHistory() {
  document.getElementById("history").innerText = historyValue;
}

function appendToDisplay(val) {
  if (displayValue === "0") {
    displayValue = val;
  } else {
    displayValue += val;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function calculate() {
  try {
    historyValue = displayValue;
    displayValue = eval(displayValue).toString();
    updateDisplay();
    updateHistory();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function clearHistory() {
  historyValue = "";
  updateHistory();
}

updateDisplay();
updateHistory();
