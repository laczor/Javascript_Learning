var a = [2, 1, 3];
var b = [1, 2, 3];

// The key trick here is to keep track of the difference.
// Conditions: at the end, in the counterA and Counter B there has to be the same different numbers. Without dupication
//Good case : --> counterA = [1,2]; counterB=[2,1];
//If there is three different numbers, or three of the same number, the condition is not met.

function areSimilar(a, b) {

    var counterA = [] ;
    var counterB = [] ;
    for(var i=0;i<a.length;i++){

        if(a[i]!=b[i]){
            //If there would be 3 different numbers, it is not good
            if(counterA.length !=0 && counterA[0] != b[i] || counterB.length !=0 && counterB[0] != a[i] ){
                return false;
            }
            //If there is already number in the created array, then there would be 3 of the same number, which is not good as well.
            if(counterA.includes(a[i])){
                return false;
            }else if(counterB.includes(b[i])){
                return false;
            }else{
                counterA.push(a[i]);
                counterB.push(b[i]);
            }

        }

    }

    return counterA.concat(counterB).length <=4;
}

console.log(areSimilar(a,b));