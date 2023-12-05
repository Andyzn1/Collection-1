document.addEventListener('DOMContentLoaded', () => {
  const container = document.body;
  const objectCount = 6;

  function createFallingObject(imageSrc) {
    const object = document.createElement('img');
    object.src = imageSrc;
    object.classList.add('falling-object');
    object.style.left = `${Math.random() * window.innerWidth}px`;

    // Set a random rotation angle in degrees
    const randomRotation = Math.random() * 360;
    object.style.transform = `rotate(${randomRotation}deg)`;

    container.appendChild(object);

    const animation = object.animate(
      [{ transform: `translate(0, -100vh) rotate(${randomRotation}deg)` }, { transform: `translate(0, ${window.innerHeight}px) rotate(${randomRotation}deg)` }],
      { duration: 3000, iterations: 1 }
    );

    animation.onfinish = () => {
      container.removeChild(object);
      createFallingObject(imageSrc);
    };
  }

  // Customize the images as needed
  const images = [
    'https://www.understandinghealthresearch.org/media/introduction_copy1.png',
    'https://www.understandinghealthresearch.org/media/abstract.png',
    'https://woodsholemuseum.org/wordpress/what-to-write-in-a-research-paper/?img_tkb=what+to+write+in+a+research+paper.png', // Add a comma here
    'https://www.understandinghealthresearch.org/media/introduction_copy1.png',
    'https://www.understandinghealthresearch.org/media/abstract.png',
    'https://woodsholemuseum.org/wordpress/what-to-write-in-a-research-paper/?img_tkb=what+to+write+in+a+research+paper.png'
  ];

  for (let i = 0; i < objectCount; i++) {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    createFallingObject(randomImage);
  }
});
