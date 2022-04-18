const container = document.querySelector(".confirmation");
const profile = document.querySelector(".profile")

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const register = document.getElementById("login-register");
const validation = document.getElementById("validated");

openModalButtons.forEach(button => { // This code to open modals
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
});

register.addEventListener("click", () => {
  const login = document.getElementById("login");
  closeModalOnly(login);
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach(modal => {
    closeModal(modal);
  })
});

closeModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  })
});

function openModal(modal) {
  if (modal === null) return
  modal.classList.add("active");
  overlay.classList.add("active");
};

function closeModal(modal) {
  if (modal === null) return
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

function closeModalOnly(modal) {
  if (modal === null) return
  modal.classList.remove("active");
};

function validateForm(event) {

  const form = event.target;
  const user = form.name.value;
  
  if (form.invalid) {
    event.preventDefault();
  } else {
    form.style.transform = "scale(1.5)";
    form.style.margin = "2em";
    return form.innerHTML = `Welcome ${user}`;
  }
};

function validateFilm(event) {

  const form = event.target;
  const user = form.name.value;
  
  if (form.invalid) {
    event.preventDefault();
  } else {
    form.style.transform = "scale(1.5)";
    form.style.margin = "2em";
    return form.innerHTML = `Thank you for your purchase!`;
  }
};


