var textArea = document.getElementById("text-area");
textArea.innerHTML = "ello";


function startGame(){
	var word = "";
	var letter = "";
	var difficulty = "";
	var counter = 0;
	var guess = "";
	//guess and word are set before functions or proccessing occurs.
	var difficulty = prompt("Set Difficulty: H, M, or E");
	textArea.innerHTML = ("Difficulty set to: " + difficulty);
	setWord();
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
		};
	};
	function setWord(){
		word = prompt("Pick a word");
		if (word == null || undefined || !word){
			textArea.innerHTML = ("Please insert a valid word.");
			setWord();
		}
		else{
			textArea.innerHTML = ("Word set to: " + word);
			console.log("Time to guess the letter in your word!");
			guess = prompt("Guess a letter in your word");
		}
	}
	function letterRandom(w){
		var indexRandom = Math.floor(Math.random() * w.length);
		letter = w[indexRandom];
		setDifficulty()
		checkGuess(guess);
	};
	function checkGuess(g){
		if (g == null || undefined || !g || g.length >= 2){
			textArea.innerHTML = ("Please insert a valid guess.");
			var guess = prompt("Guess a letter in your word");
			checkGuess(guess);
		}
		else if (g != letter){
			counter -= 1;
			if(counter > 0){
				textArea.innerHTML = ("Try again, " + counter + " more guesses.");
				var guess = prompt("Guess a letter in your word");
				checkGuess(guess);
			}
			else{
				textArea.innerHTML = ("Game Over")
				console.log("Computer picked: " + letter);
			}
		}
		else{
			textArea.innerHTML = ("The correct letter is:" + " " + g + "!");
		};
	};
	letterRandom(word);
};

