
import { calcWindowWidth, emailValidation } from "./help.js";


let windowWidth = null;

window.addEventListener("load", () => {
  windowWidth = calcWindowWidth();
});

//Selects elements in the DOM
const body = document.querySelector("body");
const mainNav = document.getElementById("main-nav");
const logoImg = document.getElementById("logo");
const navLinksList = document.getElementById("main-nav-list");
const navSocialLinksList = document.getElementById("main-nav-social");



//Refers to the hamburger menu control button for mobile view
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const menuBtnImg = document.getElementById("menu-btn-img");

//Variable that helps control the mobile nav behavior
let menuOpened = false;

window.addEventListener("resize", (event) => {
 
  windowWidth = calcWindowWidth();
  if (menuOpened && windowWidth >= 800) {
    
    closeMobileNav();
  }
});


//handles clicks on navigation links if in mobile view
navLinksList.addEventListener("click", navLinksClickHandler); 


function navLinksClickHandler(event){
  if(event.target.tagName === "A") closeMobileNav(); 
}





//MOBILE NAVIGATION CONTROL XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
mobileMenuBtn.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  if (menuOpened) {
    //Animation plays out first, then the menu closes
     mainNav.classList.add("slide-out"); 
    setTimeout(() => {
      mainNav.classList.remove("slide-out"); 
      closeMobileNav();
    }, 750);
  } else {
    openMobileNav();
  }
}

function openMobileNav() {
  menuOpened = true;
  mainNav.classList.add("main-nav--mobile-open");
  menuBtnImg.src = "./images/icon-close.svg";
  logoImg.src = "./images/logo-bookmark3.svg";
  navLinksList.classList.add("visible-flex");
  navSocialLinksList.classList.remove("hidden");
  body.style.overflow = "hidden";
}

function closeMobileNav() {
  menuOpened = false;

  mainNav.classList.remove("main-nav--mobile-open");
  menuBtnImg.src = "./images/icon-hamburger.svg";
  logoImg.src = "./images/logo-bookmark.svg";
  navLinksList.classList.remove("visible-flex");
  navSocialLinksList.classList.add("hidden");
  body.style.overflow = "auto";
}



//Email validation 

form.addEventListener("submit", emailValidation); 