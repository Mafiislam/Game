const gameArea = document.querySelector('.game-area');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');
let score = 0;
let gameInterval;

startButton.addEventListener('click', startGame);

function startGame() {
    resetGame();
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
        event.target.classList.remove('active');
    }
});

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}
