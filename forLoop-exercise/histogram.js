function histogram(input) {
  let count = Number(input[0]);
  let index = 1;

  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;

  for (let i = 1; i <= count; i++) {
    let n = Number(input[index]);
    index++;
    if (n < 200) {
      p1Counter++;
    } else if (n >= 200 && n <= 399) {
      p2Counter++;
    } else if (n >= 400 && n <= 599) {
      p3Counter++;
    } else if (n >= 600 && n <= 799) {
      p4Counter++;
    } else {
      p5Counter++;
    }
  }
  let p1per = (p1Counter / count) * 100;
  let p2per = (p2Counter / count) * 100;
  let p3per = (p3Counter / count) * 100;
  let p4per = (p4Counter / count) * 100;
  let p5per = (p5Counter / count) * 100;

  console.log(`${p1per.toFixed(2)}%`);
  console.log(`${p2per.toFixed(2)}%`);
  console.log(`${p3per.toFixed(2)}%`);
  console.log(`${p4per.toFixed(2)}%`);
  console.log(`${p5per.toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
