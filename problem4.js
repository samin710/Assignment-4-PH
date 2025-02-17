function isBestFriend(f1, f2) {
  if (typeof f1 !== "object" || typeof f2 !== "object") {
    return "Invalid";
  }
  if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
    return true;
  }
  return false;
}

// true;
// false;
// ("Invalid");
// ("Invalid");
// true;

// console.log(
//   isBestFriend(
//     { name: "hashem", roll: 1, bestFriend: 2 },
//     { name: "kashem", roll: 2, bestFriend: 1 }
//   )
// );
// console.log(
//   isBestFriend(
//     { name: "hashem", roll: 21, bestFriend: 1 },
//     { name: "kashem", roll: 1, bestFriend: 2 }
//   )
// );
// console.log(
//   isBestFriend(
//     { name: "kashem", roll: 2, bestFriend: 11 },
//     "Kashem er Kono Bondhu Nai"
//   )
// );
// console.log(
//   isBestFriend("hashem", { name: "kashem", roll: 2, bestFriend: 11 })
// );
// console.log(
//   isBestFriend(
//     { name: "hashem", roll: 1, bestFriend: 1 },
//     { name: "kashem", roll: 1, bestFriend: 1 }
//   )
// );
// console.log(isBestFriend(5,5));
// console.log(isBestFriend("sa",5));
