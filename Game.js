var word = ""
var letter = "" 
//guess and word are set before functions or proccessing occurs.
var word = prompt("Pick a word");
var guess = prompt("Guess a letter in your word");

function letterRandom(w){
	var indexRandom = Math.floor(Math.random() * w.length);
	letter = w[indexRandom];
	console.log(letter);
	checkGuess(guess);
}
function checkGuess(g){
	if (g == null || undefined || !g || g.length >= 2){
		console.log("Please insert a valid guess.");
	}
	else if (g != letter){
		console.log("Try again");
		var guess = prompt("Guess a letter in your word");
		checkGuess(guess)
	}
	else{
		console.log("The corrent letter is:" + " " + g);
	}
}
letterRandom(word);
console.log(word);
