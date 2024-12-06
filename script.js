window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
  
    // Check if AudioContext is needed
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
  
    function playMusic() {
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      audio.play();
    }
    
  
    // Start audio on user interaction
    document.body.addEventListener('click', playMusic, { once: true });
  });
  