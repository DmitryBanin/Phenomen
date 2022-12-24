const body = document.querySelector('body');
const collapsibleELements = body.querySelectorAll('.collapsible-button');
const burgerButton = body.querySelector('.burger__button');
const mobileMenu = body.querySelector('.mobile-menu');
const closeMenu = body.querySelector('.close-icon-menu');

burgerButton.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu--active');
  body.classList.add('hide-overflow');
});

closeMenu.addEventListener('click', function () {
  body.classList.remove('hide-overflow');
  mobileMenu.classList.remove('mobile-menu--active');
});

for (let i = 0; i < collapsibleELements.length; i++) {
  collapsibleELements[i].addEventListener('click', function () {
    this.classList.toggle('active');

    const collapsible = this.nextElementSibling;

    if (collapsible.style.maxHeight) {
      collapsible.style.maxHeight = null;
    } else {
      collapsible.style.maxHeight = collapsible.scrollHeight + 'px';
    }
  });
}
