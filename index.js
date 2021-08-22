var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Please Enter Your Username: \n")
console.log(`Welcome ${userName.toUpperCase()}, to the 'World of Rahul'.Let's see how well you know him.`)


function game(question, answer) {

  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You Got It Right. 🎉")
    score += 10
  } else {
    console.log("That's a wrong answer ❌ . You sure you know him?")
  }
  console.log("Current Score is: ", score)
  console.log("------------------------")
}


var questions = [
  {
    question: "\nWhere do Rahul live? \n",
    answer: "Jammu"
  },
  {
    question: "\nRahul loves to go and party with friends. Yes or No? \n",
    answer: "No"
  },
  {
    question: "\nRahul is a coffee person. Yes or No ? \n",
    answer: "No"
  },
  {
    question: "\nRahul's favorite mobile app thst he cant live without?\n",
    answer: "Spotify"
  },

  {
    question: "\nRahul's favorite sports?\n",
    answer: "BasketBall"
  },
  {
    question: "\nIs Rahul an extrovert or introvert? \n",
    answer: "Introvert"
  }

];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];

  game(currentQuestion.question, currentQuestion.answer)
}

console.log(`\nYou got ${score / 10} right answers out of ${questions.length}`)
console.log("\nYour final score is", score)
