let result = '';
let clickSound = document.getElementById('click-sound');

function updateResult(val) {
  result += val;
  document.getElementById('result').value = result;
}

function clearResult() {
  result = '';
  document.getElementById('result').value = '';
}

function calculate() {
  let calcResult = eval(result);
  document.getElementById('result').value = calcResult;
  result = calcResult;
}

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

