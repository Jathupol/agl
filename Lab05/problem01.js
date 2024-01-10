function findRepeatedDnaSequences(s) {
    const sequences = new Map();
    const result = [];
  
    for (let i = 0; i <= s.length - 10; i++) {
      const sequence = s.substring(i, i + 10);
      sequences.set(sequence, (sequences.get(sequence) || 0) + 1);
    }
  
    for (let [key, value] of sequences.entries()) {
      if (value > 1) {
        result.push(key);
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); // Output: ["AAAAACCCCC","CCCCCAAAAA"]
  console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA")); // Output: ["AAAAAAAAAA"]
  console.log(findRepeatedDnaSequences("AAAAAAAAAA")); // Output: []
  