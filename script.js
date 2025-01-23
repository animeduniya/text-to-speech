document.getElementById('speakBtn').addEventListener('click', function() {
  const text = document.getElementById('text').value;
  
  if (text === '') {
    alert('Please enter some text.');
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US';
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
