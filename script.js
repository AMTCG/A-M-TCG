/* Tmavý / svetlý mód */
function toggleMode() {
  document.body.classList.toggle("dark");
}

/* Scroll na galériu */
function scrollToGallery() {
  const gallery = document.querySelector('.grid');
  gallery.scrollIntoView({ behavior: 'smooth' });
}

/* TikTok presmerovanie */
function goToTikTok() {
  window.open("https://www.tiktok.com/@ampokemon", "_blank");
}
const cards = document.querySelectorAll('.card-bg');

// Presné štartové pozície (px od ľavého okraja)
const positions = [50, window.innerWidth/2, window.innerWidth - 130];

cards.forEach((card, index) => {
  // horizontálna pozícia podľa indexu
  card.style.left = positions[index] + 'px';
  
  // náhodná rýchlosť 5–15 sekúnd
  const randomDuration = 5 + Math.random() * 10;
  card.style.animationDuration = randomDuration + 's';
});
