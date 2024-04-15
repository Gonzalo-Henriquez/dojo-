const button = document.getElementById("but");
const counter = document.getElementById("counter");

button.addEventListener("click", () => {

  const currentCount = parseInt(counter.textContent);
  counter.textContent = currentCount + 1;
});