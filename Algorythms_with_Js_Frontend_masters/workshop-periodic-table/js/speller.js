export default {
	check,
	lookup,
};

var elements;

await loadPeriodicTable();


// ****************************

async function loadPeriodicTable() {
	elements = await (await fetch("periodic-table.json")).json();
}

function check(inputWord, symbols = [], charToFind = '') {
	charToFind =  getFirstChar(inputWord, charToFind);
	let element = lookup(charToFind)
	if(element) {
		symbols.push(element.symbol);
		inputWord = inputWord.replace(charToFind, '');
		charToFind = '';
	}

	if(inputWord === '') {
		return symbols;
	}
	if((charToFind.length === 2 || charToFind.length === inputWord.length) && !element && hasSingleDigitSimbol(symbols) ){
		const singleDigitSymolIndex = getSingleDigitSimbolIndex(symbols)
		const lastSymbols = symbols.splice(singleDigitSymolIndex).join('');
		inputWord = lastSymbols + inputWord;
		return check(inputWord, symbols, getFirstChar(inputWord, 'second'));
	}
	if((charToFind.length === 2 || charToFind.length === inputWord.length) && !element && getLastSymbol(symbols).length === 2 ){
		return []
	}

	return check(inputWord, symbols, charToFind)
}

function getFirstChar(inputWord, charToFind = '') {
	return charToFind ? inputWord.split('')[0] + inputWord.split('')[1] : inputWord.split('')[0];
}

function hasSingleDigitSimbol(symbols) {
	return reverse(symbols).find((el) => el.length === 1);
}

function reverse(symbols) {
	return symbols.slice().reverse();
}
function getSingleDigitSimbolIndex(symbols) {
	for (let index = symbols.length -1; index > -1; index--) {
		const element = symbols[index];
		if(element.length == 1) return index;
	}
	return -1
}

function getLastSymbol(symbols) {
	return symbols[symbols.length-1];
}

function lookup(elementSymbol) {
	return elements.find((element) => element.symbol.toLowerCase() == elementSymbol.toLowerCase());
}
