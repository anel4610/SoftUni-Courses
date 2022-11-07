function integerAndFloat(a, b, c) {
  let result = a + b + c;

  if (result % 1 === 0) {
    console.log(result + " - Integer");
  } else {
    console.log(result + " - Float");
  }
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
