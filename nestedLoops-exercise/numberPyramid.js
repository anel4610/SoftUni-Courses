function numberPyramid(input) {
  let num = Number(input[0]);
  let curNum = 0;
  let isEqual = false;
  for (let row = 1; row <= num; row++) {
    let printLine = "";
    for (let col = 1; col <= row; col++) {
      curNum++;
      printLine += curNum + " ";
      if (curNum === num) {
        isEqual = true;
        break;
      }
    }
    console.log(printLine);
    if (isEqual) {
      break;
    }
  }
}
numberPyramid(["7"]);
numberPyramid(["15"]);
