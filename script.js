function launchConfettiAndMessage() {
    launchConfetti();
    showDecorativeMessage();
  }
  
  function launchConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    confettiContainer.innerHTML = ''; // Clear previous confetti
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.animationDelay = `${Math.random()}s`;
      confettiContainer.appendChild(confetti);
    }
  }
  
  function getRandomColor() {
    const colors = ['#ff9f00', '#c41230', '#fff', '#f7e7cf'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function showDecorativeMessage() {
    const message = document.getElementById('decorativeMessage');
    message.textContent = '¡ Caroline Recibiras sorpresas explosivas de felicidad y éxito! llora de la felicidad que te ves bonita 🎉🥳';
    message.style.display = 'block';
  
    // Hide the message after 3 seconds
    setTimeout(() => {
      message.style.display = 'none';
    }, 3000);
  }
  