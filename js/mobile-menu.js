const body = document.querySelector('body');
const collapsibleElements = body.querySelectorAll('.collapsible-button');
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

collapsibleElements.forEach((element) => {
  element.addEventListener('click', function () {
    element.classList.toggle('active');

    const collapsible = element.nextElementSibling;

    if (collapsible.style.maxHeight) {
      collapsible.style.maxHeight = null;
    } else {
      collapsible.style.maxHeight = collapsible.scrollHeight + 'px';
    }
  });
});
