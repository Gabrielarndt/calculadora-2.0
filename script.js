function appendCharacter(character) {
  document.getElementById('display').value += character;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteDigit() {
  var displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculate() {
  var displayValue = document.getElementById('display').value;
  var result;

  try {
    result = eval(displayValue);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}