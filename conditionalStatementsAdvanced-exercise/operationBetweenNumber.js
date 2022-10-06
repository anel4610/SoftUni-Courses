function operationBetweenNumber(input) {
  const N1 = Number(input[0]);
  const N2 = Number(input[1]);
  const operator = input[2];
  let result = 0;

  if (operator === "+") {
    result = N1 + N2;
    if (result % 2 === 0) {
      console.log(`${N1} ${operator} ${N2} = ${result} - even`);
    } else {
      console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
    }
  } else if (operator === "-") {
    result = N1 - N2;
    if (result % 2 === 0) {
      console.log(`${N1} ${operator} ${N2} = ${result} - even`);
    } else {
      console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
    }
  } else if (operator === "*") {
    result = N1 * N2;
    if (result % 2 === 0) {
      console.log(`${N1} ${operator} ${N2} = ${result} - even`);
    } else {
      console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
    }
  }
  if (operator === "/") {
    result = N1 / N2;
    if (N2 === 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
    }
  } else if (operator === "%") {
    result = N1 % N2;
    if (N2 === 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      console.log(`${N1} % ${N2} = ${result}`);
    }
  }
}
operationBetweenNumber(["10", "12", "+"]);
operationBetweenNumber(["123", "12", "/"]);
operationBetweenNumber(["7", "3", "*"]);
