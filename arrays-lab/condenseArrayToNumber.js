function condenseArrayToNumber(arr) {
  while (arr.length > 1) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let firstEl = arr[i];
      let secondEl = arr[i + 1];
      let sum = firstEl + secondEl;
      newArr.push(sum);
    }
    arr = newArr;
  }
  console.log(arr.join(" "));
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
