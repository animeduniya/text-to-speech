document.getElementById('speakBtn').addEventListener('click', function() {
  const text = document.getElementById('text').value;
  const language = document.getElementById('language').value;

  if (text === '') {
    alert('Please enter some text.');
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = language;
  window.speechSynthesis.speak(speech);
});

document.getElementById('theme').addEventListener('change', function() {
  const theme = this.value;
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark-mode');
  } else {
    root.classList.remove('dark-mode');
  }
});

document.getElementById('bg-options').addEventListener('change', function() {
  const bgOption = this.value;
  const body = document.body;

  if (bgOption === 'anime') {
    body.style.backgroundImage = 'url("https://images.hdqwalls.com/download/power-lines-moon-anime-quite-night-4k-pb-3840x2160.jpg")';
    body.style.backgroundColor = '';
  } else if (bgOption === 'rgb') {
    body.style.backgroundImage = '';
    body.style.backgroundColor = 'rgb(255, 200, 200)'; // Example RGB color
  } else {
    body.style.backgroundImage = '';
    body.style.backgroundColor = '';
  }
});
