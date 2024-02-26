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
	// convert playerChoice to lower case string
	const userChoice = playerChoice.toLowerCase();

	if (
		// player winning conditions
		(userChoice === 'cockroach' && computerChoice === 'nuclear-bomb') ||
		(userChoice === 'nuclear-bomb' && computerChoice === 'foot') ||
		(userChoice === 'foot' && computerChoice === 'cockroach')
	) {
		// increment player score by one
		playerScore++;
		// return winning text
		return `You Win! ${userChoice} beats ${computerChoice}`;
	} else if (
		// AI winning conditions
		(userChoice === 'cockroach' && computerChoice === 'foot') ||
		(userChoice === 'nuclear-bomb' && computerChoice === 'cockroach') ||
		(userChoice === 'foot' && computerChoice === 'nuclear-bomb')
	) {
		// increment AI score by one
		aiScore++;
		// return winning text
		return `AI Wins! ${computerChoice} beats ${userChoice}`;
	} else {
		// anything else is a draw
		return `It's a draw! ${userChoice} and ${computerChoice} are the same.`;
	}
}

console.log(playRound('cockroach', getComputerChoice()));
console.log(playRound('foot', getComputerChoice()));
console.log(playRound('nuclear-bomb', getComputerChoice()));
