function add() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const sum = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + sum;
  }

  function sub() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const sum = num1 - num2;
    document.getElementById("result").innerHTML = "Result: " + sum;
  }

  function pro() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const sum = num1 * num2;
    document.getElementById("result").innerHTML = "Result: " + sum;
  }

  function div() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const sum = num1 / num2;
    document.getElementById("result").innerHTML = "Result: " + sum;
  }