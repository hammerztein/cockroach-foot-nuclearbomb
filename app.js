// Store game data
const gameData = {
	playerScore: 0,
	computerScore: 0,
	playerSelection: '',
	computerSelection: '',
	currentRound: 0,
	maxRound: 5,
	outcome: 'Play a round!',
};

// Game buttons
const buttons = document.querySelectorAll('.btn');

// Randomly select computer choice
function getComputerSelection() {
	const choices = ['cockroach', 'foot', 'nuclear-bomb'];
	const indexOfChoice = Math.floor(Math.random() * choices.length);
	return choices[indexOfChoice];
}

// Play one round of the game
function playRound(e) {
	// Rounds check
	if (gameData.currentRound === gameData.maxRound) {
		gameData.outcome = 'Game Is Over, Start A New Game!';
		// make game reset button visible
		updateScreen();
		return;
	}

	// Set player and computer selections
	gameData.playerSelection = e.currentTarget.dataset.value;
	gameData.computerSelection = getComputerSelection();

	// Draw conditions
	if (gameData.playerSelection === gameData.computerSelection) {
		gameData.currentRound++;
		gameData.outcome = "It's a Draw";
		console.log(gameData);
		updateScreen();
	} else if (
		// Player win conditions
		(gameData.playerSelection === 'cockroach' &&
			gameData.computerSelection === 'nuclear-bomb') ||
		(gameData.playerSelection === 'nuclear-bomb' &&
			gameData.computerSelection === 'foot') ||
		(gameData.playerSelection === 'foot' &&
			gameData.computerSelection === 'cockroach')
	) {
		gameData.playerScore++;
		gameData.currentRound++;
		gameData.outcome = 'You win!';
		console.log(gameData);
		updateScreen();
	} else if (
		// Computer win conditions
		(gameData.computerSelection === 'cockroach' &&
			gameData.playerSelection === 'nuclear-bomb') ||
		(gameData.computerSelection === 'nuclear-bomb' &&
			gameData.playerSelection === 'foot') ||
		(gameData.computerSelection === 'foot' &&
			gameData.playerSelection === 'cockroach')
	) {
		gameData.computerScore++;
		gameData.currentRound++;
		gameData.outcome = 'Computer wins!';
		console.log(gameData);
		updateScreen();
	}
}

// Update game UI
function updateScreen() {
	// DOM variables
	const outcome = document.querySelector('#outcome');
	const playerSelectionText = document.querySelector('#player-selection');
	const computerSelectionText = document.querySelector('#ai-selection');
	const playerScoreText = document.querySelector('#player-score');
	const computerScoreText = document.querySelector('#ai-score');
	const progressBar = document.querySelector('#progress-bar');

	// Update the values based on gameData
	outcome.textContent = gameData.outcome;
	playerSelectionText.textContent = gameData.playerSelection;
	computerSelectionText.textContent = gameData.computerSelection;
	playerScoreText.textContent = gameData.playerScore;
	computerScoreText.textContent = gameData.computerScore;
	progressBar.dataset.value = `${gameData.currentRound}/${gameData.maxRound}`;
	progressBar.value = gameData.currentRound;
	progressBar.max = gameData.maxRound;
}

// Button click events
buttons.forEach((button) =>
	button.addEventListener('click', (e) => playRound(e)),
);

// Game loop
function playGame() {
	updateScreen();
}

playGame();
