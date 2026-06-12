const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

const input = document.getElementById("codeInput");
const btn = document.getElementById("checkBtn");
const msg = document.getElementById("message");
const enterBtn = document.getElementById("enterGarden");

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

function normalize(text){
    return text.toLowerCase().trim();
}

btn.addEventListener("click", () => {

    const value = normalize(input.value);

    const valid = [
        "17/10/2025",
        "17-10-2025",
        "17 de octubre de 2025",
        "17 octubre 2025"
    ];

    if(valid.includes(value)){
        msg.innerHTML = "Bienvenida, Valeria. Este jardín ha esperado pacientemente tu llegada.";
        enterBtn.classList.remove("hidden");
    }else{
        msg.innerHTML = "Las estrellas susurran que aún no es la respuesta correcta.";
        enterBtn.classList.add("hidden");
    }
});

enterBtn.addEventListener("click", () => {

    document.body.style.transition = "all 2s ease";
    document.body.style.background = "#000";

    msg.innerHTML = "Abriendo el Jardín Celestial...";

    modal.style.transition = "all 2s ease";
    modal.style.opacity = "0";
    modal.style.transform = "translate(-50%,-50%) scale(0.5)";

    overlay.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "garden.html";
    }, 2500);

});
