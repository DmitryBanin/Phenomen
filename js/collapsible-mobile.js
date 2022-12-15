const collapsibleELements =
  document.getElementsByClassName('collapsible-button');

for (let i = 0; i < collapsibleELements.length; i++) {
  collapsibleELements[i].addEventListener('click', function (evt) {

    this.classList.toggle('active');

    const collapsible = this.nextElementSibling;

    if (collapsible.style.maxHeight) {
      collapsible.style.maxHeight = null;
    } else {
      collapsible.style.maxHeight = collapsible.scrollHeight + 'px';
    }
  });
}

// .nextElementSibling
// .maxHeight
// .scrollHeight
// .style
