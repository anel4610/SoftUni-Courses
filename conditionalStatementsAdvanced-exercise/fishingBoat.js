function fishingBoat(input) {
  const budget = Number(input[0]);
  const season = input[1];
  const countFisherman = Number(input[2]);

  const priceForSpring = 3000;
  const priceForSummerAndAutumn = 4200;
  const priceForWinter = 2600;
  let totalMoney = 0;
  switch (season) {
    case "Spring":
      totalMoney = priceForSpring;
      break;
    case "Summer":
    case "Autumn":
      totalMoney = priceForSummerAndAutumn;
      break;
    case "Winter":
      totalMoney = priceForWinter;
      break;
  }
  if (countFisherman <= 6) {
    totalMoney -= totalMoney * 0.1;
  } else if (countFisherman >= 7 && countFisherman <= 11) {
    totalMoney -= totalMoney * 0.15;
  } else if (countFisherman >= 12) {
    totalMoney -= totalMoney * 0.25;
  }

  if (countFisherman % 2 === 0 && season !== "Autumn") {
    totalMoney -= totalMoney * 0.05;
  }
  let diff = Math.abs(budget - totalMoney);
  if (budget >= totalMoney) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
