/* Description

Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
solution(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1

*/

const mat1 = [
    [1, 2, 1],
    [2, 2, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1]
];


function solution(matrix) {
    const response = {};


    for (let i = 0; i < matrix.length -1; i++) {
        for (let i2 = 0; i2 < matrix[i].length -1; i2++) {
            let key = `${matrix[i][i2]}${matrix[i][i2+1]}${matrix[i+1][i2]}${matrix[i+1][i2+1]}`
            response[key] = 1;
        }
    }

    return Object.keys(response).length;
}

console.log(solution(mat1));
