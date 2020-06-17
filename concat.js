//Define a function called concat
// function should, when given two arrays, 
//concatenate the arrays together
// will require a third empty arra to put items from 1 then 2 on

function concat (array1, array2) {
  let emptyArray = []
  for (let each in array1) {
    emptyArray.push(array1[each]);
  };
  for (each in array2) {
    emptyArray.push(array2[each]);
  }
  return emptyArray;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
