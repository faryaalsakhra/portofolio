const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
