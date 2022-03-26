const container = document.querySelector("main");
const profile = document.querySelector(".profile")

function onSubmit(event) {

  const form = event.target;
  const user = form.username.value;
  
  if (form.invalid) {
    event.preventDefault();
  }
  else {
  return container.innerHTML = `<div class="success">
                                <a href="index.html"><img src="images/square_eyes_logo.png" alt="logo"></a>
                                  <div>
                                    Welcome ${user}
                                  </div>
                                </div>`;
  }           
};

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const register = document.getElementById("login-register");

openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
});

register.addEventListener("click", () => {
  const login = document.getElementById("login");
  closeModalLogin(login);
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

function closeModalLogin(modal) {
  if (modal === null) return
  modal.classList.remove("active");
};
