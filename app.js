// store user score
let playerScore = 0;
// store ai score
let aiScore = 0;

// Randomly select computer choice
function getComputerChoice() {
	// store all possible choices in an array
	const choices = ['cockroach', 'foot', 'nuclear-bomb'];
	// generate random number to select from array via index number
	const indexOfChoice = Math.floor(Math.random() * choices.length);
	// return random value from array of choices
	return choices[indexOfChoice];
}

// Play one round of the game
function playRound(playerChoice, computerChoice) {
	// convert playerChoice to lower case string and replace whitespaces with hyphen (i.e 'nuclear bomb' > 'nuclear-bomb')
	const playerChoiceFormatted = playerChoice.toLowerCase().replace(/\s/g, '-');
	if (
		// player winning conditions
		(playerChoiceFormatted === 'cockroach' &&
			computerChoice === 'nuclear-bomb') ||
		(playerChoiceFormatted === 'nuclear-bomb' && computerChoice === 'foot') ||
		(playerChoiceFormatted === 'foot' && computerChoice === 'cockroach')
	) {
		// increment player score by one
		playerScore++;
		// return winning text
		return `You Win! (Player: ${playerScore}) ${playerChoiceFormatted} beats (AI: ${aiScore}) ${computerChoice}`;
	} else if (
		// AI winning conditions
		(playerChoiceFormatted === 'cockroach' && computerChoice === 'foot') ||
		(playerChoiceFormatted === 'nuclear-bomb' &&
			computerChoice === 'cockroach') ||
		(playerChoiceFormatted === 'foot' && computerChoice === 'nuclear-bomb')
	) {
		// increment AI score by one
		aiScore++;
		// return winning text
		return `AI Wins! (AI: ${aiScore}) ${computerChoice} beats (Player: ${playerScore}) ${playerChoiceFormatted}`;
	} else {
		// anything else is a draw
		return `It's a draw! (Player: ${playerScore}) ${playerChoiceFormatted} and (AI: ${aiScore}) ${computerChoice} are the same.`;
	}
}

// Game loop
function playGame() {
	// get user choice
	const playerChoice = prompt(
		"Please input your selection:  'Cockroach' 'Foot' or 'Nuclear-Bomb'! ",
	);
	// play 5 rounds based on a user input and log out results
	console.log(playRound(playerChoice, getComputerChoice()));
	console.log(playRound(playerChoice, getComputerChoice()));
	console.log(playRound(playerChoice, getComputerChoice()));
	console.log(playRound(playerChoice, getComputerChoice()));
	console.log(playRound(playerChoice, getComputerChoice()));
}

// Initialize gameplay loop
playGame();
