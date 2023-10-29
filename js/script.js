let menue_open = document.getElementById("menue-open");
let menue_close = document.getElementById("menue-close");
let menue = document.querySelector(".main-nav ul");
let scroll_top = document.querySelector(".scroll-top");

menue_open.addEventListener("click", () => {
  menue.classList.add("open");
});

menue_close.addEventListener("click", () => {
  menue.classList.remove("open");
});

scroll_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
