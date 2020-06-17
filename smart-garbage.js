const smartGarbage = function(trash, bins) { 
  for (let item in bins) {
    if (item === trash) {
      bins[trash] = bins[trash] + 1;
    }
  }
  console.log(bins)
}
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
