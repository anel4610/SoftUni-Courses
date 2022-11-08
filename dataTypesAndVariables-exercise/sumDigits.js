function sumDigits(num) {
  let numToStr = num.toString();
  let sum = 0;
  for (let i = 0; i < numToStr.length; i++) {
    let element = numToStr[i];
    sum += Number(element);
  }
  console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
