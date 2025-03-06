function getAppEl() {
    const appEl = document.querySelector("#app");
    return appEl;
  }
  
  function getTitleEl(title) {
    const titleEl = document.createElement("span");
    titleEl.classList.add("title");
    titleEl.textContent = title;
    return titleEl;
  }
  
  function getTextEl(text) {
    const textEl = document.createElement("p");
    textEl.classList.add("text");
    textEl.textContent = text;
    return textEl;
  }
  
  function getDivEl() {
    const divEl = document.createElement("div");
    return divEl;
  }
  
  function getInputEl(placeholder, value) {
    const inputEl = document.createElement("input");
    inputEl.classList.add("input");
    inputEl.placeholder = placeholder;
    inputEl.value = value;
    return inputEl;
  }
  
  function getSelectEl(delivery) {
    const selectEl = document.createElement("select");
    selectEl.classList.add("select");
    selectEl.value = delivery;
    return selectEl;
  }
  
  function getFormEl() {
    const formEl = document.createElement("form");
    formEl.classList.add("form");
    return formEl;
  }
  
  function getOptionEl(value, text) {
    const optionEl = document.createElement("option");
    optionEl.value = value;
    optionEl.textContent = text;
    optionEl.classList.add("option");
    return optionEl;
  }
  
  function getButtonEl(text) {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = text;
    return buttonEl;
  }
  
  export {
    getTitleEl,
    getTextEl,
    getDivEl,
    getInputEl,
    getSelectEl,
    getAppEl,
    getFormEl,
    getOptionEl,
    getButtonEl,
  };
  