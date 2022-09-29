function godzillaVsKong(input) {
  const budget = Number(input[0]);
  const stuntman = Number(input[1]);
  const pricePerson = Number(input[2]);

  const decor = budget * 0.1;
  let totalPriceForClothes = pricePerson * stuntman;

  if (stuntman > 150) {
    totalPriceForClothes *= 0.9;
  }
  const totalMoney = decor + totalPriceForClothes;

  if (totalMoney > budget) {
    let moneyNeeded = totalMoney - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
  } else {
    let moneyLeft = budget - totalMoney;
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  }
}
godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
