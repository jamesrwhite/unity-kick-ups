#pragma strict

private var menu : GameObject;

function Start() {
	// Get a reference to the game menu
	menu = GameObject.Find('Menu');
}

function OnCollisionEnter() {
	// Set the current score to 0 if the ball hits the pitch
	menu.GetComponent(Menu).CurrentScore = 0;
}