export function tabsButton() {
  const buttons = document.querySelectorAll('[data-button="button-size"]');

  if (buttons) {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card__wrapper--column');
        const cardButtons = card.querySelectorAll('[data-button="button-size"]');
        cardButtons.forEach(cardButton => {
          cardButton.classList.remove('card__size--js');
        });

        button.classList.add('card__size--js');
      });
    });
  }
}
