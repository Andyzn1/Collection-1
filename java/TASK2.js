const CONTAINER_SIZE = 540;
const SKIP_FIRST_N = 8;
const LINE_SPACING = 7;
const CHARACTER_SPACING = 5;
const ROTATION_JITTER = 0.3;

const outerContainer = document.querySelector(".outer");
const innerContainer = document.querySelector(".inner");
outerContainer.style.height = innerContainer.style.height = outerContainer.style.width = innerContainer.style.width = `${CONTAINER_SIZE}px`;

const characters = `${innerContainer.textContent.trim()} `.
repeat(200).
slice(0, -1).
split("").
map((char, i) => {
  i += SKIP_FIRST_N; // Leave space in the very center.
  const span = document.createElement("span");
  const amplitude = Math.pow(i, 0.5) * LINE_SPACING;
  const theta = Math.pow(i * CHARACTER_SPACING, 0.5);
  const x = `${CONTAINER_SIZE / 2 + amplitude * Math.cos(theta)}px`;
  const y = `${CONTAINER_SIZE / 2 + amplitude * Math.sin(theta)}px`;
  span.textContent = char;
  span.style.left = x;
  span.style.top = y;
  span.style.transform = `translate(-50%, -50%) rotate(${
  theta + (Math.random() - 0.5) * ROTATION_JITTER + Math.PI / 2
  }rad)`;
  return span;
});

innerContainer.replaceChildren(...characters);
outerContainer.style.visibility = "visible";