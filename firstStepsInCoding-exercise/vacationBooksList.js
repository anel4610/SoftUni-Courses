function vacationBooksList(input) {
  let pages = Number(input[0]);
  let pagesHour = Number(input[1]);
  let day = Number(input[2]);
  let totalHour = pages / pagesHour;
  let hourDay = totalHour / day;
  console.log(hourDay);
}
vacationBooksList(["212 ", "20 ", "2 "]);
vacationBooksList(["432 ", "15 ", "4 "]);
