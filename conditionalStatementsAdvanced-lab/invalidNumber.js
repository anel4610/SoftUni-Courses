function invalidNumber(input) {
  const num = Number(input[0]);
  let isValid = (num >= 100 && num <= 200) || num === 0;
  if (!isValid) {
    console.log("invalid");
  }
}
invalidNumber(["75"]);
invalidNumber(["150"]);
invalidNumber(["-1"]);