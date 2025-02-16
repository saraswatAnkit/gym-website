const switchToSignup = document.getElementById("switchToSignup");
const switchToLogin = document.getElementById("switchToLogin");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

const loginForm = document.querySelector(".login-container");
const signupForm = document.querySelector(".signup-container");

switchToSignup.addEventListener("click", () => {
  loginForm.style.opacity = "0";
  signupForm.style.opacity = "1";
  signupForm.style.zIndex = "2";
  loginForm.style.zIndex = "1";
});

switchToLogin.addEventListener("click", () => {
  signupForm.style.opacity = "0";
  loginForm.style.opacity = "1";
  loginForm.style.zIndex = "2";
  signupForm.style.zIndex = "1";
});

showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  switchToSignup.click();
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  switchToLogin.click();
});
