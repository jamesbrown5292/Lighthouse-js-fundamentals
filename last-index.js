// define function last index of 
//takes an array and a value
// return the index 
//of the last time the value occurs in the array
//If the value never occurs, the function should return -1.
let ansArr = [];
function lastIndexOf(array, value){
  let index = -1;
  for (let i = 0; i <= array.length - 1; i++) {
    if(array[i] === value){
      ansArr.push(i);
      index = ansArr[ansArr.length - 1];
    } 
  }
  return index;
}
