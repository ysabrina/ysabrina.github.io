const pauseButton = document.getElementById("pauseButton");
const buttonText = document.getElementById("buttonText");
let isPaused = false;

pauseButton.addEventListener("click", () => {
  isPaused = !isPaused;
  document.body.classList.toggle("paused", isPaused);

  // updating button class
  buttonText.textContent = isPaused ? "Play" : "Pause";
});