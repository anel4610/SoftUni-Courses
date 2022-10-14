function sumOfTwoNumbers(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let magicNum = Number(input[2]);
  let counter = 0;
  let isFaund = false;
  for (let a = startNum; a <= endNum; a++) {
    for (let b = startNum; b <= endNum; b++) {
      let sum = a + b;
      counter++;
      if (sum === magicNum) {
        isFaund = true;
        console.log(`Combination N:${counter} (${a} + ${b} = ${magicNum})`);
        break;
      }
    }
    if (isFaund) {
      break;
    }
  }
  if (!isFaund) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
