let array = [];
let range = function (start, end, step) {
  if (start === undefined || end == undefined || step === undefined) {
  return array;
  } 
  else if (step <= 0) {
    return array;
  }
  else if (start < end) {
      for (let i = start; i <= end; i = i + step) {
        console.log(i);
        array.push(i);
      }
  } 
  else if (start > end) {
      for (let i = start; i >= end; i = i - step) {
        console.log(i);
        array.push(i);
      }
    } 
    return array;
  }
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));