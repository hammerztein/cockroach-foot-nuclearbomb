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

// Get player selection
function getPlayerSelection(e) {
	gameData.playerSelection = e.currentTarget.dataset.value;
	playRound(gameData.playerSelection, gameData.computerSelection);
}

// Play one round of the game
function playRound(playerChoice, computerChoice) {}

// Button click events
buttons.forEach((button) =>
	button.addEventListener('click', (e) => getPlayerSelection(e)),
);

// Game loop
function playGame() {}
