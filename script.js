// Countdown functionality
const countdownElement = document.getElementById('countdown');

function countdown() {
  const targetDate = new Date('2025-7-19');
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

// toggle buttons
const faqToggleBtns = document.querySelectorAll('.faq-toggle-btn');

// event
faqToggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // accordion
    const faqContent = btn.nextElementSibling;

    // Alt accordion
    faqContent.style.display = faqContent.style.display === 'none' ? 'block' : 'none';
  });
});
