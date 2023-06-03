const shareButton = document.querySelector(".share-button");
const profileSection = document.querySelector(".profile-section");
const profileContent = document.querySelector(".profile-content");
const shareContent = document.querySelector(".share-content");
const svgPath = document.querySelector("path");
const floatingMenu = document.querySelector(".floating-share-menu");

const shareMenuMobile = () => {
  profileSection.classList.toggle("dark-bg");
  profileContent.classList.toggle("none");
  shareContent.classList.toggle("none");
  shareButton.classList.toggle("dark-theme");
  svgPath.classList.toggle("dark-theme");
};

const shareMenuDesktop = () => {
  floatingMenu.classList.toggle("none");
};

const menuSelect = () => {
  shareButton.removeEventListener("click", shareMenuDesktop);
  shareButton.removeEventListener("click", shareMenuMobile);
  shareButton.addEventListener(
    "click",
    winSize.matches ? shareMenuDesktop : shareMenuMobile
  );
};

const winSize = window.matchMedia("(min-width: 630px)");

window.addEventListener("resize", menuSelect);

// Initial event listener setup
shareButton.addEventListener(
  "click",
  winSize.matches ? shareMenuDesktop : shareMenuMobile
);
