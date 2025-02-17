function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }
  let mangoCount = 0,
    bananaCount = 0;

  for (let vote of votes) {
    if (vote === "mango") {
      mangoCount++;
    } else if (vote === "banana") {
      bananaCount++;
    }
  }
  if (mangoCount > bananaCount) {
    return "Mango";
  } else if (bananaCount > mangoCount) {
    return "Banana";
  }
  return "Draw";
}

// "Mango";
// "Draw";
// "Draw";
// "Mango";
// "Banana";
// "Invalid";
// "Invalid";
// "Mango";


// console.log(electionResult(["mango", "banana", "mango", "banana", "mango"]));
// console.log(electionResult([]));
// console.log(electionResult(["mango", "banana", "jaker party", "no"]));
// console.log(electionResult(["mango"]));
// console.log(electionResult(["banana", "banana", "age e valo chilam", "no"]));
// console.log(electionResult({ result: "mango , banana ,  mango" }));
// console.log(electionResult("mango , banana"));
// console.log(electionResult(["mango", "BananA", "na vote", "na vote"]));
// console.log(electionResult(["mango", "BananA", "na vote", "na vote"]));
// console.log(electionResult(5));
// console.log(electionResult([5]));

