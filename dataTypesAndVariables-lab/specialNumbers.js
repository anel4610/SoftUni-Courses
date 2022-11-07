function specialNumbers(num) {
  let isSpecialNum = false;

  for (let i = 1; i <= num; i++) {
    let digit = i;
    let digitToString = String(digit);
    let sum = 0;
    if (num === 11 || num === 7 || num === 5) {
      isSpecialNum = true;
    } else {
      isSpecialNum = false;
    }

    for (let j = 0; j < digitToString.length; j++) {
      let element = Number(digitToString[j]);
      sum += element;

      if (sum === 11 || sum === 7 || sum === 5) {
        isSpecialNum = true;
      } else {
        isSpecialNum = false;
      }
    }
    if (isSpecialNum) {
      console.log(`${digit} -> True`);
    } else {
      console.log(`${digit} -> False`);
    }
  }
}
specialNumbers(15);
console.log("------------");
specialNumbers(20);
