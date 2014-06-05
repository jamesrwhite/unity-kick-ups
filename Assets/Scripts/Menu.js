#pragma strict

public var CurrentScore : int;
public var HighScore : int;

function OnGUI() {
	// Create the menu box
	GUI.Box(Rect(10, 10, 150, 90), '');
	
	// Add the score text
	GUI.Label(Rect(20, 20, 110, 20), 'Current Score: ' + CurrentScore);
	
	// Add the high score text
	GUI.Label(Rect(20, 40, 110, 20), 'High Score: ' + HighScore);
	
	// When the reset button is clicked reset the score
	if (GUI.Button(Rect(20, 70, 130, 20), 'Reset')) {
		CurrentScore = 0;
		HighScore = 0;
	}
}