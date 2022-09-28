function areaOfFigures(input) {
  const type = input[0];
  let result = "";
  const a = Number(input[1]);

  if (type === "square") {
    result = a * a;
  } else if (type === "rectangle") {
    const b = Number(input[2]);
    result = a * b;
  } else if (type === "circle") {
    result = Math.PI * Math.pow(a, 2);
  } else {
    const b = Number(input[2]);
    result = (a * b) / 2;
  }
  console.log(result.toFixed(3));
}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
