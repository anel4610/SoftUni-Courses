function projectsCreation(input) {
  let name = input[0];
  let projectsNum = Number(input[1]);
  let timeOne = 3;
  let timeResult = projectsNum * timeOne;
  console.log(
    `The architect ${name} will need ${timeResult} hours to complete ${projectsNum} project/s.`
  );
}
projectsCreation(["George ", "4 "]);
projectsCreation(["Sanya ", "9 "]);
