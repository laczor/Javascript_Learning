function knapsackLight(value1, weight1, value2, weight2, maxW) {

	if(maxW >= weight1 + weight2){
		return value1 + value2;
	}else if(maxW < weight1 && maxW < weight2){
		return 0;
	}else if(weight1 <= maxW && weight1 == weight2){

			if(value2 > value1){
				return value2;
			}else{
				return value1;
			}

	}else if(weight1 <= maxW && weight2> maxW){
		return value1
	}else if(weight2 <= maxW && weight1 > maxW){
		return value2
	}else{
		return (value1 > value2)?value1:value2;
	}

}


// console.log(knapsackLight(10,5,6,4,8));

// AND / && --> Operator
// expr1 && expr2
// Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.

function knapsackLight(value1, weight1, value2, weight2, maxW) {


	return Math.max(
		maxW >= weight1 && value1,
		maxW >= weight2 && value2,
		maxW >= weight1 + weight2 && value1 + value2
	);
}

console.log(knapsackLight(10,5,6,4,8));
