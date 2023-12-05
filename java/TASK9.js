const track = document.getElementById("image-track");
let isMouseDown = false;
let initialMouseX = 0;
let initialPercentage = 0;

const handleOnDown = (e) => {
  isMouseDown = true;
  initialMouseX = e.clientX || e.touches[0].clientX;
  initialPercentage = parseFloat(track.dataset.percentage) || 0;
};

const handleOnUp = () => {
  isMouseDown = false;
};

const handleOnMove = (e) => {
  if (!isMouseDown) return;

  const mouseDelta = (e.clientX || e.touches[0].clientX) - initialMouseX;
  const maxDelta = window.innerWidth / 2;

  const percentageDelta = (mouseDelta / maxDelta) * 100;
  const nextPercentage = Math.max(Math.min(initialPercentage - percentageDelta, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.style.transform = `translate(${nextPercentage}%, -50%)`;

  const images = track.querySelectorAll(".image");
  images.forEach((image) => {
    image.style.objectPosition = `${100 + nextPercentage}% center`;
  });
};

window.addEventListener("mousedown", (e) => handleOnDown(e));
window.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));

window.addEventListener("mouseup", handleOnUp);
window.addEventListener("touchend", handleOnUp);

window.addEventListener("mousemove", (e) => handleOnMove(e));
window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
