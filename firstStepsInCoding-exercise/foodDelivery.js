function foodDelivery(input) {
  const chickenmenuPrice = 10.35;
  const fishmenuPrice = 12.4;
  const veganmenuPrice = 8.15;
  const deliveryPrice = 2.5;
  const chickenmenuNumber = Number(input[0]);
  const fishmenunumber = Number(input[1]);
  const veganmenuNumber = Number(input[2]);
  const totalPrice =
    chickenmenuNumber * chickenmenuPrice +
    fishmenuPrice * fishmenunumber +
    veganmenuNumber * veganmenuPrice;
  const dessertPrice = totalPrice * 0.2;
  const totalSum = totalPrice + dessertPrice + deliveryPrice;
  console.log(totalSum);
}
foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
