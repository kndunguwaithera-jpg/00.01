const button = document.getElementById('magic-button');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'The legendary lamp is glowing!';
});
