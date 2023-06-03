let input = '';

function appendInput(value) {
  input += value;
  document.getElementById('result').value = input;
}

function calculate() {
  try {
    const result = eval(input);
    document.getElementById('result').value = result;
    input = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearInput() {
  input = '';
  document.getElementById('result').value = '';
}
