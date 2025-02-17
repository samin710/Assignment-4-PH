function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }
  const size = email.length;

  if (
    email[0] === "." ||
    email[0] === "-" ||
    email[0] === "_" ||
    email[0] === "+" ||
    email[0] === "@" ||
    !email.includes("@") ||
    email.includes(" ") ||
    email[size - 1] !== "m" ||
    email[size - 2] !== "o" ||
    email[size - 3] !== "c" ||
    email[size - 4] !== "." ||
    email[size - 5] === "@"
  ) {
    return false;
  }

  return true;
}

true;
true;
false;
("Invalid");
true;
false;
false;
("Invalid");
false;
false;

// console.log(validEmail("ferdous@gmail.com"));
// console.log(validEmail("1zihad@gmail.com"));
// console.log(validEmail("-king@yahoo.com"));
// console.log(validEmail(["jhankar@hero.com"]));
// console.log(validEmail("Mewo@cat.com"));
// console.log(validEmail("programming-hero.com"));
// console.log(validEmail("chat420@gpt.net"));
// console.log(validEmail(true));
// console.log(validEmail("he ro@alom.com"));
// console.log(validEmail("samin@.com"));
// console.log(validEmail("s"));
// console.log(validEmail(5));
// console.log(validEmail(" samin@gmail. com"));
