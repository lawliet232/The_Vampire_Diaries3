function openSidebar() {
    document.getElementById("sidebar").style.width = "15%";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}
// Selecciona los elementos
const modal = document.getElementById("modal");
const img = document.getElementById("triggerImage");
const span = document.getElementsByClassName("close")[0];

// Al hacer clic en la imagen, abre el modal
img.onclick = function() {
    modal.style.display = "block";
}

// Al hacer clic en la "x", cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Si el usuario hace clic fuera del modal, también se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
let slideIndex = 0;
function moveSlide(n) {
    const slide = document.getElementById('slider');
    const slides = slide.children.length;
    slideIndex = (slideIndex + n + slides) % slides;
    slide.style.transform = 'translateX(' + (-110 * slideIndex) + 'px)';
}

// Modales
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}