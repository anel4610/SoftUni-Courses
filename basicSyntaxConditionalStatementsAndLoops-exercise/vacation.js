function vacation(group, type, day) {
  let totalPrice = 0;

  if (type === "Students") {
    if (day === "Friday") {
      totalPrice = group * 8.45;
    } else if (day === "Saturday") {
      totalPrice = group * 9.8;
    } else if (day === "Sunday") {
      totalPrice = group * 10.46;
    }
  } else if (type === "Business") {
    if (group >= 100) {
      group -= 10;
    }
    if (day === "Friday") {
      totalPrice = group * 10.9;
    } else if (day === "Saturday") {
      totalPrice = group * 15.6;
    } else if (day === "Sunday") {
      totalPrice = group * 16;
    }
  } else if (type === "Regular") {
    if (day === "Friday") {
      totalPrice = group * 15;
    } else if (day === "Saturday") {
      totalPrice = group * 20;
    } else if (day === "Sunday") {
      totalPrice = group * 22.5;
    }
  }
  if (type === "Students" && group >= 30) {
    totalPrice = totalPrice - (totalPrice * 15) / 100;
  }
  if (type === "Regular" && group >= 10 && group <= 20) {
    totalPrice = totalPrice - (totalPrice * 5) / 100;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
