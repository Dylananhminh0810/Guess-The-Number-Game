let life = 20;
let highscore = 0;
let rightNumber = Math.trunc(Math.random() * 20) + 1;
let flag = 0;
console.log(rightNumber, typeof rightNumber);
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent =
      "Please type the number in the box to check.👌";
    return;
  }
  if (flag == 1) {
    return;
  }
  if (guess === rightNumber) {
    if (life > highscore) {
      highscore = life;
    }
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".message").textContent =
      "Your answer is correct. Congratulation!😊😊";
    flag = 1;
    document.querySelector("body").style.backgroundColor = "#7CFC00";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = rightNumber;
  } else if (guess > rightNumber) {
    document.querySelector(".message").textContent =
      "The correct number is a litle higher. Try again😒";
    life--;
    document.querySelector(".score").textContent = life;
  } else {
    document.querySelector(".message").textContent =
      "The correct number is a litle lower. Try again😒";
    life--;
    document.querySelector(".score").textContent = life;
  }
  if (life == 0) {
    document.querySelector(".message").textContent =
      "Game Over! Click 'Play Again!' to Start your new game🙌";
    document.querySelector("body").style.backgroundColor = "#A9A9A9";
    document.querySelector(".number").textContent = rightNumber;
    flag = 1;
    return 0;
    displayMessage("You lost the game");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing";
  flag = 0;
  life = 20;
  rightNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(rightNumber, typeof rightNumber);
  document.querySelector("body").style.backgroundColor = "#f5fffa";
  document.querySelector(".score").textContent = life;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
