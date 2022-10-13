function oldBooks(input) {
  let index = 0;
  let searchedBook = input[index++];
  let nextBook = input[index];
  let bookIsFound = false;

  while (nextBook !== "No More Books") {
    if (nextBook === searchedBook) {
      bookIsFound = true;
      break;
    }

    index++;
    nextBook = input[index];
  }
  if (bookIsFound) {
    console.log(`You checked ${index - 1} books and found it.`);
  } else {
    console.log("The book you search is not here!");
    console.log(`You checked ${index - 1} books.`);
  }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
