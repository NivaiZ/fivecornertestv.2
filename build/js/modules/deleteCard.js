export function deleteCard() {
  const deleteButtons = document.querySelectorAll('[data-button="delete"]');
  console.log(deleteButtons);

  deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', () => {
      // Находим ближайший элемент с атрибутом data-card="card" для конкретной кнопки
      const card = deleteButton.closest('[data-card="card"]');
      console.log(card);

      // Находим ближайший элемент с атрибутом data-hidden="card" для конкретной кнопки
      const hiddenCard = document.querySelector('[data-hidden="card"]');
      console.log(hiddenCard);

      // Проверяем, есть ли такие элементы
      if (card && hiddenCard) {
        // Сохраняем исходное HTML-содержимое data-card="card" в виде строки
        const originalCardContents = card.innerHTML;

        // Заменяем содержимое элемента с атрибутом data-card="card" на содержимое элемента с атрибутом data-hidden="card"
        card.innerHTML = hiddenCard.innerHTML;
        card.classList.add('empty__wrapper--js');

        // Находим кнопку восстановления внутри текущей карточки
        const recoveryButton = card.querySelector('[data-button="recovery"]');

        if (recoveryButton) {
          recoveryButton.addEventListener('click', () => {
            // Восстанавливаем исходное HTML-содержимое data-card="card"
            card.innerHTML = originalCardContents;
            card.classList.remove('empty__wrapper--js');

            // Повторно привязываем событие на удаление карточки
            deleteCard();

            // Повторно привязываем события для кнопок плюс и минус
            itemСounting();

            // Повторно привязываем события для кнопок выбора размера
            tabsButton();

            // Обновляем суммарную цену после восстановления
            updateSummaryPrice();
          });
        }

        // Обновляем суммарную цену после удаления
        updateSummaryPrice();
      }
    });
  });
}

// Вызов функции deleteCard() в начале скрипта для инициализации событий
deleteCard();
