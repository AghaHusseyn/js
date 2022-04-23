const contents = document.querySelectorAll(".program-line__content");
const descriptions = document.querySelectorAll(".program-line__descr");

contents.forEach((elem) => {
  const title = elem.querySelector(".program-line__title");
  const descr = elem.querySelector(".program-line__descr");

  title.addEventListener("click", () => {
    descriptions.forEach((el) => {
      el.classList.remove("active");
    });
    descr.classList.toggle("active");
  });
});
