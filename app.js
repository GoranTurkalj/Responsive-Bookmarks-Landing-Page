
const body = document.querySelector("body");
const mainNav = document.getElementById("main-nav");
const logoImg = document.getElementById("logo"); 
const navLinksList = document.getElementById("main-nav-list"); 
const links = navLinksList.querySelectorAll("a"); //actual links in main navigation menu
const navSocialLinksList = document.getElementById("main-nav-social"); 




//Selects description list for FAQ section
const dList = document.getElementById("d-list");
 


//Refers to the hamburger menu control button for mobile view
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const menuBtnImg = document.getElementById("menu-btn-img"); 

//Variable on which behavior of elements depends
let menuOpened= false; 



//Controls description list 
dList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target);
    //Get the correct question and answer
    const id = event.target.getAttribute("aria-controls");
    const answer = document.getElementById(id);

    //set the targets aria-expanded attribute to opposite of what it currently is.
    if (event.target.getAttribute("aria-expanded") === "false") {
      event.target.setAttribute("aria-expanded", "true");
      answer.style.display = "block";
      event.target
        .querySelector(".description-list__arrow")
        .classList.add("description-list__arrow--expanded");
    } else if (event.target.getAttribute("aria-expanded") === "true") {
      event.target.setAttribute("aria-expanded", "false");
      answer.style.display = "none";
      event.target
        .querySelector(".description-list__arrow")
        .classList.remove("description-list__arrow--expanded");
    }
  }
});


//Displays or hides mobile navigation
mobileMenuBtn.addEventListener("click", (event) => {
  
    menuOpened = !menuOpened; 
    
    if(menuOpened) {
       
      //if menuOpened is true  - display the mobile nav
      mainNav.classList.add("main-nav--mobile-open"); 
      menuBtnImg.src = "./images/icon-close.svg"; 
      navLinksList.classList.remove("hidden"); 
      
      for(const link of links){
        link.classList.add("nav__link--mobile"); 
      }

      navSocialLinksList.classList.remove("hidden"); 
      body.style.overflow = "hidden"; 

    }
    else if(!menuOpened) {
      mainNav.classList.remove("main-nav--mobile-open"); 
      menuBtnImg.src = "./images/icon-hamburger.svg"; 
      navLinksList.classList.add("hidden");
      for (const link of links) {
        link.classList.remove("nav__link--mobile");
      }
      navSocialLinksList.classList.add("hidden"); 
      body.style.overflow = "auto"; 
    }
   

  
});
