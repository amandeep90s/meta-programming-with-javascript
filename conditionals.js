// If else statement
var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

// Switch statement
var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Chest Workout");
    break;
  case "Tuesday":
    console.log("Bicep Workout");
    break;
  case "Wednesday":
    console.log("Tricep Workout");
    break;
  case "Thursday":
    console.log("Shoulder Workout");
    break;
  case "Friday":
    console.log("Back Workout");
    break;
  case "Saturday":
    console.log("Leg Workout");
    break;
  case "Sunday":
    console.log("Cardio or Rest Day");
    break;

  default:
    console.log("There is no such day");
    break;
}
