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
function addStudentToPage(student) {
  const listItem = document.createElement("li");
  listItem.textContent =
    student.name + " - " + student.course + " (Year " + student.year + ")";
  document.getElementById("student-list").appendChild(listItem);
}
function displayAllStudents(students) {
  document.getElementById("error-message").textContent = "";
  document.getElementById("student-list").innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    addStudentToPage(students[i]);
  }
  document.getElementById("student-count").textContent =
    "Registered Students: " + students.length;
}
async function loadStudents() {
  try {
    const response = await fetch("wrong.json");
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const students = await response.json();
    displayAllStudents(students);
  } catch (error) {
    document.getElementById("error-message").textContent =
      "Unable to load student data. Please try again later.";
    console.error(error);
  }
}
const showButton = document.getElementById("show-students-btn");
if (showButton) {
  showButton.addEventListener("click", loadStudents);
}
