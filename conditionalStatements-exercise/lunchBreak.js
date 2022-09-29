function lunchBreak(input) {
  const nameSelial = input[0];
  const timeSerial = Number(input[1]);
  const timeBreak = Number(input[2]);

  const timeLunch = (timeBreak * 1) / 8;
  const timeForRecreation = (timeBreak * 1) / 4;
  const remainingTime = timeBreak - timeLunch - timeForRecreation;
  const difference = Math.abs(remainingTime - timeSerial);
  if (remainingTime >= timeSerial) {
    console.log(
      `You have enough time to watch ${nameSelial} and left with ${Math.ceil(
        difference
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${nameSelial}, you need ${Math.ceil(
        difference
      )} more minutes.`
    );
  }
}
lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
