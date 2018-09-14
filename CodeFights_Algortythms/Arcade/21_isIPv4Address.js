var s ='a0.1.1.1';


function isIPv4Address(s) {

	//If it contains any other than digits or '.', will return false;
	if(s.match(/[^0-9.]/g)){
		return false;
	}


	var arr = s.split('.');

	if (arr.length !=4){
		return false;
	}

	for (var i = 0; i <arr.length ; i++) {
		var number = parseInt(arr[i],10);
		if(arr[i]=='' || number<0 || number>255){
			return false;
		}
	}
	return true;
}

console.log(isIPv4Address(s));
