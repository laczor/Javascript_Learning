var input = [2, 3, 5, 1, 6];

//This one is a slow algortyhm

function arrayMaxConsecutiveSum(inputArray, k) {

    let max = 0;

    for(let i = 0; i<=inputArray.length-k;i++){
            console.log(i);

            let tempMax = 0;

            for(let y = i; y<i+k;y++){
                tempMax += inputArray[y];
            }

            if(tempMax>max){
                max = tempMax;
            }

    }
    return max;

}

// A way more faster
//So, we calculate the sum of the first chunk
//THen we check we add the following number and deduct the previous one
function arrayMaxConsecutiveSum(inputArray, k) {

    //So we declare two variables which will have the same num at the begining
    s = m = inputArray.slice(0,k).reduce((x,y) => x+y)

    for (i = k; i < inputArray.length; i++) {
        console.log('',inputArray[i]);     //--> this will be the next element in the array
        console.log('',inputArray[i-k]);   //--> this is the first calculated element from the previous chunk

        s += inputArray[i] - inputArray[i-k];

        console.log('---s----',s);          //The logic: if the difference of the two amount is + smaller is bigger than it should increase the chunk if we include the next elment rather than the first
        if (s > m) {m = s}
    }

    return m

}

console.log(arrayMaxConsecutiveSum(input,2));