let howManyHundreds = function(num) {
  let numHundreds = num / 100
  let wholeNum = numHundreds - (numHundreds % 1);
  return wholeNum
  
}

