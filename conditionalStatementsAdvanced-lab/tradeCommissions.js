function tradeCommissions(input) {
  const town = input[0];
  const sale = Number(input[1]);
  let commission = 0;

  if (sale >= 0 && sale <= 500) {
    switch (town) {
      case "Sofia":
        commission = sale * 0.05;
        break;
      case "Varna":
        commission = sale * 0.045;
        break;
      case "Plovdiv":
        commission = sale * 0.055;
        break;
      default:
        commission = "error";
        break;
    }
  } else if (sale > 500 && sale <= 1000) {
    switch (town) {
      case "Sofia":
        commission = sale * 0.07;
        break;
      case "Varna":
        commission = sale * 0.075;
        break;
      case "Plovdiv":
        commission = sale * 0.08;
        break;
      default:
        commission = "error";
        break;
    }
  } else if (sale > 1000 && sale <= 10000) {
    switch (town) {
      case "Sofia":
        commission = sale * 0.08;
        break;
      case "Varna":
        commission = sale * 0.1;
        break;
      case "Plovdiv":
        commission = sale * 0.12;
        break;
      default:
        commission = "error";
        break;
    }
  } else if (sale > 10000) {
    switch (town) {
      case "Sofia":
        commission = sale * 0.12;
        break;
      case "Varna":
        commission = sale * 0.13;
        break;
      case "Plovdiv":
        commission = sale * 0.145;
        break;
      default:
        commission = "error";
        break;
    }
  } else {
    commission = "error";
  }
  if (commission !== "error") {
    console.log(commission.toFixed(2));
  } else {
    console.log("error");
  }
}
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
