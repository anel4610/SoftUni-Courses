function petShop(input) {
  let foodDogPrice = 2.5;
  let foodCatPrice = 4;
  let dogNum = Number(input[0]);
  let catNum = Number(input[1]);
  let totalPrice = foodDogPrice * dogNum + catNum * foodCatPrice;
  console.log(`${totalPrice} lv.`);
}
petShop(["5 ", "4 "]);
petShop(["13", "9"]);
