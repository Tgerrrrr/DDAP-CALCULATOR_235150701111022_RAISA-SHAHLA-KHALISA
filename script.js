// Get the display element
const display = document.getElementById('display');

// Initialize the display value
let displayValue = '';

// Function to append a number to the display
function appendNumber(number) {
  displayValue += number;
  display.value = displayValue;
}

// Function to append an operator to the display
function appendOperator(operator) {
  displayValue += operator;
  display.value = displayValue;
}

// Function to clear the display
function clearDisplay() {
  displayValue = '';
  display.value = displayValue;
}

// Function to calculate the result
function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result;
    display.value = displayValue;
  } catch (error) {
    displayValue = 'Error';
    display.value = displayValue;
  }
}