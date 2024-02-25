const formContainer = document.querySelector(".form-container");
const sectionOneButton = document.querySelector(".section-one-button");
const closeButton = document.querySelector(".close-button");

sectionOneButton.addEventListener("click", function () {
  formContainer.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", function () {
  formContainer.classList.remove("is-open");
  document.body.style.overflow = "";
});
