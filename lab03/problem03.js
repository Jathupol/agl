function findMaxProduct(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    
    // หาผลคูณของตัวเลขสองตัวสุดท้ายของ Array ที่เรียงลำดับแล้ว
    const product1 = arr[n - 1] * arr[n - 2];
  
    // หาผลคูณของตัวเลขสองตัวแรกและตัวเลขที่น้อยที่สุดใน Array ที่เรียงลำดับแล้ว (อาจจะเป็นค่าลบ)
    const product2 = arr[0] * arr[1];
  
    // เปรียบเทียบและคืนค่าผลคูณที่มากที่สุด
    return Math.max(product1, product2);
  }
  
  // Test cases
  console.log(findMaxProduct([-1, 6, 2, 5, 7])); // Output: 42
  