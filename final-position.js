
  // array we will put results on
let finalPosition = function(array) {
  let x = 0;     //x axis, y axis starting points
  let y = 0; 
  let pos = [];      
  for (let item in array) {     //cycle through each item 
    let direction = array[item];  //the value of each item = direction
    switch (direction) {         // if...
    case 'north': 
      y = y + 1;
      break;      // direction is north add 1 to y axis
    case 'south': 
      y = y - 1;    // south y-1
      break;
    case 'east':
      x = x + 1;
      break;     // etc.. 
    case 'west':
      x = x - 1;
      break;
    }
  } 
  pos.push(x);
  pos.push(y);
  return pos;
  
}

