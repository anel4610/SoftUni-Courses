function rightPlace(str, char, secondStr) {
  let result = str.replace("_", char);
  if (result === secondStr) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
