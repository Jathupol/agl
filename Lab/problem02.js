function costToMakeEqual(a, b) {
    let cost = 0;
    let flipCost = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        if (flipCost > 0) {
          cost++;
          flipCost--;
        } else {
          flipCost++;
        }
      }
    }
  
    return cost + Math.abs(flipCost);
  }
  
  // Test cases
  console.log(costToMakeEqual("111", "000")); // Expected output: 3
  console.log(costToMakeEqual("0100", "1011")); // Expected output: 3
  