//quiz about myself
var readlineSync=require("readline-sync");
var score=0;
var uname=readlineSync.question("Please Enter your name..")
console.log("Welcome "+uname+" Let us play a quiz on");

console.log("DO YOU KNOW FATHIMA?");
function ask(question,answer)
{
  var uanswer=readlineSync.question(question);

  if(uanswer==answer)
  {
    console.log("You're spot on!Correct Answer");
    score++;
  }
  else
  {
    console.log("Oops!Wrong answer!")
  }
  console.log("Your current score is: ",score);
  console.log("-----------------")
}

var questions=[{
  question:"How old is Fathima? ",
  answer:"21",
  },
  {
    question:"Which is her birthday month? ",
    answer:"november",
  },
  {
    question:"What do her parents call her? ",
    answer:"zohra",
  },
  {
    question:"How many siblings does she have? ",
    answer:"1",
  },
  {
    question:"Which city does she live in? ",
    answer:"bangalore",
  }
];

for(var i=0;i<questions.length;i++)
{
  ask(questions[i].question,questions[i].answer);
}
if(score==5)
{
  console.log("Congratulations!!, You have won the quiz!!");
}