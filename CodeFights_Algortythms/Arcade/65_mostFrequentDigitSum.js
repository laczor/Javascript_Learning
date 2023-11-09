


const s = (number) => {
    return `${number}`.split('').reduce((acc, current) => acc + Number(current), 0)
};

const step = (number) => {
    number = number - s(number);
    return number <= 0 ? 0 : number;
};

function solution(n) {
    const secondSequenceMap = {};
    let mostFrequentEl = 0;
    let mostFrequentCount = 0;
    while (n !== 0) {

        if(!secondSequenceMap[s(n)]){
            secondSequenceMap[s(n)] = 1
        } else {
            secondSequenceMap[s(n)] = secondSequenceMap[s(n)] + 1
        }
        n = step(n);
    }
console.log(secondSequenceMap)
    Object.keys(secondSequenceMap).forEach((el) => {
        if(secondSequenceMap[el] > mostFrequentCount){
            mostFrequentCount = secondSequenceMap[el]
            mostFrequentEl = el
        }
        if(secondSequenceMap[el] === mostFrequentCount && Number(el) > Number(mostFrequentEl)){
            mostFrequentEl = el
        }

    })



    return Number(mostFrequentEl);

}

console.log(solution(88));
// console.log(s(88));

