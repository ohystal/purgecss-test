import * as components from "./components.js";

export default class Delivery {
    constructor(name, address, distance) {
      this.name = name;
      this.address = address; 
      this.distance = distance;
    }
  
    createCard() {
      this.cardEl = document.createElement("div");
      this.cardEl.classList.add("card");
      this.cardEl.classList.add("card-test")
  
      this.divName = components.getDivEl();
      this.titleName = components.getTitleEl("Имя");
      this.textName = components.getTextEl(this.name);
  
      this.divName.append(this.titleName, this.textName);
  
      this.divAddress = components.getDivEl();
      this.titleAddress = components.getTitleEl("Адрес");
      this.textAddress = components.getTextEl(this.address);
  
      this.divAddress.append(this.titleAddress, this.textAddress);
  
      this.divDistance = components.getDivEl();
      this.titleDistance = components.getTitleEl("Расстояние");
      this.textDistance = components.getTextEl(`${this.distance} ` + "км");
  
      this.divDistance.append(this.titleDistance, this.textDistance);
  
      this.cardEl.append(this.divName, this.divAddress, this.divDistance);
  
      return this.cardEl;
    }
  
    set deliveryName(name) {
      this.name = name;
      this.textName.textContent = this.name;
    }
  
    get deliveryName() {
      return this.deliveryName;
    }
  
    set deliveryAddress(address) {
      this.address = address;
      this.textAddress.textContent = this.address;
    }
  
    get deliveryAddress() {
      return this.deliveryAddress;
    }
  
    set deliveryDistance(distance) {
      this.distance = distance;
      this.textDistance.textContent = this.distance;
    }
  
    get deliveryDistance() {
      return this.deliveryDistance;
    }
  }