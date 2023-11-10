export default {
	draw,
	highlight
};


// ****************************

function draw(boardEl) {
	document.createElement('div')

	for (let index = 0; index < 8; index++) {
		let row = document.createElement('div');
		for (let y = 0; y < 8; y++) {
			row.append(createTile(index, y));
		}
		boardEl.append(row);
	}
}

function createTile(index, y) {
	let tile = document.createElement('div');
	tile.setAttribute('row', index);
	tile.setAttribute('col', y);
	return tile;
}

function findDiagonals(tileEl) {
	const combinations = [[1, -1], [-1, 1], [1,1], [-1, -1]];
	const { row, col } = getTileData(tileEl);

	let tilesTohighlight = [];

	combinations.forEach(([r, c]) => {
		let nextrow = row + r;
		let nextcol= col + c;
		while (isInRange(nextrow, nextcol)) {
			tilesTohighlight.push([nextrow, nextcol]);
			nextrow = nextrow + r;
			nextcol = nextcol + c
		}
	})
	return tilesTohighlight;

}

function isInRange(nextRow, nextcol) {
	return nextRow < 8 && nextRow > -1 && nextcol < 8 && nextcol > -1;
}

function getTileData(tileEl) {
	const row = Number(tileEl.getAttribute('row'));
	const col = Number(tileEl.getAttribute('col'));
	return { row, col}
}

function highlightTiles(tileCoordinates) {
	tileCoordinates.forEach(([row, col]) => {
		document.querySelector(`div[col="${col}"][row="${row}"]`).classList.add('highlighted');
	})
}

function highlight(tileEl) {
	document.querySelectorAll('.highlighted').forEach((el) => el.classList.remove('highlighted'));
	let minorDiagonalCoordiantes = findDiagonals(tileEl);
	highlightTiles(minorDiagonalCoordiantes);
}
