//My simple first sollution

function differentSymbolsNaive(s) {

	var tempArr = [];

	s.split('').map((el)=>{
		if(!tempArr.includes(el)){
			tempArr.push(el)
		};
	})

	return tempArr.length;

}

//Nasty sollution, since to a Set you can store unique primitive values or object references
//Also you can pass a "string" which will be splitted, and in the Set new letters will be created as properties
//So by checking it's length, you will get all of the unique values

function differentSymbolsNaive(s) {
	return new Set(s).size
}



