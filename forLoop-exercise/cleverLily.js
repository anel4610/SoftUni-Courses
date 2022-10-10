function cleverLily(input) {
  let age = Number(input[0]);
  let priceWashingMashine = Number(input[1]);
  let priceToy = Number(input[2]);
  let toyCount = 0;
  let money = 0;
  let tempMoney = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      tempMoney += 10;

      money += tempMoney;
      money -= 1;
    } else {
      toyCount++;
    }
  }
  let totalMoney = toyCount * priceToy + money;
  let diff = Math.abs(totalMoney - priceWashingMashine);
  if (totalMoney >= priceWashingMashine) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}
cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);
