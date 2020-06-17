const judgeVegetable = function (vegetables, characteristic) {
  let prevVal = 0;
  let currName = ""
  for (let i = 0; i < vegetables.length; i++){
    if (vegetables[i][characteristic] > prevVal){
      prevVal = vegetables[i][characteristic];
      currName = vegetables[i].submitter; 
    }
  }
  console.log(currName);
  return currName;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 20,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const characteristic = 'redness'

judgeVegetable(vegetables, characteristic);