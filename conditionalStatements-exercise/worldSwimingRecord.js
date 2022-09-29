function worldSwimingRecord(input) {
  const record = Number(input[0]);
  const meters = Number(input[1]);
  const secondsForOneMeter = Number(input[2]);

  const secondsAdded = Math.floor(meters / 15) * 12.5;
  const swimingTime = meters * secondsForOneMeter + secondsAdded;
  const totalTime = swimingTime + secondsAdded;

  if (swimingTime >= record) {
    const secondsSlower = swimingTime - record;
    console.log(
      `No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${swimingTime.toFixed(
        2
      )} seconds.`
    );
  }
}
worldSwimingRecord(["10464", "1500", "20"]);
worldSwimingRecord(["55555.67", "3017", "5.03"]);
