function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }
  let countMango = 0,
    countBanana = 0;

  for (let vote of votes) {
    if (typeof vote !== "string") {
      return "Invalid";
    }
    if (vote === "mango") {
      countMango++;
    } else if (vote === "banana") {
      countBanana++;
    }
  }
  if (countMango > countBanana) {
    return "Mango";
  } else if (countBanana > countMango) {
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
// console.log(electionResult([["mango"]]));
