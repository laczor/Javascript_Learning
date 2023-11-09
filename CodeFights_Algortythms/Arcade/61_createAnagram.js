const a = 'AABAA';
const b = 'BBAAA';

function solution(s, t) {
    return [...t].filter((char) => {
          if(s.indexOf(char) == -1 ){
            return true;
          } else {
           s = s.replace(char, '');
          }
    }).length
}

console.log(solution(a,b))

/* Best */

function solution(s, t) {
    for(let x of s){
        t = t.replace(x,"");
    }
    return t.length;
}
