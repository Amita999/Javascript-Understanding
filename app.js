(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  //Display the question
  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (i = 0; i < this.answers.length; i++) {
      console.log(i + " : " + this.answers[i]);
    }
  };
  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log("Correct answer");
    } else {
      console.log("Wrong answer!!!!!!!");
    }
  };
  var q1 = new Question("Is Javascript best language ever ?", ["Yes", "No"], 0);
  var q2 = new Question(
    "What is the name of your favorite teacher ?",
    ["Laxmi", "Christi"],
    1
  );
  var q3 = new Question("What best dexcribes coding ?", ["Tiresome", "Fun"], 1);

  function nextQuestion() {
    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = parseInt(prompt("Please select the number of your answer "));
    questions[n].checkAnswer(answer);
    nextQuestion();
  }
  nextQuestion();
})();
