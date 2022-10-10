function oscars(input) {
  let index = 0;
  let nameActor = input[index];
  index++;
  let points = Number(input[index]);
  index++;
  let countJury = Number(input[index]);
  index++;
  let tempPoints = 0;
  for (let i = 1; i <= countJury; i++) {
    let nameJury = input[index];
    index++;
    let pointsJury = Number(input[index]);
    index++;
    tempPoints = (nameJury.length * pointsJury) / 2;
    points += tempPoints;
    if (points > 1250.5) {
      console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
      break;
    }
  }
  let diff = Math.abs(1250.5 - points);
  if (points <= 1250.5) {
    console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
  }
}
oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
