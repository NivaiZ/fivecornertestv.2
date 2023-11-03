export function calculateTotal() {
  const productPriceElements = document.querySelectorAll('[data-quantity="price"]');
  const salePriceElements = document.querySelectorAll('.total__price--sale');
  const deliveryPriceElement = document.querySelector('.total__price.total__price--delivery');
  const totalFinalElement = document.querySelector('.total__final');

  let productPrice = 0;
  let salePrice = 0;
  let deliveryPrice = 0;

  // Вычисляем общую стоимость товаров
  productPriceElements.forEach(element => {
    const priceText = element.textContent;
    const price = parseInt(priceText.replace(/\D/g, ''));
    productPrice += price;
  });

  // Вычисляем общую стоимость скидок
  salePriceElements.forEach(element => {
    const priceText = element.textContent;
    const price = parseInt(priceText.replace(/\D/g, ''));
    salePrice += price;
  });

  // Получаем стоимость доставки
  if (deliveryPriceElement) {
    const deliveryPriceText = deliveryPriceElement.textContent;
    deliveryPrice = parseInt(deliveryPriceText.replace(/\D/g, ''));
  }

  // Обновляем значение итого на странице
  const total = productPrice - salePrice + deliveryPrice;
  totalFinalElement.textContent = total.toLocaleString('ru-RU') + ' ₽';
}

// Вызываем функцию для первичного подсчета
calculateTotal();

