document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 0 20px #ff00ff';
  });
  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
  });
});
