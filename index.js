
// Event Handling
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = " Button was clicked!";
});
// Interactive Features
// Light/Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

// Collapsible FAQ
const faq = document.querySelector(".faq");
const question = faq.querySelector(".faq-question");
question.addEventListener("click", () => {
  faq.classList.toggle("active");
});
// Part 3: Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form submission
  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required!";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email!";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters!";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success Message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully!";
    form.reset();
  }
});
