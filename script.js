// LOGIN LOGIC
const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const mainSite = document.getElementById("mainSite");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "user" && password === "1234") {
    loginPage.style.display = "none";
    mainSite.style.display = "block";
  } else {
    errorMessage.textContent = "Invalid credentials. Try 'user' and '1234'.";
  }
});

// SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// SEARCH FILTER
const searchInput = document.getElementById("searchInput");
const houses = document.querySelectorAll(".house");

searchInput?.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  houses.forEach(house => {
    const name = house.dataset.name.toLowerCase();
    const location = house.dataset.location.toLowerCase();
    const price = house.dataset.price.toLowerCase();
    house.style.display =
      name.includes(value) || location.includes(value) || price.includes(value)
        ? "block"
        : "none";
  });
});

// HOUSE DETAILS MODAL
const modal = document.getElementById("detailsModal");
const modalTitle = document.getElementById("houseTitle");
const modalDescription = document.getElementById("houseDescription");
const closeModal = document.querySelector(".close");
const submitBtn = document.getElementById("submitBtn");
const exitBtn = document.getElementById("exitBtn");

document.querySelectorAll(".details-btn").forEach(button => {
  button.addEventListener("click", e => {
    const house = e.target.closest(".house");
    modal.style.display = "block";
    modalTitle.textContent = house.querySelector("h3").innerText;
    modalDescription.textContent = house.querySelector("p").innerText;
  });
});

closeModal.onclick = () => (modal.style.display = "none");
exitBtn.onclick = () => (modal.style.display = "none");
submitBtn.onclick = () => {
  alert("Thank you! We'll contact you soon.");
  modal.style.display = "none";
};

window.onclick = event => {
  if (event.target === modal) modal.style.display = "none";
};