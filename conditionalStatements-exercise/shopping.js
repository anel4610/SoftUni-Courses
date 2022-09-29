function shopping(input) {
  const budget = Number(input[0]);
  const videoCardsCount = Number(input[1]);
  const processorsCount = Number(input[2]);
  const ramMemoryCount = Number(input[3]);

  const videoCardsSum = videoCardsCount * 250;
  const processorsSum = processorsCount * (videoCardsSum * 0.35);
  const ramMemorySum = ramMemoryCount * (videoCardsSum * 0.1);
  let totalSum = videoCardsSum + processorsSum + ramMemorySum;
  if (videoCardsCount > processorsCount) {
    totalSum = totalSum - totalSum * 0.15;
  }
  const difference = Math.abs(budget - totalSum);

  if (totalSum <= budget) {
    console.log(`You have ${difference.toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${difference.toFixed(2)} leva more!`
    );
  }
}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
