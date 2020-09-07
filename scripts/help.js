export function calcWindowWidth(event){
    return window.innerWidth;
}


export function emailValidation(event) {

    event.preventDefault(); 

    const email = document.getElementById("email");
    const error = document.getElementById("error"); 
    const errorIcon = document.getElementById("error-icon"); 

    //If input does not include @, show error
    if(!email.value.includes("@")) {
      
        email.classList.add("form__input--invalid"); 
        error.classList.add("error-container--visible"); 
        errorIcon.classList.add("error-icon--visible"); 
        setTimeout(()=>{
            email.classList.remove("form__input--invalid"); 
            error.classList.remove("error-container--visible"); 
            errorIcon.classList.remove("error-icon--visible"); 
        }, 2000); 

    }
    
    
   email.value = "";
}
