export function maskPhone() {
  const element = document.querySelector('.detail__phone');
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  const mask = IMask(element, maskOptions);
}
