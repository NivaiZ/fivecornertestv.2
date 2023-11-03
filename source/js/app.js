import { textField } from "./modules/textField.js";
import { maskPhone } from "./modules/maskPhone.js";
import { characterCount } from "./modules/characterCount.js";
import { mapsOnLoad } from "./modules/yandexMap.js";
import { tabsButton } from "./modules/tabsButton.js";
import { itemСounting } from "./modules/ItemСounting.js";
import { deleteCard } from "./modules/deleteCard.js";
import {calculateTotal} from './modules/calculateTotal.js';


function handleDOMContentLoaded() {
  itemСounting();
  textField();
  maskPhone();
  characterCount();
  mapsOnLoad();
  tabsButton();
  deleteCard();
  calculateTotal();
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
