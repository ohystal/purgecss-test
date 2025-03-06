import Delivery from "./modules/Delivery.js";
import { getAppEl } from "./modules/components.js";
import "./style.css"

const appEl = getAppEl();

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
];

deliveryArr.forEach((item) => {
  appEl.append(item.createCard());
});