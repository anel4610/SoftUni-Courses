function skiTrip(input) {
  const priceRoomForOnePerson = 18;
  const priceApartment = 25;
  const pricePresidentApartment = 35;
  const days = Number(input[0]);
  const room = input[1];
  const mark = input[2];
  let totalPrice = 0;

  switch (room) {
    case "room for one person":
      totalPrice = priceRoomForOnePerson * (days - 1);
      break;
    case "apartment":
      totalPrice = priceApartment * (days - 1);
      if (days < 10) {
        totalPrice -= totalPrice * 0.3;
      } else if (days > 15) {
        totalPrice -= totalPrice * 0.5;
      } else {
        totalPrice -= totalPrice * 0.35;
      }
      break;
    case "president apartment":
      totalPrice = pricePresidentApartment * (days - 1);
      if (days < 10) {
        totalPrice -= totalPrice * 0.1;
      } else if (days > 15) {
        totalPrice -= totalPrice * 0.2;
      } else {
        totalPrice -= totalPrice * 0.15;
      }
  }
  if (mark === "positive") {
    totalPrice += totalPrice * 0.25;
  } else {
    totalPrice -= totalPrice * 0.1;
  }

  console.log(totalPrice.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
