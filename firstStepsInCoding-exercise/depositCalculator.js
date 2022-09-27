function depositCalculator(input) {
  let depositSum = Number(input[0]);
  let timeMonth = Number(input[1]);
  let apr = Number(input[2]);
  let totalSum = depositSum + timeMonth * ((depositSum * apr) / 100 / 12);
  console.log(totalSum);
}
depositCalculator(["200 ", "3 ", "5.7 "]);
depositCalculator(["2350", "6 ", "7 "]);
