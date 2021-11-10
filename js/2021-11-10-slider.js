const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
// const dot1 = document.querySelector("#dots").firstElementChild;
// const dot2 = document.querySelectorAll(".dot")[1];
// const dot3 = document.querySelector("#dots").lastElementChild;
// const slide1 = document.querySelectorAll(".slide")[0];
// const slide2 = document.querySelectorAll(".slide")[1];
// const slide3 = document.querySelectorAll(".slide")[2];
const hideActiveSlide = () => {
  //aktywnemu elementowi usuwamy klase active
  document.querySelector("img.active").classList.remove("active");
};

const changeSlide = (e) => {
  hideActiveSlide();
  // zgodnie z kliknieta kropką -  dodajemy klase active img o takim numerze
  if (e.target.classList.contains("dot1")) {
    document.querySelectorAll(".slide")[0].classList.add("active");
  } else if (e.target.classList.contains("dot2")) {
    document.querySelectorAll(".slide")[1].classList.add("active");
  } else {
    document.querySelectorAll(".slide")[2].classList.add("active");
  }
};

document.querySelector("#dots").addEventListener("click", changeSlide);
