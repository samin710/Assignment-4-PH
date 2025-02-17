function cashOut(money) {
  if (!Number.isInteger(money) || money < 0) {
    return "Invalid";
  }
  return (money * 1.75) / 100;
}
// console.log(cashOut("2000"))