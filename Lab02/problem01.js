function longestDuplicateSubstring(str) {
    let longest = '';
    const n = str.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const sub = str.slice(i, j);
        const count = countSubstring(str, sub);
  
        if (count >= 2 && sub.length > longest.length) {
          longest = sub;
        }
      }
    }
  
    return longest.length >= 2 ? longest : 'Not Found';
  }
  
  function countSubstring(str, sub) {
    const regex = new RegExp(sub, 'g');
    return (str.match(regex) || []).length;
  }
  
  // Test cases
  console.log(longestDuplicateSubstring("abcab")); // Output: 'ab'
  console.log(longestDuplicateSubstring("abc")); // Output: 'Not Found'
  