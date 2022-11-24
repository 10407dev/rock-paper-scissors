const choices = ['rock', 'paper', 'scissors'];
const score = document.getElementsByClassName('game__score')[0];
const result = document.getElementsByClassName('game__result')[0];
let value;

function play(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * choices.length)];
	if (playerChoice === computerChoice) value = 0;
	else if (playerChoice === 'rock') value = computerChoice === 'scissors' ? 1 : -1;
	else if (playerChoice === 'paper') value = computerChoice === 'rock' ? 1 : -1;
	else if (playerChoice === 'scissors') value = computerChoice === 'paper' ? 1 : -1;
	result.innerHTML = (value === 0) ? 'Draw!' : (value > 0) ? 'You won!' : 'You lost!'
	score.innerHTML = Number(score.innerHTML) + value;
}
