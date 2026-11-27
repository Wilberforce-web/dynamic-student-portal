alert("Welcome to the Dynamic Student Portal!");
console.log("The portal script has loaded.");
let studentName = "Willy";
let yearOfStudy = 2;
if (yearOfStudy === 1) {
  console.log(studentName + " is a first-year student.");
} else if (yearOfStudy === 2) {
  console.log(studentName + " is a second-year student.");
} else {
  console.log(studentName + " is a senior student.");
}
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
const registrationForm = document.getElementById("registration-form");
if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    const nameField = document.getElementById("fullname");
    if (nameField.value.trim() === "") {
      alert("Please enter your full name.");
      event.preventDefault();
    }
  });
}
