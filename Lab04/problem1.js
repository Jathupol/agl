//Problem 1: หาว่า N มีรากที่สองหรือป่าว

function hasSqrt(n) {
    const sqrtValue = n ** 0.5;
    return Math.floor(sqrtValue) === sqrtValue;
  }
  
  // Test cases
  console.log(hasSqrt(16)); // Output: true
  console.log(hasSqrt(20)); // Output: false
  