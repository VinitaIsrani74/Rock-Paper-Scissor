let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let Choices = document.querySelectorAll(".choice");

Choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  let userWin = true;
  const compChoice = generateCompChoice();

  // draw condition
  if (userChoice === compChoice) {
    console.log("Game Draw");
    msg.innerText = "Game Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
  } else {
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    if (userWin) {
      console.log("You win");
      userScore++;
      user.innerText = userScore;
      msg.innerText = `you win ! ${userChoice} beats ${compChoice} `;
      msg.style.backgroundColor = "green";
    } else {
      console.log("You lose");
      compScore++;
      comp.innerText = compScore;
      msg.innerText = `You lose! ${userChoice} is beaten by ${compChoice}`;
      msg.style.backgroundColor = "red";
    }
  }
};

const generateCompChoice = () => {
  const choiceList = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choiceList[randomIndex];
};
