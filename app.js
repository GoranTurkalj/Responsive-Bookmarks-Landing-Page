const dList = document.getElementById("d-list");

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
