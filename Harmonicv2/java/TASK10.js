document.addEventListener("DOMContentLoaded", function () {
    // Initialize Howler.js
    var sound = new Howl({
        src: ["./IMG/Scenery.mp3"],
        autoplay: true,
        loop: true,
        volume: 0.5, // Adjust as needed
        onplay: function () {
            // Create falling objects on sound play
            setInterval(createFallingObject, 1000); // Create a falling object every second
        }
    });

    // Function to create falling objects
    function createFallingObject() {
        var object = document.createElement("div");
        object.className = "falling-object";
        object.style.left = Math.random() * window.innerWidth + "px";
        document.querySelector('.div').appendChild(object);

        // Remove the object after a delay
        setTimeout(function () {
            object.remove();
        }, 3000); // Remove the object after 3 seconds (adjust as needed)
    }
});
