//player 1 object
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

//player 2 object
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

//constants
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

//variables
let winningScore = 3;
let isGameOver = false;

//updates the scores and displays
function updateScore (player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    } 
}

//updates player one score and display
p1.button.addEventListener('click', function() {
    updateScore(p1, p2)
})

//updates player two score and display
p2.button.addEventListener('click', function() {
    updateScore(p2, p1)
})

//sets the score needed to win
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

//resets the game
resetButton.addEventListener('click', reset)

//reset function
function reset() {
    isGameOver = false;
    for(let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}