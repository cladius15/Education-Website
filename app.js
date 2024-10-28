let hamMenuIcon = document.getElementById("hamburger-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let scrollTopBtn = document.getElementById("scroll-top");

/* SideMenu Toggle */
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    if (navBar.classList.contains("active"));
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

const links = document.querySelectorAll("nav ul.active a");

window.addEventListener("scroll", () => {
  links.forEach((link) => {
    link.classList.add("visible");
  });
});

let header = document.querySelector("header");

window.onscroll = () => {
  /* Sticky Header */
  let pos = document.documentElement.scrollTop;

  if (pos > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  /* Scroll Top Button */
  if (pos > 300) {
    scrollTopBtn.style.display = "grid";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

document.addEventListener("dragstart", (event) => {
  event.preventDefault;
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Prevent right-click on images

document.addEventListener("contextmenu", function (e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

// Prevent left-click (e.g., dragging or opening images)

document.addEventListener("mousedown", function (e) {
  if (e.target.tagName === "IMG" && e.button === 0) {
    e.preventDefault();
  }
});

// Prevent dragging images

document.addEventListener("dragstart", function (e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});
