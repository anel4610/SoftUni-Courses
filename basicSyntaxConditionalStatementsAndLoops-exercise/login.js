function login(input) {
  let username = input.shift();
  let password = username.split("").reverse().join("");
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element !== password) {
      count++;
      if (count === 4) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    } else {
      console.log(`User ${username} logged in.`);
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
