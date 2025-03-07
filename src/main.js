import Delivery from "./modules/Delivery.js";
import { getAppEl, getDivEl } from "./modules/components.js";

const div = getDivEl();
const appEl = getAppEl();

let test = "test";

function setClass(elem, className) {
  elem.classList.add(className);
  return elem;
}

setClass(div, "test-div-class" + test);

appEl.append(div);

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
];

deliveryArr.forEach((item) => {
  appEl.append(item.createCard());
});
