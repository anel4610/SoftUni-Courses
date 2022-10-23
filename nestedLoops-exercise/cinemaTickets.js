function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;
  let totalTicket = 0;
  let studentTicket = 0;
  let kidTicket = 0;
  let standartTicket = 0;
  while (command !== "Finish") {
    let name = command;
    let freeSpace = input[index];
    index++;
    let tempCommand = input[index];
    index++;
    let tempTicket = 0;
    while (tempCommand !== "End") {
      tempTicket++;

      switch (tempCommand) {
        case "student":
          studentTicket++;
          break;
        case "standard":
          standartTicket++;
          break;
        case "kid":
          kidTicket++;
          break;
      }
      if (tempTicket >= freeSpace) {
        break;
      }
      tempCommand = input[index];
      index++;
    }
    console.log(
      `${name} - ${((tempTicket / freeSpace) * 100).toFixed(2)}% full.`
    );
    command = input[index];
    index++;
    totalTicket += tempTicket;
  }
  console.log(`Total tickets: ${totalTicket}`);
  console.log(
    `${((studentTicket / totalTicket) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standartTicket / totalTicket) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(`${((kidTicket / totalTicket) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
