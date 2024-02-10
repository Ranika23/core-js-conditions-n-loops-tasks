/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  let result = true;
  if (number < 0) {
    result = false;
  }
  return result;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max;
  if (a > b) {
    if (a > c) {
      max = a;
    } else {
      max = c;
    }
  } else if (b > a) {
    if (b > c) {
      max = b;
    } else {
      max = c;
    }
  } else if (c > b) {
    if (c > a) {
      max = c;
    } else {
      max = a;
    }
  } else {
    max = a;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let result = false;
  const queenX = queen.x;
  const queenY = queen.y;
  const kingX = king.x;
  const kingY = king.y;

  if (queenX === queenY && kingX === kingY) {
    result = true;
  }
  if (queenX === kingX && queenY !== kingY) {
    result = true;
  }
  if (queenX !== kingX && queenY === kingY) {
    result = true;
  }
  for (let i = 1; i < 9; i += 1) {
    for (let y = 1; y < 9; y += 1) {
      if (queenX + i === kingX && queenY - i === kingY) {
        result = true;
      }
      if (queenX - i === kingX && queenY + i === kingY) {
        result = true;
      }
    }
  }
  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result = false;
  if (a === b) {
    if (c < a + b && c > 0) {
      result = true;
    }
  } else if (a === c) {
    if (b < a + c && b > 0) {
      result = true;
    }
  } else if (c === b) {
    if (a < c + b && a > 0) {
      result = true;
    }
  }
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result;
  const obj = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
  };
  if (num <= 10) {
    result = obj[num];
  } else {
    const t = Math.floor(num / 10) * 10;
    const un = num % 10;
    result = `${obj[t]}${obj[un]}`;
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  function switchElem(elem) {
    switch (elem) {
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '0':
        result += 'zero';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        break;
    }
  }
  for (let i = 0; i < numberStr.length; i += 1) {
    switchElem(numberStr[i]);
    if (i < numberStr.length - 1) {
      result += ` `;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let flag = false;
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = str[i] + result;
  }
  if (str === result) {
    flag = true;
  }
  return flag;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
      break;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let flag = false;
  let n = num;
  while (n > 0) {
    if (digit === n % 10) {
      flag = true;
    }
    n = Math.floor(n / 10);
  }
  return flag;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let result = -1;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i < arr.length - 1; i += 1) {
    for (let y1 = 0; y1 < i; y1 += 1) {
      sum1 += arr[y1];
    }
    for (let y2 = i + 1; y2 < arr.length; y2 += 1) {
      sum2 += arr[y2];
    }
    if (sum1 === sum2) {
      result = i;
      break;
    } else {
      sum1 = 0;
      sum2 = 0;
    }
  }
  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let mat = [];
  for (let i = 0; i < size; i += 1) {
    for (let y = 0; y < size; y += 1) {
      mat[mat.length] = 0;
    }
    matrix[matrix.length] = mat;
    mat = [];
  }
  let count = 1;
  let n = 0;
  let counter = 0;
  while (count <= size ** 2) {
    for (let y = 0; y < size; y += 1) {
      if (matrix[n][y] === 0) {
        matrix[n][y] = count;
        count += 1;
      }
      if (matrix[0][y + 1] === undefined) {
        counter += 1;
        const matrix2 = [];
        let mat2 = [];
        for (let i2 = size - 1; i2 >= 0; i2 -= 1) {
          for (let y2 = 0; y2 < size; y2 += 1) {
            mat2[mat2.length] = matrix[y2][i2];
          }
          matrix2[matrix2.length] = mat2;
          mat2 = [];
        }
        for (let p = 0; p < size; p += 1) {
          matrix[p] = matrix2[p];
        }
      }
      if (counter === 4) {
        n += 1;
        counter = 0;
      }
    }
  }
  while (matrix[0][0] !== 1) {
    const matrix2 = [];
    let mat2 = [];
    for (let i2 = size - 1; i2 >= 0; i2 -= 1) {
      for (let y2 = 0; y2 < size; y2 += 1) {
        mat2[mat2.length] = matrix[y2][i2];
      }
      matrix2[matrix2.length] = mat2;
      mat2 = [];
    }
    for (let p = 0; p < size; p += 1) {
      matrix[p] = matrix2[p];
    }
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixRes = matrix;
  const matrix2 = [];
  let mat2 = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let y = matrix.length - 1; y >= 0; y -= 1) {
      mat2[mat2.length] = matrixRes[y][i];
    }
    matrix2[matrix2.length] = mat2;
    mat2 = [];
  }
  for (let p = 0; p < matrix.length; p += 1) {
    matrixRes[p] = matrix2[p];
  }
  return matrixRes;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const array = arr;
  const start1 = 0;
  const end1 = arr.length - 1;
  function separator(arr3, start, end) {
    const num = arr[end];
    let i = start;

    for (let j = start; j <= end - 1; j += 1) {
      if (arr3[j] <= num) {
        [array[i], array[j]] = [arr3[j], arr3[i]];
        i += 1;
      }
    }
    [array[i], array[end]] = [arr3[end], arr3[i]];
    return i;
  }

  function arrSort(arr2, start, end) {
    if (start < end) {
      const sep = separator(arr2, start, end);

      arrSort(arr2, start, sep - 1);
      arrSort(arr2, sep + 1, end);
    }
  }

  arrSort(array, start1, end1);

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let iter = iterations;
  let res1 = '';
  let res2 = '';
  let result = str;
  const cash = {};
  const cash2 = {};
  let countIter = 0;

  while (iter > 0) {
    for (let i = 0; i < result.length; i += 1) {
      if (i % 2 === 0) {
        res1 += result[i];
      } else res2 += result[i];
    }

    result = res1 + res2;

    iter -= 1;
    res1 = '';
    res2 = '';

    if (cash[result] && str.length > 2) {
      result = cash2[iterations % countIter];
      break;
    }
    countIter += 1;
    cash[result] = iterations - iter;
    cash2[iterations - iter] = result;
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = String(number);
  let str0 = '';
  let str2 = '';
  let num = '';
  let result = '';
  let minim = 10;

  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] < str[i + 1] && num.length === 0 && i < str.length - 1) {
      num = str[i];
    } else if (num.length === 0) str2 = str[i] + str2;
    else if (num.length > 0) str0 = str[i] + str0;
  }
  if (num.length > 0) {
    for (let i = 0; i < str2.length; i += 1) {
      if (str2[i] < minim && str2[i] > num) {
        minim = str2[i];
      }
    }
    result += str0;
    result += minim;
    let sort0 = '';
    for (let i = 0; i < str2.length; i += 1) {
      if (str2[i] < minim && str2[i] > num) {
        minim = str2[i];
      }
    }
    let count = 0;
    for (let i = 0; i < str2.length; i += 1) {
      if (str2[i] === minim && count === 0) {
        sort0 += num;
        count += 1;
      } else sort0 += str2[i];
    }
    const arr = [...sort0];
    for (let i = 1, l = arr.length; i < l; i += 1) {
      const current = arr[i];
      let j = i;
      while (j > 0 && arr[j - 1] > current) {
        arr[j] = arr[j - 1];
        j -= 1;
      }
      arr[j] = current;
    }
    for (let i = 0; i < arr.length; i += 1) {
      result += String(arr[i]);
    }
  } else {
    result = String(number);
  }
  return Number(result);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
