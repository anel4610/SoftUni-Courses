function amazingNumbers(num) {
  let numToString = String(num);
  let sum = 0;

  for (let i = 0; i < numToString.length; i++) {
    let currNum = Number(numToString[i]);
    sum += currNum;
  }
  let sumToString = String(sum);
  let isAmazing = false;
  for (let i = 0; i < sumToString.length; i++) {
    if (sumToString[i] === "9") {
      isAmazing = true;
      break;
    }
  }
  let amazing = isAmazing ? "True" : "False";
  console.log(`${num} Amazing? ${amazing}`);
}
amazingNumbers(1233);
amazingNumbers(999);
