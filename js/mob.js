"use strict";

const mobMenu = document.querySelector(".container-heder-mob-menu");
const buttonOpenMobMenu = document.querySelector(".heder-icon-menu");
const buttonCloseMobMenu = document.querySelector(".close-menu");

buttonOpenMobMenu.addEventListener("click", function () {
  mobMenu.classList.add("is-open");
});

buttonCloseMobMenu.addEventListener("click", function () {
  mobMenu.classList.remove("is-open");
});
