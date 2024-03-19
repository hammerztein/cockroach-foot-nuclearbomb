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

// Randomly select computer choice
function getComputerChoice() {
	const choices = ['cockroach', 'foot', 'nuclear-bomb'];
	const indexOfChoice = Math.floor(Math.random() * choices.length);
	return choices[indexOfChoice];
}

// Play one round of the game
function playRound(playerChoice, computerChoice) {}

// Game loop
function playGame() {}
