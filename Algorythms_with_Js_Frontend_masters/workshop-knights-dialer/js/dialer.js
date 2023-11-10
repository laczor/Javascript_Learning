export default {
	reachableKeys,
	countPaths,
	listAcyclicPaths
};

const dials = [
	[[1],[2],[3]],
	[[4],[5],[6]],
	[[7],[8],[9]],
	[[ ],[0],[ ]],
];

const digitCoordinates = calculateDigitCoordinates(dials);
const knightStepsMap = KnightStepsMap(digitCoordinates, dials)

function calculateDigitCoordinates(dials) {
	const coordiantes = {};
	for (let y = 0; y < dials.length; y++) {
		const row = dials[y];
		for (let x = 0; x < row.length; x++) {
			if(row[x][0] !== undefined) {
				coordiantes[row[x][0]] = [y,x];
			}
		}
	}
	return coordiantes;
};


function possibleKnightSteps ([x,y]){
	return [[x+1, y-2], [x+2,y-1], [x+2, y+1], [x+1, y+2],[x-1, y+2], [x-2, y+1], [x-2, y-1], [x-1, y-2]];
};

function checkKnightSteps(digit, dials) {
	let coordinates = digitCoordinates[digit];
	let possibleSteps = possibleKnightSteps(coordinates);
	let steps = [];
	possibleSteps.forEach(([x,y]) => {
		if(dials[x]?.[y]?.[0] !== undefined){
			steps.push(dials[x][y][0]);
		}

	})
	return steps;
}

function KnightStepsMap(digitCoordinates, dials) {
	const map = {};
		Object.keys(digitCoordinates).forEach((digit) => {
			let steps = checkKnightSteps(digit, dials);
			if(steps.length > 0) map[digit] = steps;
		})
	return map;
}

console.log(digitCoordinates);
console.log(knightStepsMap);
// ****************************

function reachableKeys(startingDigit) {
	return knightStepsMap[startingDigit];
}

function countPaths(startingDigit,hopCount) {
	let digits = [startingDigit];
	while (hopCount > 0) {
		let tempArr = digits.splice(0);
		tempArr.forEach((digit) => {
			knightStepsMap[digit].forEach((nextDigit) => {
				digits.push(nextDigit);
			})
		});
		hopCount--;
	}
	return digits.length;
}

function listAcyclicPaths(startingDigit) {
	let rootNode = Node(startingDigit);
	createNodeTree(rootNode, [startingDigit]);
	const paths = [];
	collectPathsFromNodeTree({ node: rootNode, paths});
	console.log(rootNode);
	console.log(paths);
	return [paths]
}

function createNodeTree(rootNode, takenDigits) {
		knightStepsMap[rootNode.digit].forEach((digit) => {
			if(!takenDigits.includes(digit)){
				rootNode.add(Node(digit))
			}
		})
		if(rootNode.children.length === 0){
			return;
		} else {
			rootNode.children.forEach((chilNode) => {
				createNodeTree(chilNode, [...takenDigits, chilNode.digit]);
			})
		}
}

function collectPathsFromNodeTree({ node, path = [], paths = []}) {
	path.push(node.digit);

	if(node.children.length === 0){
		paths.push(path)
		return;
	}
	else {
		node.children.forEach((node) => {
			let subpath = [...path];
			collectPathsFromNodeTree({ node, path: subpath, paths })
		})
	}
}

function Node(digit) {
	const children = [];
	function add(chilNode) {
		children.push(chilNode);
	}
	return {
		digit,
		add,
		children

	}
}