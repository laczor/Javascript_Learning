// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Recursons are done for every charachter in the row.
function steps(n, row = 0, stair = '') {
  if (n === row) {									//The and of the cube, last cell in the table.
    return;
  }

  if (n === stair.length) {							//If we run through each column, we console.log the current row + set string to default
    console.log(stair);
    return steps(n, row + 1);						//and go to the next one
  }

  const add = stair.length <= row ? '#' : ' ';		// for every row, if there are still column to be looped through
  													// We add a # or "space" if the column lenght is smaller, or less then the current row
  steps(n, row, stair + add);						//Since there are other columns to be looped through, we just call the funciton again
}

module.exports = steps;

// function steps(n) {
//   for (let row = 0; row < n; row++) {					//Looping over the rows
//     let stair = '';

//     for (let column = 0; column < n; column++) {		    //so istead of calculating seperately, how much hash or space should be included
//       if (column <= row) {								//it is calculating by charachter, what should be there.
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }
