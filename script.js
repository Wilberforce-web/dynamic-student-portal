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
class Student {
  constructor(name, email, course, year) {
    this.name = name;
    this.email = email;
    this.course = course;
    this.year = year;
  }
  getSummary() {
    return (
      this.name +
      " (" +
      this.email +
      ") - " +
      this.course +
      ", Year " +
      this.year
    );
  }
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[A-Za-z\s]+$/;
const registrationForm = document.getElementById("registration-form");
if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    const nameValue = document.getElementById("fullname").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    if (nameValue === "") {
      alert("Please enter your full name.");
      event.preventDefault();
    } else if (!namePattern.test(nameValue)) {
      alert("Name may contain only letters and spaces.");
      event.preventDefault();
    } else if (!emailPattern.test(emailValue)) {
      alert(
        "Please enter a valid email address, for example name@example.com.",
      );
      event.preventDefault();
    }
  });
}
function addStudentToPage(student) {
  const listItem = document.createElement("li");
  listItem.textContent = student.getSummary();
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
    const response = await fetch("students.json");
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();
    const students = data.map(function (item) {
      return new Student(item.name, item.email, item.course, item.year);
    });
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
