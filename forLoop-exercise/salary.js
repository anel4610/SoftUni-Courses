function salary(input) {
  let index = 0;
  let countOpenTabs = input[index];
  index++;
  let salary = input[index];
  index++;

  for (let i = 0; i <= countOpenTabs; i++) {
    let tempTabs = input[index];
    index++;

    if (tempTabs === "Facebook") {
      salary -= 150;
    } else if (tempTabs === "Instagram") {
      salary -= 100;
    } else if (tempTabs === "Reddit") {
      salary -= 50;
    }

    if (salary <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }
  if (salary > 0) {
    console.log(salary);
  }
}
salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
