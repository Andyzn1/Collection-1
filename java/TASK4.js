document.querySelector('.element-r').addEventListener('click', function () {
    var randomSize = Math.random() * (1.5 - 0.8) + 0.8; // Adjust the range as needed
    this.style.transform = 'scale(' + randomSize + ')';
});
