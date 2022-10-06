function cinema(input) {
  const pricePremiere = 12.0;
  const priceNormal = 7.5;
  const priceDiscount = 5.0;
  const name = input[0];
  const row = Number(input[1]);
  const col = Number(input[2]);
  let res = 0;
  switch (name) {
    case "Premiere":
      res = row * col * pricePremiere;
      break;
    case "Normal":
      res = row * col * priceNormal;
      break;
    case "Discount":
      res = row * col * priceDiscount;
      break;
  }
  console.log(`${res.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
