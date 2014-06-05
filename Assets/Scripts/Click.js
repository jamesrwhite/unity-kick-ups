#pragma strict

public var KickPower : int = 4;

private var clicked : boolean;
private var menu : GameObject;

function Start() {
	// Get a reference to the game menu
	menu = GameObject.Find('Menu');
}

function FixedUpdate () {
	// Was the ball clicked?
	if (clicked) {
		// Add a scaled up upwards force of KickPower to simulate a kick
		rigidbody.AddForce(Vector3.up * (KickPower * 100));

		// Increment the users score
		menu.GetComponent(Menu).CurrentScore += 1;

		// Update the high score if the current score is higher than the previous high score
		if (menu.GetComponent(Menu).CurrentScore > menu.GetComponent(Menu).HighScore) {
			menu.GetComponent(Menu).HighScore = menu.GetComponent(Menu).CurrentScore;
		}

		// Unclick the ball so we don't process it again until it has been clicked again
		clicked = false;
	}
}

function OnMouseDown() {
	clicked = true;
}