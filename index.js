const switchBtn = document.querySelector(".slider");

switchBtn.addEventListener("click", (e) => {
  const btn = e.target;
  btn.classList.toggle("slider_light");
  document.querySelector("main").classList.toggle("light");
  document.querySelector("main").classList.toggle("dark");
  document
    .querySelectorAll(".first_row_item")
    .forEach((el) => el.classList.toggle("item_light"));
  document
    .querySelectorAll(".bottom_row_item")
    .forEach((el) => el.classList.toggle("bottom_light"));
});
