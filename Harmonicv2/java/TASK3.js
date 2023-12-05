document.addEventListener("DOMContentLoaded", function () {
  var image = document.querySelector('img');
  var redTint = false;

  // Click event to toggle red tint and change background color
  image.addEventListener('click', function () {
      redTint = !redTint;
      this.style.filter = redTint ? 'brightness(0.7)' : 'brightness(1)';
      
      // Change background color to a random RGB color
      ChangeRGBColor();
  });

  // Function to generate a random RGB color
  function ChangeRGBColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }
});
