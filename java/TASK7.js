document.addEventListener('DOMContentLoaded', function () {
    const songLyrics = [
      "I'm on the highway to hell.",
      "Sweet Caroline, good times never seemed so good.",
      "Somebody once told me the world is gonna roll me.",
      "I bless the rains down in Africa.",
      "Just a small town girl, living in a lonely world.",
      "Don't stop believin', hold on to that feelin'.",
      "Like a rolling stone, I'm just a rolling stone.",
      "It's a beautiful day, don't let it get away.",
      "Every breath you take, every move you make.",
      "Woke up this morning feeling fine, there's something special on my mind.",
      "Here comes the sun, doo-doo-doo-doo.",
      "Hey Jude, don't make it bad, take a sad song and make it better.",
      "I wanna dance with somebody, I wanna feel the heat with somebody.",
      "Imagine all the people living life in peace.",
      "All you need is love, love, love is all you need.",
      "I'm a genie in a bottle, you gotta rub me the right way.",
      "Every little thing she does is magic.",
      "Hello, it's me, I was wondering if after all these years you'd like to meet.",
      "Smells like teen spirit in here.",
      "Wake me up before you go-go, don't leave me hanging on like a yo-yo.",
    ];
  
    function getRandomLyric() {
      const randomIndex = Math.floor(Math.random() * songLyrics.length);
      return songLyrics[randomIndex];
    }
  
    async function typeRandomLyric() {
      const randomLyric = getRandomLyric();
      const randomTypingDiv = document.getElementById('random-typing');
  
      for (let i = 0; i < randomLyric.length; i++) {
        const letterElement = document.createElement('span');
        letterElement.textContent = randomLyric[i];
        randomTypingDiv.appendChild(letterElement);
  
        // Add a small delay to simulate typing speed
        await new Promise(resolve => setTimeout(resolve, 50));
      }
  
      // Add a line break after typing a complete line
      const lineBreak = document.createElement('div');
      randomTypingDiv.appendChild(lineBreak);
    }
  
    document.addEventListener('click', function () {
      // Generate a new line of lyrics
      typeRandomLyric();
    });
  });
  