const a = 'abc';
const b = 'abccba';
const c = 'abcc'

function solution(a, b) {

        const hashMapA = HashMap(a);
        const hashMapB = HashMap(b)

        return compareMaps(hashMapA, hashMapB);

}


function HashMap(word) {
        const hashMap = {}

        for (let char of word) {
            if(Number.isInteger(hashMap[char])){
                hashMap[char] = hashMap[char] + 1;
            } else {
                hashMap[char] = 1
            }
        }

        return hashMap;
}

function compareMaps(map1, map2) {
        let counter = -1;
        let finished = false
        while (finished == false) {
            const keys = Object.keys(map1);

            for (let index = 0; index < keys.length; index++) {
                const char = keys[index];
                if(Number.isInteger(map2[char]) && map2[char]>= map1[char]){
                    map2[char] = map2[char] - map1[char];
                } else {
                    finished = true;
                    break;
                }
            }
            counter = counter + 1;

        }
        return counter;
}


// console.log(HasMap('Hello'));

console.log(solution(a,b));

/*
    The key constraint here, is to have enough letters from the b, to construct the a. So we just have to keep looping until we can't find more letter in b.

*/

// BEst one

function solution(a, b) {
    let count = 0;
    while(true){
        for(let x of a){
            if(b.indexOf(x) < 0)
                return count;
            b = b.replace(x,"");
        }
        count ++;
    }
}
