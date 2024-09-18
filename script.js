/*selecting DOM elements for control and manipulation*/
const startText = document.getElementById("startText");
const paddle1 = document.getElementById("paddle1");
const paddle2 = document.getElementById("paddle2");
const ball = document.getElementById("ball");
const player1ScoreElement = document.getElementById("player1Score");
const player2ScoreElement = document.getElementById("player2Score");
// game variables
let gameRunning = false;
let paddle1Speed = 0;
let paddle1Y = 150; // Setting this paddle to the center of its area
let keysPressed = {}; // To track which keys are pressed
let paddle2Speed = 0;
let paddle2Y = 150;
let ballX = 290; /*game width divided by 2 minus the ball width which position it to the center*/
let ballSpeedX = 2;
let ballY = 190;
let ballSpeedY = 2;
let player1Score = 0;
let player2Score = 0;
//game constants
const paddleAcceleration = 1;
const maxPaddleSpeed = 5;
const paddleDeceleration = 1;
const gameHeight = 400;
const gameWidth = 600;

document.addEventListener("keydown", startGame); // When any key is pressed, the game starts
document.addEventListener("keydown", handleKeyDown); // Listen for key press and pass it to the handler
document.addEventListener("keyup", handleKeyUp); // Listen for key release and pass it to the handler

function startGame() {
  gameRunning = true;
  startText.style.display = "none";
  document.removeEventListener("keydown", startGame); // Remove the event listener to prevent restarting the game
  gameLoop();
}

function gameLoop() {
  if (gameRunning) {
    updatePaddle1();
    updatePaddle2();
    moveBall();
    setTimeout(gameLoop, 8); // Call gameLoop function infinitely every 8 ms
  }
}

function handleKeyDown(e) {
  keysPressed[e.key] = true; // Set the pressed key to true
}

function handleKeyUp(e) {
  keysPressed[e.key] = false; // Set the released key to false
}

function updatePaddle1() {
  if (keysPressed["w"]) {
    //using the math.max function because we want to gradually decrease the speed/make the paddle move upwards smoothly while
    //limiting it to a maximum of -5
    paddle1Speed = Math.max(paddle1Speed - paddleAcceleration, -maxPaddleSpeed); // Move paddle up
  } else if (keysPressed["s"]) {
    // Move paddle down, gradually increasing speed to a max of +5
    paddle1Speed = Math.min(paddle1Speed + paddleAcceleration, maxPaddleSpeed);
  } else {
    //this else will control to slow down the paddle when no key is pressed
    if (paddle1Speed > 0) {
      paddle1Speed = Math.max(paddle1Speed - paddleDeceleration, 0);
    } else if (paddle1Speed < 0) {
      paddle1Speed = Math.max(paddle1Speed - paddleDeceleration, 0);
    }
  }
  // Update paddle position
  paddle1Y += paddle1Speed;

  if (paddle1Y < 0) {
    //condition to check if the paddle is moving beyond the game area
    paddle1Y = 0; //preventing the right paddle to move cross the game-area from the top region
  }

  if (paddle1Y > gameHeight - paddle1.clientHeight) {
    //.client height is the height of the paddle itself
    paddle1Y = gameHeight - paddle1.clientHeight; //prevents the paddle from moving below the limit point, stopping it at the bottom
  }
  paddle1.style.top = paddle1Y + "px"; //this line changes the CSS top property of the paddle, which moves it up and down on the screen
}

//the second paddle is similar in logic to the paddle 1 (its mirror image)
function updatePaddle2() {
  if (keysPressed["ArrowUp"]) {
    paddle2Speed = Math.max(paddle2Speed - paddleAcceleration, -maxPaddleSpeed);
  } else if (keysPressed["ArrowDown"]) {
    paddle2Speed = Math.min(paddle2Speed + paddleAcceleration, maxPaddleSpeed);
  } else {
    if (paddle2Speed > 0) {
      paddle2Speed = Math.max(paddle2Speed - paddleDeceleration, 0);
    } else if (paddle2Speed < 0) {
      paddle2Speed = Math.min(paddle2Speed + paddleDeceleration, 0);
    }
  }

  paddle2Y += paddle2Speed;

  if (paddle2Y < 0) {
    paddle2Y = 0;
  }

  if (paddle2Y > gameHeight - paddle2.clientHeight) {
    paddle2Y = gameHeight - paddle2.clientHeight;
  }
  paddle2.style.top = paddle2Y + "px";
}

function moveBall() {
  // Update ball position by adding speed to both X and Y coordinates
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Check for collision with the top or bottom wall and reverse Y speed if collision occurs
  if (ballY >= gameHeight - ball.clientHeight || ballY <= 0) {
    ballSpeedY = -ballSpeedY; // Reverse ball's vertical direction
    playSound(wallSound); // Play wall collision sound
  }

  // Check for collision with paddle 1 (on the left side)
  if (
    ballX <= paddle1.clientWidth && // Ball reaches the left edge near paddle 1
    ballY >= paddle1Y && // Ball is within the paddle's top boundary
    ballY <= paddle1Y + paddle1.clientHeight // Ball is within the paddle's bottom boundary
  ) {
    ballSpeedX = -ballSpeedX; // Reverse ball's horizontal direction
    playSound(paddleSound); // Play paddle collision sound
  }

  // Check for collision with paddle 2 (on the right side)
  if (
    ballX >= gameWidth - paddle2.clientWidth - ball.clientWidth && // Ball reaches the right edge near paddle 2
    ballY >= paddle2Y && // Ball is within the paddle's top boundary
    ballY <= paddle2Y + paddle2.clientHeight // Ball is within the paddle's bottom boundary
  ) {
    ballSpeedX = -ballSpeedX; // Reverse ball's horizontal direction
    playSound(paddleSound); // Play paddle collision sound
  }

  // Check if ball goes out of bounds on the left side (missed by paddle 1)
  if (ballX <= 0) {
    player2Score++; // Increment player 2's score
    playSound(lossSound); // Play loss sound
    updateScoreboard(); // Update the scoreboard with new scores
    resetBall(); // Reset ball to the starting position
    pauseGame(); // Pause the game after the point is scored
  }
  // Check if ball goes out of bounds on the right side (missed by paddle 2)
  else if (ballX >= gameWidth - ball.clientWidth) {
    player1Score++; // Increment player 1's score
    playSound(lossSound); // Play loss sound
    updateScoreboard(); // Update the scoreboard with new scores
    resetBall(); // Reset ball to the starting position
    pauseGame(); // Pause the game after the point is scored
  }

  // Update the ball's position in the game area (moves the ball based on calculated positions)
  ball.style.left = ballX + "px"; // Move ball horizontally
  ball.style.top = ballY + "px"; // Move ball vertically
}
function updateScoreboard() {
  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;
}

function resetBall() {
  ballX = gameWidth / 2 - ball.clientWidth / 2;
  ballY = gameHeight / 2 - ball.clientHeight / 2;
  ballSpeedX = Math.random() > 0.5 ? 2 : -2;
  ballSpeedY = Math.random() > 0.5 ? 2 : -2;
}

function pauseGame() {
  gameRunning = false;
  document.addEventListener("keydown", startGame);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}
