function triplesOfLatinLetters(numToString) {
  let num = Number(numToString);
  let letter = "";

  for (let i = 97; i < 97 + num; i++) {
    let letter1 = String.fromCharCode([i]);

    for (let j = 97; j < 97 + num; j++) {
      let letter2 = String.fromCharCode([j]);

      for (let k = 97; k < 97 + num; k++) {
        let letter3 = String.fromCharCode([k]);
        console.log(`${letter1}${letter2}${letter3}`);
      }
    }
  }
}
triplesOfLatinLetters("3");
console.log("------------");
triplesOfLatinLetters(2);