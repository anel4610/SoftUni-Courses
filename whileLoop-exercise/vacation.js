function vacation(input) {
  let neededmoney = Number(input[0]);
  let money = Number(input[1]);
  let index = 2;
  let dayCounter = 0;
  let daysSpend = 0;

  while (money < neededmoney) {
    let action = input[index];
    index++;
    let tempMoney = Number(input[index]);

    dayCounter++;
    switch (action) {
      case "spend":
        money -= tempMoney;
        if (money < 0) {
          money = 0;
        }
        daysSpend++;
        break;
      case "save":
        money += tempMoney;
        daysSpend = 0;
        break;
    }
    if (daysSpend >= 5) {
      console.log("You can't save the money.");
      console.log(`${dayCounter}`);
      break;
    }
    index++;
  }
  if (money >= neededmoney) {
    console.log(`You saved the money for ${dayCounter} days.`);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
