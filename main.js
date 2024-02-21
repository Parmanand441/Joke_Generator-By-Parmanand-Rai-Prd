const setup = [
    "Why don't scientists trust atoms?",
    "Did you hear about the mathematician who's afraid of negative numbers?",
    "Why did the scarecrow win an award?",
    "How does a penguin build its house?"
  ];

  const punchline = [
    "Because they make up everything!",
    "He'll stop at nothing to avoid them!",
    "Because he was outstanding in his field!",
    "Igloos it together!"
  ];

  const jokeElement = document.getElementById('joke');
  const button = document.getElementById('generateJoke');

  button.addEventListener('click', generateJoke);

  function generateJoke() {
    const randomSetup = setup[Math.floor(Math.random() * setup.length)];
    const randomPunchline = punchline[Math.floor(Math.random() * punchline.length)];
    const joke = `${randomSetup} ${randomPunchline}`;
    jokeElement.textContent = joke;
  }