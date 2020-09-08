
// DESCRIPTION LIST CONTROL XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const dtElements = document.querySelectorAll("dt"); 

  
let currentQuestion = null;

  
//FAQ handler
 function FAQHandler(event) {
        const scrollBefore = window.scrollY; 
        console.log(scrollBefore);
        const q = event.currentTarget; 
              
        if (currentQuestion && currentQuestion === q) {
            determineAction(currentQuestion);
        } else if (currentQuestion && currentQuestion !== q) {
            //then I want to close the current answer first
            hideAnswer(currentQuestion);
            //then assign the new currentQuestion
            currentQuestion = q;
            //do the action
            determineAction(currentQuestion);
        } else if (!currentQuestion) {
            currentQuestion = q;
            determineAction(currentQuestion);
        }
      const scrollAfter = window.scrollY; 
      console.log(scrollAfter); 
    
}

//determines if answer should open or close

function determineAction(question) {
    if (question.getAttribute("aria-expanded") === "false") {
        showAnswer(question);
    } else if (question.getAttribute("aria-expanded") === "true") {
        hideAnswer(question);
    }
}

//Returns an answer
 function selectAnswer(question) {
    const id = question.getAttribute("aria-controls");
    const answer = document.getElementById(id);
    return answer;
}

//show answer
 function showAnswer(question) {
    question.setAttribute("aria-expanded", "true");
    question
        .querySelector(".description-list__arrow")
        .classList.add("description-list__arrow--expanded");
    selectAnswer(question).classList.add("description-list__answer--expanded");
}

// hide answer
 function hideAnswer(question) {
    question.setAttribute("aria-expanded", "false");
    question
        .querySelector(".description-list__arrow")
        .classList.remove("description-list__arrow--expanded");
    selectAnswer(question).classList.remove("description-list__answer--expanded");
}



for(const el of dtElements) {
    el.addEventListener("click", FAQHandler); 
}


