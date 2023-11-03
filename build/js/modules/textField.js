export function textField() {
  const inputFields = document.querySelectorAll('.detail__input--js');
  const labels = document.querySelectorAll('.detail__label--js');
  if (inputFields, labels) {
    function setInitialLabelState(input, label) {
      if (input.value === '') {
        label.style.top = '50%';
        label.style.fontSize = '16px';
      } else {
        label.style.top = '0';
        label.style.fontSize = '12px';
      }
    }

    inputFields.forEach((input, index) => {
      setInitialLabelState(input, labels[index]);

      input.addEventListener('focus', () => {
        labels[index].style.top = '0';
        labels[index].style.fontSize = '12px';
      });

      input.addEventListener('blur', () => {
        if (input.value === '') {
          labels[index].style.top = '50%';
          labels[index].style.fontSize = '16px';
        }
      });
    });
  }
}
