console.log("SimpleShop Loaded");
const popup = document.getElementById("popup");

function openPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}const elements = document.querySelectorAll('.card, .trust-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});const popup = document.getElementById("popup");

function openPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

function submitOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const desc = document.getElementById("desc").value;

  if (!name || !phone) {
    alert("لطفاً نام و شماره تماس را وارد کنید");
    return;
  }

  alert("سفارش شما ثبت شد ✔");

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("desc").value = "";

  closePopup();
}