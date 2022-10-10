function trekkingMania(input) {
  let index = 0;
  let countGroup = Number(input[index]);
  index++;

  let musala = 0;
  let monblan = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;
  let totalPeople = 0;
  for (let i = 1; i <= countGroup; i++) {
    let countPeople = Number(input[index]);
    index++;

    if (countPeople <= 5) {
      musala += countPeople;
    } else if (countPeople >= 6 && countPeople <= 12) {
      monblan += countPeople;
      totalPeople += monblan;
    } else if (countPeople >= 13 && countPeople <= 25) {
      kilimandjaro += countPeople;
    } else if (countPeople >= 26 && countPeople <= 40) {
      k2 += countPeople;
    } else {
      everest += countPeople;
    }
  }
  totalPeople = musala + monblan + kilimandjaro + k2 + everest;
  console.log(`${((musala / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((monblan / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((kilimandjaro / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((k2 / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((everest / totalPeople) * 100).toFixed(2)}%`);
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);
