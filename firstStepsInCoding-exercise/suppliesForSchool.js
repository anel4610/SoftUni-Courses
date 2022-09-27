function suppliesForSchool(input) {
  const penPacsPrice = 5.8;
  const marcerPacsPrice = 7.2;
  const detergentPrice = 1.2;
  const penPacetNumber = Number(input[0]);
  const marcerPacetNumber = Number(input[1]);
  const detregentNumber = Number(input[2]);
  const discountPrice = Number(input[3]);
  const price =
    penPacetNumber * penPacsPrice +
    marcerPacetNumber * marcerPacsPrice +
    detregentNumber * detergentPrice;
  const totalPrice = price - (discountPrice / 100) * price;
  console.log(totalPrice);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
