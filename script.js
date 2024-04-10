function gcd(a, b) {
    while (b > 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  }
  
  function calculateGCD() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
      alert("Please enter valid positive integers.");
      return;
    }
  
    const gcdResult = gcd(num1, num2);
    document.getElementById("result").textContent = `The GCD of ${num1} and ${num2} is: ${gcdResult}`;
  }
  