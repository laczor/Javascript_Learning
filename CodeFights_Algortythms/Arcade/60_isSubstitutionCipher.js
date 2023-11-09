function solution(string1, string2) {
    let obj = {};
    const usedCiphers = [];
    if(string1.lenght !== string2.lenght){
        return false;
    }
    string1 = string1.split("");
    string2 = string2.split("");

    for (let index = 0; index < string1.length; index++) {
        const char = string1[index];
        const cipher = string2[index];

        if(obj[char] && obj[char] !== cipher){
            return false;
        }
        if(obj[char] !== cipher && usedCiphers.includes(cipher)){
            return false;
        } else {
            obj[char] = cipher;
            usedCiphers.push(cipher);
        }



    }
    return true;

}

console.log(solution('aa', 'bc'))


/* Best */


const solution = (string1, string2) =>
    [...string1].every((v,i) => string1.indexOf(v) === string2.indexOf(string2[i]));
