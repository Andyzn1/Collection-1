document.addEventListener('DOMContentLoaded', function () {
    setInterval(addIdleApples, 1000);
  
    function addIdleApples() {
      var screenSaveContainer = document.getElementById('screenSaver');
      if (screenSaveContainer.childElementCount < 50) {
        var newApple = document.createElement('img');
        newApple.src = "IMG/pigon.png"; // Change the image source as needed
        newApple.style.left = window.innerWidth * Math.random() + "px";
        newApple.style.top = "0";
        newApple.classList.add('idle');
        screenSaveContainer.appendChild(newApple);
      }
    }
  });
  