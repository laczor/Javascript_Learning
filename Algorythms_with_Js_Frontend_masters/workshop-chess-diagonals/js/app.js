import Chessboard from "./chessboard.js";

let BOARD_ELEMENT;

document.addEventListener("DOMContentLoaded",async function ready(){
	var boardEl = document.getElementById("board");
	BOARD_ELEMENT = boardEl;
	var clearHighlightsBtn = document.getElementById("clear-highlights-btn");

	Chessboard.draw(boardEl);

	boardEl.addEventListener("click",onClickTile,false);
	clearHighlightsBtn.addEventListener("click",clearHighlights,false);


	// ********************************

	function onClickTile(evt) {
		var clickedEl = evt.target;

		// clicked on a board tile?
		if (clickedEl.matches("#board > div > div")) {
			Chessboard.highlight(clickedEl);
		}
		else {
			clearHighlights();
		}
	}

	function clearHighlights() {
		Chessboard.highlight();
	}

});
