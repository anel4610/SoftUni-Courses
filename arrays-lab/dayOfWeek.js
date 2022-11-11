function dayOfWeek(day) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return day >= 1 && day <= 7 ? days[day - 1] : "Invalid day!";
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
