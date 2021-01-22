// After Refactoring

let findMissingNums = (inputArr) => {
  let prev = inputArr[0];
  const newArr = [];
  const sequence = findSequance(inputArr);

  // Return Array with missing numbers
  inputArr.map((item) => {
    item - prev === sequence
      ? (prev = item)
      : (newArr.push(item - sequence), (prev = item));
  });
  newArr.shift();
  return newArr;
};

//Return the sequance for any array
let findSequance = (arr) => {
  const seqArr = [];
  arr.map((_, i) => seqArr.push(arr[i] - arr[i - 1]));
  seqArr.shift();
  return Math.min(...seqArr);
};

let inputArr = [1, 3, 7, 9, 13, 19];
console.log(findMissingNums(inputArr));

// --------------------------------
// Before Refactoring

// var findMissingNums = (inputArr) => {
//   var newArr = [];
//   var prev = 0;
//   var sequnace;
//   inputArr.map((item, index) => {
//        if (index === 0) {
//       prev = item;
//       return;
//     }
//     if (index === 1) {
//       sequnace = item - prev;
//       prev = item;
//       return;
//     }
//     if (item - prev === sequnace) {
//       prev = item;
//       return;
//     }
//     if (item - prev !== sequnace) {
//       newArr.push(item - sequnace);
//       prev = item;
//     }
//   });
//    console.log(newArr);
// };

// let inputArr = [1, 3, 5, 9, 13];
// findMissingNums(inputArr);
