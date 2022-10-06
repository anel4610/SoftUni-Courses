function hotelRoom(input) {
  const month = input[0];
  const nights = Number(input[1]);
  const mayAndOctoberPriceStudio = 50;
  const mayAndOctoberPriceApartment = 65;
  const juneAndSeptemberPriceStudio = 75.2;
  const juneAndSeptemberPriceApartment = 68.7;
  const julyAndAugustPriceStudio = 76;
  const julyAndAugustPriceApartment = 77;
  let totalPriceStudio = 0;
  let totalPriceApartment = 0;

  switch (month) {
    case "May":
    case "October":
      totalPriceStudio = nights * mayAndOctoberPriceStudio;
      totalPriceApartment = nights * mayAndOctoberPriceApartment;
      if (nights > 7 && nights < 14) {
        totalPriceStudio -= totalPriceStudio * 0.05;
      } else if (nights > 14) {
        totalPriceStudio -= totalPriceStudio * 0.3;
      }
      break;
    case "June":
    case "September":
      totalPriceStudio = nights * juneAndSeptemberPriceStudio;
      totalPriceApartment = nights * juneAndSeptemberPriceApartment;
      if (nights > 14) {
        totalPriceStudio -= totalPriceStudio * 0.2;
      }
      break;
    case "July":
    case "August":
      totalPriceStudio = nights * julyAndAugustPriceStudio;
      totalPriceApartment = nights * julyAndAugustPriceApartment;
      break;
  }
  if (nights > 14) {
    totalPriceApartment -= totalPriceApartment * 0.1;
  }
  console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
