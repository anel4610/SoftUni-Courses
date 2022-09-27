function usdToBgn(input) {
  let usd = Number(input[0]);
  let bgn = 1.79549 * usd;
  console.log(bgn);
}
usdToBgn(["22"]);
usdToBgn(["100"]);
usdToBgn(["12.5"]);
