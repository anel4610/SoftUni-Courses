function examPreparation(input) {
  let index = 0;
  let countBadGreades = Number(input[index++]);
  let command = input[index];
  let sumGreades = 0;
  let numOfProblems = 0;
  let numOfBadGreades = 0;
  let lastProblem = "";

  while (command !== "Enough") {
    numOfProblems++;
    lastProblem = input[index];
    index++;
    let currentGreades = Number(input[index]);
    sumGreades += currentGreades;
    if (currentGreades <= 4) {
      numOfBadGreades++;
    }
    if (numOfBadGreades === countBadGreades) {
      console.log(`You need a break, ${numOfBadGreades} poor grades.`);
      break;
    }
    index++;
    command = input[index];
  }
  let avgGreades = sumGreades / numOfProblems;
  if (command === "Enough") {
    console.log(`Average score: ${avgGreades.toFixed(2)}`);
    console.log(`Number of problems: ${numOfProblems}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
