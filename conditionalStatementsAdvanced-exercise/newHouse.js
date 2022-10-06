function newHouse(input) {
  const typeFlower = input[0];
  const numFlower = Number(input[1]);
  const budget = Number(input[2]);
  const priceOfRoses = 5;
  const priceOfDahlias = 3.8;
  const priceOfTulips = 2.8;
  const priceOfNarcissus = 3;
  const priceOfGladiolus = 2.5;
  let totalMoney = 0;

  switch (typeFlower) {
    case "Roses":
      if (numFlower > 80) {
        totalMoney -= numFlower * priceOfRoses * 0.1;
      }
      totalMoney += numFlower * priceOfRoses;
      break;
    case "Dahlias":
      if (numFlower > 90) {
        totalMoney -= numFlower * priceOfDahlias * 0.15;
      }
      totalMoney += numFlower * priceOfDahlias;
      break;
    case "Tulips":
      if (numFlower > 80) {
        totalMoney -= numFlower * priceOfTulips * 0.15;
      }
      totalMoney += numFlower * priceOfTulips;
      break;
    case "Narcissus":
      if (numFlower < 120) {
        totalMoney += numFlower * priceOfNarcissus * 0.15;
      }
      totalMoney += numFlower * priceOfNarcissus;
      break;
    case "Gladiolus":
      if (numFlower < 80) {
        totalMoney += numFlower * priceOfGladiolus * 0.2;
      }
      totalMoney += numFlower * priceOfGladiolus;
      break;
  }
  let diff = Math.abs(budget - totalMoney);

  if (budget >= totalMoney) {
    console.log(
      `Hey, you have a great garden with ${numFlower} ${typeFlower} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);
