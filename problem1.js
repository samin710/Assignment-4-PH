function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  return (money * 1.75) / 100;
}

// console.log(cashOut(2000)); // Output: 35
// console.log(cashOut(2000.5)); // Output: 35
// console.log(cashOut(-100)); // Output: "Invalid"
// console.log(cashOut("1000")); // Output: "Invalid"
// console.log(cashOut([])); // Output: "Invalid"
