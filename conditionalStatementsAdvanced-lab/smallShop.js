function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let num = Number(input[2]);
  let sum = 0;
  if (city === "Sofia") {
    switch (product) {
      case "coffee":
        sum = num * 0.5;
        break;
      case "water":
        sum = num * 0.8;
        break;
      case "beer":
        sum = num * 1.2;
        break;
      case "sweets":
        sum = num * 1.45;
        break;
      case "peanuts":
        sum = num * 1.6;
        break;
    }
  } else if (city === "Plovdiv") {
    switch (product) {
      case "coffee":
        sum = num * 0.4;
        break;
      case "water":
        sum = num * 0.7;
        break;
      case "beer":
        sum = num * 1.15;
        break;
      case "sweets":
        sum = num * 1.3;
        break;
      case "peanuts":
        sum = num * 1.5;
        break;
    }
  } else if (city === "Varna") {
    switch (product) {
      case "coffee":
        sum = num * 0.45;
        break;
      case "water":
        sum = num * 0.7;
        break;
      case "beer":
        sum = num * 1.1;
        break;
      case "sweets":
        sum = num * 1.35;
        break;
      case "peanuts":
        sum = num * 1.55;
        break;
    }
  }
  console.log(sum.toFixed(1));
}
smallShop(["coffee", "Varna", "2"]);
smallShop(["beer", "Sofia", "6"]);
