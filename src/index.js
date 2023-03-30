import menuData from "./menu.json";
import foodServiceTpl from "./food-serices.hbs";
const foodServiceMarkUp = foodServiceTpl(menuData);

const menuRef = document.querySelector("js-menu");

menuRef.insertAdjacentHTML("beforeend", foodServiceMarkUp);