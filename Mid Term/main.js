// global variables 
var picks = ["rock", "paper", "scissors"];
var i = Math.floor(Math.random() * 3);
var p2Choice = picks[i];
var p1 = 0;
var p2 = 0;
// function used to show the score 
function score(){
	var match = document.getElementById("score").innerHTML = p1 + " - " + p2;
}
// calls score function at specified rate
setInterval(score, 10);
// converts word values to pictures used as return
function convert(word){
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}
// Decides the order in which the objects win the game
function game(p1Choice){
	var hit = document.getElementById("game");
	hit.style.display = "inline-flex";
	var p1 = document.getElementById("userPick");
	p1.innerHTML = convert(p1Choice);
	var p2 = document.getElementById("comp");
	p2.innerHTML = convert(p2Choice);
	if(p1Choice === "paper" && p2Choice === "rock" || p1Choice === "rock" && p2Choice === "scissors" || p1Choice === "scissors" && p2Choice === "paper"){
		win(p1Choice);
	}
	else if(p1Choice === p2Choice){
		draw(p1Choice);
	}
	else{
		lose(p1Choice);
	}
    // decides the random pick of the AI
	function continuGame(){
		i = Math.floor(Math.random() * 3);
		p2Choice = picks[i];
		box.style.display = "none";
	}
    // sets time interval after click
	setTimeout(continuGame, 1200);
}
// Sets the score multiplier to increase after each hand 
function win(bn){
	p1++;
    document.getElementById("sir").innerHTML = "You win!";
}
function draw(bn){
	document.getElementById("sir").innerHTML = "It's a Draw.";	
}
function lose(bn){
	p2++;
	document.getElementById("sir").innerHTML = "You lose...";	
}
