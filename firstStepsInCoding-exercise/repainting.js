function repainting(input) {
  const nylonPrice = 1.5;
  const paintPrice = 14.5;
  const thinnerPrice = 5;
  const bagsPrice = 0.4;
  const extraPaint = 0.1;
  const extranylon = 2;
  const nylonNumber = Number(input[0]);
  const paintNumber = Number(input[1]);
  const thinnerNumber = Number(input[2]);
  const hoursNumber = Number(input[3]);
  const nylonCost = (nylonNumber + extranylon) * nylonPrice;
  const paintCost = (paintNumber + paintNumber * extraPaint) * paintPrice;
  const thinnerCost = thinnerNumber * thinnerPrice;
  const totalPrice = nylonCost + paintCost + thinnerCost + bagsPrice;
  const workHour = 0.3 * totalPrice;
  const totalSum = workHour * hoursNumber + totalPrice;
  console.log(totalSum);
}
repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
