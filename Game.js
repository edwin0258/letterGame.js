var word = []
var word = prompt("Pick a word")
console.log(word)
var letter = "" 
function letterRandom(w){
	var indexRandom = Math.floor(Math.random() * w.length)
	letter = w[indexRandom]
	console.log(letter)
}
letterRandom(word)
