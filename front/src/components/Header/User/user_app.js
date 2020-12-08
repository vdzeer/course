window.onload = function() {
  const userBlock = document.querySelector('.user');
  const dropdown = document.querySelector('.user-dropdown');

  userBlock.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });
}