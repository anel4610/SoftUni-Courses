function basketballEquipment(input) {
  const yearTax = Number(input[0]);
  const trainersPrice = yearTax - 0.4 * yearTax;
  const suitPrice = trainersPrice - 0.2 * trainersPrice;
  const ballPrice = suitPrice / 4;
  const accessoriesPrice = ballPrice / 5;
  const totalPrice =
    trainersPrice + suitPrice + ballPrice + accessoriesPrice + yearTax;

  console.log(totalPrice);
}
basketballEquipment(["365 "]);
basketballEquipment(["550 "]);
