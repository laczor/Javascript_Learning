const fizzBuzz = require('./index');

test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

//We are expecting 5 console.log calls.
test('Calling fizzbuzz with `5` prints out 5 statements', () => {
  fizzBuzz(5);
  expect(console.log.mock.calls.length).toEqual(5);
});

test('Calling fizzbuzz with 15 prints out the correct values', () => {
  fizzBuzz(15);
// The first argument of the first call to the function was 0
  expect(console.log.mock.calls[0][0]).toEqual(1);
// The first argument of the second call to the function was 1
  expect(console.log.mock.calls[1][0]).toEqual(2);
  expect(console.log.mock.calls[2][0]).toEqual('fizz');
  expect(console.log.mock.calls[3][0]).toEqual(4);
  expect(console.log.mock.calls[4][0]).toEqual('buzz');
  expect(console.log.mock.calls[5][0]).toEqual('fizz');
  expect(console.log.mock.calls[6][0]).toEqual(7);
  expect(console.log.mock.calls[7][0]).toEqual(8);
  expect(console.log.mock.calls[8][0]).toEqual('fizz');
  expect(console.log.mock.calls[9][0]).toEqual('buzz');
  expect(console.log.mock.calls[10][0]).toEqual(11);
  expect(console.log.mock.calls[11][0]).toEqual('fizz');
  expect(console.log.mock.calls[12][0]).toEqual(13);
  expect(console.log.mock.calls[13][0]).toEqual(14);
  expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
});

//Will listen of the funciton of "log" the passed "console" object has been called
beforeEach(() => {
  jest.spyOn(console, 'log');
});

//Removes the mock and restores the initial implementation.
afterEach(() => {
  console.log.mockRestore();
});
