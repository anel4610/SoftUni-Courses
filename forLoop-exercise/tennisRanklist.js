function tennisRanklist(input) {
  let index = 0;
  let countTour = Number(input[index]);
  index++;
  let startPoints = Number(input[index]);
  index++;
  let tempPoints = 0;
  let avgPoints = 0;
  let winTour = 0;

  for (let i = 0; i <= countTour; i++) {
    let stage = input[index];
    index++;
    switch (stage) {
      case "W":
        tempPoints += 2000;
        winTour++;
        break;
      case "F":
        tempPoints += 1200;
        break;
      case "SF":
        tempPoints += 720;
        break;
    }
  }
  avgPoints = tempPoints / countTour;
  let winTourPer = (winTour / countTour) * 100;
  let finalPoints = tempPoints + startPoints;
  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${Math.trunc(avgPoints)}`);
  console.log(`${winTourPer.toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
