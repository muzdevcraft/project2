// Program 1

function canVote(age) {

  if (age >= 18) {
    return "You are eligible to vote.";
  } 
  else {
    return "You are not eligible to vote.";
  }

}
let age = 18; 
console.log(canVote(age)); 