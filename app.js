// Randomly select computer choice
function getComputerChoice() {
	// store all possible choices in an array
	const choices = ['Cockroach', 'Foot', 'Nuclear-Bomb'];
	// generate random number to select from array via index number
	const indexOfChoice = Math.floor(Math.random() * choices.length);
	// return random value from array of choices
	return choices[indexOfChoice];
}
