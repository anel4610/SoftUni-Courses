function sumOfOddNumbers(count) {
  let counter = 0;
  let sum = 0;
  for (let i = 1; i < 100; i++) {
    if (counter >= count) {
      break;
    }
    if (i % 2 !== 0) {
      counter++;
      sum += i;

      console.log(i);
    }
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);
