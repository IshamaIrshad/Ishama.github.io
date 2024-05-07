document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.filter_button button');
  const cards = document.querySelectorAll('.filterable_cards .card');

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const category = this.getAttribute('data-name');
          filterCards(category);
      });
  });

  function filterCards(category) {
      cards.forEach(card => {
          const dataName = card.getAttribute('data-name');
          if (category === 'all' || dataName === category) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }
});
