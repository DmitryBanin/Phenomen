const collapsibleELements = document.getElementsByClassName('collapsible');
const contentELements = document.getElementsByClassName('content');

for (let i = 0; i < collapsibleELements.length; i++) {
  collapsibleELements[i].addEventListener('click', function () {
    this.classList.toggle('active');
    this.classList.toggle('addMarginBottom');

    const collapsible = this.nextElementSibling;
    const content = this.nextElementSibling;

    if (collapsible.style.maxHeight) {
      collapsible.style.maxHeight = null;
      content.style.marginBottom = null;
    } else {
      collapsible.style.maxHeight = collapsible.scrollHeight + 'px';
      content.style.marginBottom = '25px';
    }
  });
}

// .nextElementSibling
// .maxHeight
// .scrollHeight
// .style
