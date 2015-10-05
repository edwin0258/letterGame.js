var word = [];
//guess and word are set before functions or proccessing occurs.
var word = prompt("Pick a word");
var guess = prompt("Guess a letter in your word");
console.log(word);
var letter = "" 
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
		console.log("false");
	}
	else{
		console.log("true");
	}
}
letterRandom(word);
