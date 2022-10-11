function toggleModal(e) {
    let parent = e.target.parentNode;
    let modal = parent.querySelector('.modal')
    modal.classList.toggle("show-modal");
}

let modals = document.querySelectorAll(".modal");

function closeModals() {
    modals.forEach((element) => {
        element.classList.remove("show-modal");
    })
}

let lienPops = document.querySelectorAll(".lienPop");
let closeButtons = document.querySelectorAll(".close-button");

lienPops.forEach((element) => {
    element.addEventListener("click", (e) => {
        toggleModal(e)
    });
})

closeButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
        closeModals(e)
    });
})

window.addEventListener("click", (e) => {
    modals.forEach((element) => {
        if(e.target === element){
            element.classList.remove("show-modal");

        }
    })
})
