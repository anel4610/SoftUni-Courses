function arrayRotation(arr, rotations) {
  rotations %= arr.length;
  for (let i = 0; i < rotations; i++) {
    let element = arr[i];
    element = arr.shift();
    arr.push(element);
  }
  console.log(arr.join(" "));
  
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
