document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu a');
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, index * 100);

    item.addEventListener('click', function(event) {
      event.preventDefault();

      const sectionId = item.getAttribute('href').slice(1);
      const section = document.getElementById(sectionId);

      // Switch the show class for the section
      section.classList.toggle('show');

// Close other open sections
      menuItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherSectionId = otherItem.getAttribute('href').slice(1);
          const otherSection = document.getElementById(otherSectionId);
          otherSection.classList.remove('show');
        }
      });
    });
  });
});

function switchColor() {
  const terminal = document.getElementById('terminal');
  terminal.classList.toggle('dark-blue');

  const body = document.body;
  if (terminal.classList.contains('dark-blue')) {
    body.classList.add('dark-bg');
    document.documentElement.style.setProperty('--cursor-color', 'white');
  } else {
    body.classList.remove('dark-bg');
    document.documentElement.style.setProperty('--cursor-color', '#00FF00');
  }
}
