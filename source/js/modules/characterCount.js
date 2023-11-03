export function characterCount() {
  const textarea = document.getElementById('order__comment');
  const charCount = document.querySelector('.comment__value');

  textarea.addEventListener('input', function () {
    const text = textarea.value;
    const currentLength = text.length;
    const maxLength = 142;
    charCount.textContent = `Использовано  ${currentLength}/${maxLength} символов`;
  });
}
