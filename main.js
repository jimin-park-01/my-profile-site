document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile-menu');
  const mobileLinks = document.querySelectorAll('.nav__mobile-menu a');

  if (toggleButton && mobileMenu) {
    // Toggle menu on button click
    toggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
      });
    });
  }
});
