// Store game data
const gameData = {
	playerScore: 0,
	computerScore: 0,
	playerSelection: '',
	computerSelection: '',
	currentRound: 0,
	maxRound: 5,
	outcome: 'Select A Hand To Play A Round!',
};

// Game buttons
const buttons = document.querySelectorAll('.btn');
const restart = document.querySelector('#restart');

// Randomly select computer choice
function getComputerSelection() {
	const choices = ['cockroach', 'foot', 'nuclear-bomb'];
	const indexOfChoice = Math.floor(Math.random() * choices.length);
	return choices[indexOfChoice];
}

// Play one round of the game
function playRound(e) {
	// End game if played max rounds
	if (gameData.currentRound === gameData.maxRound) {
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
	// Display the winner of the game
	if (gameData.currentRound === gameData.maxRound) {
		gameData.outcome = `Game is over, ${
			gameData.playerScore > gameData.computerScore
				? 'You won!'
				: 'Computer won!'
		} `;
		restart.style.display = 'block';
	}

	// DOM variables
	const outcome = document.querySelector('#outcome');
	const playerSelectionText = document.querySelector('#player-selection');
	const computerSelectionText = document.querySelector('#ai-selection');
	const playerScoreText = document.querySelector('#player-score');
	const computerScoreText = document.querySelector('#ai-score');
	const progressBar = document.querySelector('#progress-bar');

	// Update the values based on gameData
	outcome.textContent = gameData.outcome;
	playerSelectionText.textContent = capitalizeFirstLetter(
		gameData.playerSelection,
	);
	computerSelectionText.textContent = capitalizeFirstLetter(
		gameData.computerSelection,
	);
	playerScoreText.textContent = gameData.playerScore;
	computerScoreText.textContent = gameData.computerScore;
	progressBar.dataset.value = `${gameData.currentRound}/${gameData.maxRound}`;
	progressBar.value = gameData.currentRound;
	progressBar.max = gameData.maxRound;
}

// Restart game
function restartGame() {
	// Hide button
	restart.style.display = 'none';

	// Reset values
	(gameData.playerScore = 0),
		(gameData.computerScore = 0),
		(gameData.playerSelection = ''),
		(gameData.computerSelection = ''),
		(gameData.currentRound = 0),
		(gameData.maxRound = 5),
		(gameData.outcome = 'Select A Hand To Play A Round!'),
		// Update screen
		updateScreen();
}

// Helper function
function capitalizeFirstLetter(string) {
	const capitalLetter = string.slice(0, 1).toUpperCase();
	const removedFirstLetter = string.slice(1);
	return capitalLetter.concat(removedFirstLetter);
}

// Button click events
buttons.forEach((button) =>
	button.addEventListener('click', (e) => playRound(e)),
);

restart.addEventListener('click', restartGame);
