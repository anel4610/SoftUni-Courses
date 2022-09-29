function sumSeconds(input) {
  const firstTime = Number(input[0]);
  const secondTime = Number(input[1]);
  const thirdTime = Number(input[2]);
  const totalTime = firstTime + secondTime + thirdTime;
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
