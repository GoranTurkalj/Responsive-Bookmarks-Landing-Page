import {calcWindowWidth} from "./help.js";  

let windowWidth = null; 

window.addEventListener("load", ()=>{ 
  windowWidth = calcWindowWidth(); 
}); 

const body = document.querySelector("body");
const mainNav = document.getElementById("main-nav");
const logoImg = document.getElementById("logo");
const navLinksList = document.getElementById("main-nav-list");
const links = navLinksList.querySelectorAll("a"); //actual links in main navigation menu
const navSocialLinksList = document.getElementById("main-nav-social");

//Refers to the hamburger menu control button for mobile view
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const menuBtnImg = document.getElementById("menu-btn-img");

//Variable on which behavior of elements depends
let menuOpened = false;


window.addEventListener("resize", (event)=>{
    windowWidth = calcWindowWidth(); 

}); 


//MOBILE NAVIGATION CONTROL XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
mobileMenuBtn.addEventListener("click", toggleMobileMenu);


function toggleMobileMenu() {

  menuOpened = !menuOpened;

  if (menuOpened) {
    //if menuOpened is true  - display the mobile nav
    mainNav.classList.add("main-nav--mobile-open");
    menuBtnImg.src = "./images/icon-close.svg";
    logoImg.src = "./images/logo-bookmark3.svg";
    navLinksList.classList.add("visible-flex"); 

    navSocialLinksList.classList.remove("hidden");
    body.style.overflow = "hidden";
  } else if (!menuOpened) {
    mainNav.classList.remove("main-nav--mobile-open");
    menuBtnImg.src = "./images/icon-hamburger.svg";
    logoImg.src = "./images/logo-bookmark.svg";
    navLinksList.classList.remove("visible-flex");   
    navSocialLinksList.classList.add("hidden");
    body.style.overflow = "auto";
  }

}