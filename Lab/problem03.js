function isEBNB(num) {
    let sum = 0;
    let oddCount = 0;
  
    while (num > 0) {
      let digit = num % 10;
      sum += digit;
  
      if (digit % 2 !== 0) {
        oddCount++;
      }
  
      num = Math.floor(num / 10);
    }
  
    return sum % 2 === 0 && oddCount > 0 && sum % 2 !== 0;
  }
  
  function deleteDigitToEBNB(n) {
    let digits = n.toString().split('').map(Number);
    let sum = digits.reduce((acc, curr) => acc + curr, 0);
  
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] % 2 !== 0) {
        sum -= digits[i];
        if ((sum + digits[i]) % 2 === 0 && digits[i] !== 0) {
          digits.splice(i, 1);
          return +digits.join('');
        }
        sum += digits[i];
      }
    }
  
    return -1;
  }
  
  function calculateEBNB(n) {
    if (isEBNB(n)) {
      return n;
    }
  
    return deleteDigitToEBNB(n);
  }
  
console.log(calculateEBNB(1227)); // Output: 1227
console.log(calculateEBNB(12)); // Output: -1
console.log(calculateEBNB(177013)); // Output: 17703 (หรือตัวเลข EBNB อื่นที่เป็นไปได้)


  
