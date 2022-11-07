function requiredReading(totalPages, pagesForOneHour, days) {
  let totalHours = totalPages / pagesForOneHour;
  let hoursDay = totalHours / days;

  console.log(hoursDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
