
// DESCRIPTION LIST CONTROL XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const dList = document.getElementById("d-list");
let currentQuestion = null;


//FAQ handler
 function FAQHandler(event) {
    if (event.target.tagName === "BUTTON") {
        if (currentQuestion && currentQuestion === event.target) {
            determineAction(currentQuestion);
        } else if (currentQuestion && currentQuestion !== event.target) {
            //then I want to close the current answer first
            hideAnswer(currentQuestion);
            //then assign the new currentQuestion
            currentQuestion = event.target;
            //do the action
            determineAction(currentQuestion);
        } else if (!currentQuestion) {
            currentQuestion = event.target;
            determineAction(currentQuestion);
        }
    }
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

dList.addEventListener("click", FAQHandler);
