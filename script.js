function togglePopup(e) {
    let parent = e.target.parentNode;
    let popup = parent.querySelector('.popup')
    popup.classList.toggle("show-popup");
}

let popups = document.querySelectorAll(".popup");

function closePopups() {
    popups.forEach((element) => {
        element.classList.remove("show-popup");
    })
}

let lienPops = document.querySelectorAll(".lienPop");
let closeButtons = document.querySelectorAll(".close-button");

lienPops.forEach((element) => {
    element.addEventListener("click", (e) => {
        togglePopup(e)
    });
})

closeButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
        closePopups(e)
    });
})

window.addEventListener("click", (e) => {
    popups.forEach((element) => {
        if(e.target === element){
            element.classList.remove("show-popup");

        }
    })
})
