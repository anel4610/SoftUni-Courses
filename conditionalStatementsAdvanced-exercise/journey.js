function journey(input) {
  const budget = Number(input[0]);
  const season = input[1];
  let priceHotelOrCamping = 0;

  if (budget <= 100) {
    if (season === "summer") {
      priceHotelOrCamping = budget * 0.3;
      console.log("Somewhere in Bulgaria");
      console.log(`Camp - ${priceHotelOrCamping.toFixed(2)}`);
    } else {
      priceHotelOrCamping = budget * 0.7;
      console.log("Somewhere in Bulgaria");
      console.log(`Hotel - ${priceHotelOrCamping.toFixed(2)}`);
    }
  } else if (budget > 100 && budget <= 1000) {
    if (season === "summer") {
      priceHotelOrCamping = budget * 0.4;
      console.log("Somewhere in Balkans");
      console.log(`Camp - ${priceHotelOrCamping.toFixed(2)}`);
    } else {
      priceHotelOrCamping = budget * 0.8;
      console.log("Somewhere in Balkans");
      console.log(`Hotel - ${priceHotelOrCamping.toFixed(2)}`);
    }
  } else {
    priceHotelOrCamping = budget * 0.9;
    console.log("Somewhere in Europe");
    console.log(`Hotel - ${priceHotelOrCamping.toFixed(2)}`);
  }
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["1500", "summer"]);
