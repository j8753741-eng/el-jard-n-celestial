const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {

    overlay.classList.add("show");
    modal.classList.add("show");

});

closeModal.addEventListener("click", () => {

    overlay.classList.remove("show");
    modal.classList.remove("show");

});

overlay.addEventListener("click", () => {

    overlay.classList.remove("show");
    modal.classList.remove("show");

});
