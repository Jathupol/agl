function minStep(x) {
    let count = 0;
    
    while (x > 0) {
      if (x >= 5) {
        x -= 5;
      } else if (x >= 4) {
        x -= 4;
      } else if (x >= 3) {
        x -= 3;
      } else if (x >= 2) {
        x -= 2;
      } else {
        x -= 1;
      }
      count++;
    }
    
    return count;
  }
  
  console.log(minStep(14)); //  3
  console.log(minStep(3)); //  1
  