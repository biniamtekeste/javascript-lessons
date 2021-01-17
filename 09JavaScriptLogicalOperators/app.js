let yourAge = prompt("What's your age?");
yourAge = Number(yourAge);
let membership = true;
let message = yourAge >= 18 ? "Allowed" : "Denied";
console.log(message);
if (yourAge >= 18 && membership) {
  console.log("You're a member, you've total access.");
} else {
  console.log("Sorry, you're not a member.");
}
