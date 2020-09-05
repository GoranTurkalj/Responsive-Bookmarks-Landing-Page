const featureTabContainer = document.getElementById("feature-tab-container");
const featureTabs = Array.from(
  featureTabContainer.querySelectorAll("[data-tab]")
);
const tabLinksList = document.getElementById("tablinks-list");
const tabLinks = Array.from(tabLinksList.querySelectorAll("a"));
const image = document.getElementById("features-img");

tabLinksList.addEventListener("click", featuresTabClickHandler);

function featuresTabClickHandler(event) {
  let currLink = event.target;

  event.preventDefault();

  if (currLink.tagName === "A") {
    //If a target link does not have an active class, give it the active class
    if (!currLink.classList.contains("features-list__link--active")) {
    
      for (const link of tabLinks) {
        link.classList.remove("features-list__link--active");
      }
    
      currLink.classList.add("features-list__link--active");

      for (const tab of featureTabs) {
        tab.style.display = "none";

        if (tab.dataset.tab === currLink.id) {
          //Display tab info
          tab.style.display = "flex";
          //Change image
          image.src = `./images/illustration-features-${currLink.id}.svg`;
        }
      }
    }
  }
}
