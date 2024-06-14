const gameArea = document.querySelector('.game-area');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');
const backgroundMusic = document.getElementById('background-music');
const clickSuccess = document.getElementById('click-success');
const clickFail = document.getElementById('click-fail');
let score = 0;
let gameInterval;

startButton.addEventListener('click', startGame);

function startGame() {
    resetGame();
    backgroundMusic.play();
    gameInterval = setInterval(showMole, 1000);
    setTimeout(endGame, 15000); // Game ends after 15 seconds
}

function showMole() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => tile.classList.remove('active'));
    const randomIndex = Math.floor(Math.random() * tiles.length);
    tiles[randomIndex].classList.add('active');
}

function resetGame() {
    score = 0;
    updateScore();
    clearInterval(gameInterval);
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => tile.classList.remove('active'));
}

function endGame() {
    alert(`Game Over! Your score is: ${score}`);
    resetGame();
}

gameArea.addEventListener('click', function(event) {
    if (event.target.classList.contains('active')) {
        score++;
        updateScore();
        clickSuccess.play();
        event.target.classList.remove('active');
    } else {
        clickFail.play();
    }
});

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}
