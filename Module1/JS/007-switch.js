// SWITCH STATEMENT SYNTAX
/*

switch(expression) {
    case value1:
        do this
        break
    case value2:
        do this
        break;
    case value3:
        do this;
        break;
    default:
}
*/

let grade = 0;
switch (grade) {
  case 0:
    console.log("Sorry, you've failed");
  case 1:
    console.log("Sorry, you've failed, try again");

  case 2:
    console.log("Sorry, you've failed, try again later");

  case 3:
    console.log("Congratulations, but there is room for improvement");

  case 4:
    console.log("Congratulations, this is a great score!");

  case 5:
    console.log("Congratulations, you aced it!");
    break;
  default:
    console.log("Error, there doesn't seem to be a match");
}
