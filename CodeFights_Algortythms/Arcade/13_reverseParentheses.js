
// var s = "co(de(fight)s)";
// "cosfighted"
// var s = "abc(cba)ab(bac)c";
// "abcabcabcabc"
var s = "The ((quick (brown) (fox) jumps over the lazy) dog)";
// "The god quick nworb xof jumps over the lazy"



/*
*      CODE Explanation:
*
*      - Firstly, with the if() blocks we find the outermost () parentheses where we have to make the reverse
       - Once we found it we seperate it to start,middle,end. We reverse every time the middle
       - Since we have a clear condition when the function should return we use recursion function, to repeate the same code everytime if there is a parenthesis in the block
* */

function reverseParentheses(s) {

    if(s.indexOf('(') == -1){
        return s;
    }

    var firstParenthesesCalc  = 0;
    var firstParenthesesPos  = 0;
    var secondParenthesesCalc = 0
    var secondParenthesesPos  = 0;s


    for (var i = 0; i <s.length ; i++) {

        if(s.charAt(i) == "(" && firstParenthesesCalc == 0){
            firstParenthesesPos = i;
            firstParenthesesCalc++;
        }else if(s.charAt(i) == "("){
            firstParenthesesCalc++;
        }else if(s.charAt(i) == ")"){
            secondParenthesesPos = i;
            secondParenthesesCalc++;
        }

        if(firstParenthesesCalc > 0 && secondParenthesesCalc >0 && secondParenthesesCalc == firstParenthesesCalc){

            var start = s.slice(0,firstParenthesesPos)

            var middle = s.slice(firstParenthesesPos+1,secondParenthesesPos);
            middle = reverseParentheses(middle).split('').reverse().join('');

            var end = s.slice(secondParenthesesPos+1,s.length);

            s = start + middle + end
            return reverseParentheses(s);

        }

    }

}



console.log(reverseParentheses(s));


/*
*
*       So here, we are searching this pattern in the string with regex "("..anycharacters..")"
*       We reverse the inner text, and replace it in the original text. We do it until we find any "(" in the string
*
* */


reverseParentheses2(){


    while(s.includes('(')){
        s = doReplacement(s);
    }
    return s;
}

function doReplacement(s){
    let result = s.match(/\([A-z\s]*\)/gm)[0];
    let reverse = result.substring(1, result.length -1).split("").reverse().join("");
    s = s.replace(result, reverse);
    return s;
}


