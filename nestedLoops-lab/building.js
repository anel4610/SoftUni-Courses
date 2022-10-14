function building(input) {
  let floor = Number(input[0]);
  let room = Number(input[1]);

  for (let i = floor; i > 0; i--) {
    let res = "";
    for (let j = 0; j < room; j++) {
      if (i === floor) {
        res += `L${i}${j} `;
      } else if (i % 2 === 0) {
        res += `O${i}${j} `;
      } else {
        res += `A${i}${j} `;
      }
    }
    console.log(res);
  }
}
building(["6", "4"]);
console.log("-----------")
building(["9", "5"]);
