var a;						// Without a variable, the engie will never set the value of rhte variable, it does not allocate any memory to "a" without this line
console.log(a);


if (a === undefined) {
    console.log('a is undefined!');   
}
else {
    console.log('a is defined!');   
}