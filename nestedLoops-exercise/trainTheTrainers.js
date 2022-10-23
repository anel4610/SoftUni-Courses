function trainTheTrainers(input) {
  let index = 0;
  let countJury = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let totalSumGrade = 0;
  let counter = 0;

  while (command !== "Finish") {
    let name = command;
    let sumGrade = 0;
    counter++;
    for (let i = 0; i < countJury; i++) {
      let tempGrade = Number(input[index]);
      index++;
      sumGrade += tempGrade;
    }
    let tempAvgGrade = sumGrade / countJury;
    totalSumGrade += tempAvgGrade;
    console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
    command = input[index];
    index++;
  }
  let avgGrade = totalSumGrade / counter;
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
console.log("------------------");
trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
