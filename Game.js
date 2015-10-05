var word = "";
var letter = "";
var counter = 0;
//guess and word are set before functions or proccessing occurs.
var difficulty = prompt("Set Difficulty: H, M, or E")
console.log("Difficulty set to: " + difficulty)
var word = prompt("Pick a word");
console.log("Word set to: " + word)
console.log("Time to guess the letter in your word!")
var guess = prompt("Guess a letter in your word");
function setDifficulty(){
	difficulty = difficulty.toLowerCase();
	if(difficulty == "e"){
		counter += 7;
	}
	else if(difficulty == "m"){
		counter += 4;
	}
	else if(difficulty == "h"){
		counter += 2;
	}
	else{
		difficulty = "m";
		//call function again with set difficulty
		setDifficulty();
	}
}

function letterRandom(w){
	var indexRandom = Math.floor(Math.random() * w.length);
	letter = w[indexRandom];
	setDifficulty()
	checkGuess(guess);
}
function checkGuess(g){
	if (g == null || undefined || !g || g.length >= 2){
		console.log("Please insert a valid guess.");
		var guess = prompt("Guess a letter in your word");
		checkGuess(guess);
	}
	else if (g != letter){
		counter -= 1;
		if(counter > 0){
			console.log("Try again, " + counter + " more guesses.");
			var guess = prompt("Guess a letter in your word");
			checkGuess(guess);
		}
		else{
			console.log("Game Over")
			console.log("Computer picked: " + letter);
		}
	}
	else{
		console.log("The correct letter is:" + " " + g + "!");
	}
}
letterRandom(word);

