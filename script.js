// Countdown functionality
const countdownElement = document.getElementById('countdown');

function countdown() {
  const targetDate = new Date('2023-12-31');
  const currentDate = new Date();

  const difference = targetDate.getTime() - currentDate.getTime();

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <span class="countdown-label">DAYS</span> <span class="countdown-numbers">${days}</span> 
      <span class="countdown-label">HOURS</span> <span class="countdown-numbers">${hours}</span>
      <span class="countdown-label">MINUTES</span> <span class="countdown-numbers">${minutes}</span>
      <span class="countdown-label">SECONDS</span> <span class="countdown-numbers">${seconds}</span>
    `;

  } else {
    countdownElement.textContent = 'Countdown has ended';
  }
}

countdown();
setInterval(countdown, 1000);


// Obtener todos los botones de toggle
const faqToggleBtns = document.querySelectorAll('.faq-toggle-btn');

// Agregar el evento de clic a cada botón de toggle
faqToggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Obtener el contenido del acordeón correspondiente al botón de toggle actual
    const faqContent = btn.nextElementSibling;

    // Alternar la visibilidad del contenido del acordeón
    faqContent.style.display = faqContent.style.display === 'none' ? 'block' : 'none';
  });
});
