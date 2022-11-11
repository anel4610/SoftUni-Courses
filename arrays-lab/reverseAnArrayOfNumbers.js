function reverseAnArrayOfNumbers(n, arr) {
  let newArr = [];
  let reversedArr = [];
  for (let i = 0; i < n; i++) {
    let element = arr[i];
    newArr.push(element);
  }
  for (let j = newArr.length - 1; j >= 0; j--) {
    let el = newArr[j];
    reversedArr.push(el);
  }
  console.log(reversedArr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
