"use strict";

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

const showSlide = (slideNr) => {
  document.querySelectorAll(".slide")[slideNr-1].classList.add("active");
}

const changeSlide = (e) => {
  hideActiveSlide();
  // zgodnie z kliknieta kropką -  dodajemy klase active img o takim numerze
  if (e.target.classList.contains("dot1")) {
    showSlide(1);
  } else if (e.target.classList.contains("dot2")) {
    showSlide(2);
  } else {
    showSlide(3);
  }
};

document.querySelector("#dots").addEventListener("click", changeSlide);

const showNextSlide = () => {
  console.log("next");
};
const showPreviousSlide = () => {
  console.log("prev");
};
arrowLeft.addEventListener("click", showPreviousSlide)
arrowRight.addEventListener("click", showNextSlide)