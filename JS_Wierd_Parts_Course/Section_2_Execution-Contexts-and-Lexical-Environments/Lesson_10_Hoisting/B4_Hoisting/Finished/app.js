b();
//Due to hosting, a will be "Hello World, since the v8 engine, already created memory for these variables"
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}