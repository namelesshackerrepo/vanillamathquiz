  var correctAnswer;

  function resetInput() {
    document.getElementById('answer').value='';
  }

  function randomNumber() {
    return Math.floor(Math.random() * 11)
  }

  function makeQuestion() {
    var num1 = randomNumber();
    var num2 = randomNumber();
    correctAnswer = num1 + num2;
    document.getElementById('question').innerText = " ";
    document.getElementById('question').append(`${num1} + ${num2}`);
  }

  function checkAnswer() {
    var answer = document.getElementById('answer').value;
    if (answer == correctAnswer) {
      return 'correct';
    }
    else {
      return 'incorrect';
    }
  }

  function appendResult(result) {
    document.getElementById('result').innerText = ' ';
    document.getElementById('result').append(result);
  }

  document.getElementById('submitButton')
  .addEventListener('click', function() {
    appendResult(checkAnswer());
    resetInput();
    makeQuestion();
  })

  makeQuestion();
