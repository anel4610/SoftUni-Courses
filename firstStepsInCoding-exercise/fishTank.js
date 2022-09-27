function fishTank(input) {
  const length = Number(input[0]);
  const width = Number(input[1]);
  const heigth = Number(input[2]);
  const percent = Number(input[3]) / 100;
  const fishTank = length * width * heigth;
  const liters = fishTank / 1000;
  const litersNeeded = liters * (1 - percent);
  console.log(litersNeeded);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
