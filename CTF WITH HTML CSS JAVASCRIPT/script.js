document.getElementById('challenge1-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var answer = document.getElementById('challenge1-answer').value;
  if (answer.toUpperCase() === "I'M BACK HACKER!") {
    document.getElementById('challenge1-result').textContent = 'Correct!';
  } else {
    document.getElementById('challenge1-result').textContent = 'Incorrect. Try again!';
  }
});

document.getElementById('challenge2-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var answer = document.getElementById('challenge2-answer').value;
  if (answer === "32") {
    document.getElementById('challenge2-result').textContent = 'Correct!';
  } else {
    document.getElementById('challenge2-result').textContent = 'Incorrect. Try again!';
  }
});
