function isValid(s) {
    const stack = [];
    const parentheses = { '(': ')', '{': '}', '[': ']' };
  
    for (let char of s) {
      if (parentheses[char]) {
        stack.push(char);
      } else {
        const openParentheses = stack.pop();
        if (char !== parentheses[openParentheses]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Test cases
  console.log(isValid("()")); // Output: true
  console.log(isValid("()[]{}")); // Output: true
  console.log(isValid("(]")); // Output: false
  console.log(isValid("{[]}")); // Output: true
  