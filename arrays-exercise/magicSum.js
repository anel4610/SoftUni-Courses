function magicSum(arr, sum) {
  let newArr = [];
  let pair = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (Number(arr[i]) + Number(arr[j]) === Number(sum)) {
        pair = `${arr[i]} ${arr[j]}`
        newArr.push(pair);
        
    }
  }
}
  console.log(newArr.join("\n"));

}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log("-------------");
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log("------------");
magicSum([1, 2, 3, 4, 5, 6], 6);
