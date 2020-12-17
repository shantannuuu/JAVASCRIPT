let btn_roll = document.querySelector(".btn--roll");
let dice = document.querySelector(".dice");
let current_0 = document.getElementById("current--0");
let current_1 = document.getElementById("current--1");
let score_0 = document.getElementById("score--0");
let score_1 = document.getElementById("score--1");
let player_0 = document.querySelector(".player--0");
let player_1 = document.querySelector(".player--1");
let btn_hold = document.querySelector(".btn--hold");
let btn_new = document.querySelector(".btn--new");

let score;
let current_score;
let active_user;
let playing;

const init = function () {
  score = [0, 0];
  current_score = 0;
  active_user = 0;
  playing = true;

  current_0.textContent = 0;
  current_1.textContent = 0;
  score_0.textContent = 0;
  score_1.textContent = 0;

  dice.classList.add("hidden");
  player_0.classList.remove("player--winner");
  player_1.classList.remove("player--winner");
  player_0.classList.add("player--active");
  player_1.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${active_user}`).textContent = 0;
  current_score = 0;
  active_user = active_user === 0 ? 1 : 0;
  player_0.classList.toggle("player--active");
  player_1.classList.toggle("player--active");
};

btn_roll.addEventListener("click", function () {
  if (playing) {
    let randow_dice_roll = Math.trunc(Math.random() * 6) + 1;
    console.log(randow_dice_roll);
    switch (randow_dice_roll) {
      case 1:
        dice.src = "dice-1.png";
        break;
      case 2:
        dice.src = "dice-2.png";
        break;
      case 3:
        dice.src = "dice-3.png";
        break;
      case 4:
        dice.src = "dice-4.png";
        break;
      case 5:
        dice.src = "dice-5.png";
        break;
      case 6:
        dice.src = "dice-6.png";
        break;
      default:
        break;
    }
    dice.classList.remove("hidden");

    if (randow_dice_roll !== 1) {
      current_score += randow_dice_roll;
      // current_0.textContent = current_score;
      document.getElementById(
        `current--${active_user}`
      ).textContent = current_score;
    } else {
      switchPlayer();
    }
  }
});

btn_hold.addEventListener("click", function () {
  if (playing) {
    score[active_user] += current_score;
    document.getElementById(`score--${active_user}`).textContent =
      score[active_user];

    if (score[active_user] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${active_user}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${active_user}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btn_new.addEventListener("click", init);
