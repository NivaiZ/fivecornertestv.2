export function itemСounting() {
  const allCardLists = document.querySelectorAll(".card__list--border");
  updateTotalPrice();
  allCardLists.forEach((cardList) => {
    const buttonPlus = cardList.querySelectorAll('[data-button="plus"]');
    const buttonMinus = cardList.querySelectorAll('[data-button="minus"]');
    const fieldQuantity = cardList.querySelectorAll('[data-quantity="count"]');
    const priceField = cardList.querySelectorAll('[data-quantity="price"]');

    if (
      buttonPlus.length > 0 &&
      buttonMinus.length > 0 &&
      fieldQuantity.length > 0 &&
      priceField.length > 0
    ) {
      for (let i = 0; i < buttonPlus.length; i++) {
        let quantity = 1;
        const priceText = priceField[i] ? priceField[i].textContent : "0";
        const price = parseInt(priceText.replace(/\D/g, ""));

        buttonPlus[i].addEventListener("click", () => {
          quantity++;
          if (fieldQuantity[i]) {
            fieldQuantity[i].textContent = quantity;
          }
          if (priceField[i]) {
            const newPrice = price * quantity;
            priceField[i].textContent = newPrice.toLocaleString("ru-RU") + " ₽";
          }
          updateTotalPrice();
        });

        buttonMinus[i].addEventListener("click", () => {
          if (quantity > 1) {
            quantity--;
            if (fieldQuantity[i]) {
              fieldQuantity[i].textContent = quantity;
            }
            if (priceField[i]) {
              const newPrice = price * quantity;
              priceField[i].textContent =
                newPrice.toLocaleString("ru-RU") + " ₽";
            }
            updateTotalPrice();
          }
        });
      }
    }
  });
}

export function updateTotalPrice() {
  const totalPrices = Array.from(document.querySelectorAll('[data-quantity="price"]')).map(el => {
    const priceText = el.textContent;
    return parseInt(priceText.replace(/\D/g, ''));
  });

  const totalPrice = totalPrices.reduce((acc, price) => acc + price, 0);

  const summaryPriceElement = document.querySelector('.summary__price');

  if (summaryPriceElement) {
    const summaryPriceText = summaryPriceElement.textContent;
    const summaryPrice = parseInt(summaryPriceText.replace(/\D/g, ''));

    // Добавляем значение из summary__price к общей сумме
    const total = totalPrice + summaryPrice;

    const totalFinalElement = document.querySelector('.total__final');

    if (totalFinalElement) {
      totalFinalElement.textContent = total.toLocaleString('ru-RU') + ' ₽';
    }
  }
}

// Вызываем функцию для первичного подсчета
updateTotalPrice();
