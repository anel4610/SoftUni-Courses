function addAndSubtract(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let element = Number(arr[i]);
    if (element % 2 === 0) {
      element += i;
      newArr.push(element);
    } else {
      element -= i;
      newArr.push(element);
    }
  }
  console.log(newArr);
  let sumArr = 0;
  let sumNewArr = 0;
  for (let n of arr) {
    sumArr += n;
  }
  for (let n of newArr) {
    sumNewArr += n;
  }
  console.log(sumArr);
  console.log(sumNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
