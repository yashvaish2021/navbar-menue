const links = window.document.querySelector(".links");

const socialIcons = window.document.querySelector(".social-icons");

const navToggleBtn = window.document.querySelector(".nav-toggle");

navToggleBtn.addEventListener("click", function () {
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }
  links.classList.toggle("show-links");
});
