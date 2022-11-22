function maxNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let firstEl = Number(arr[i]);
    let isTopInteger = true;
    for (let j = i + 1; j < arr.length; j++) {
      let secondEl = Number(arr[j]);
      if (firstEl <= secondEl) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      newArr.push(firstEl);
    }
  }
  console.log(newArr.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
