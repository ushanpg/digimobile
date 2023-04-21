function CheckView() {
  document.addEventListener("DOMContentLoaded", function () {
    var squares = document.querySelectorAll(".section");

    // Create the observer:
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          entry.target.classList.add("fadeInUp");
        } else {
          entry.target.classList.remove("animated");
          entry.target.classList.remove("fadeInUp");
        }
      });
    });

    squares.forEach(function (eachSquare) {
      observer.observe(eachSquare);
    });
  });
}

function Scroller() {
  document.addEventListener("scroll", function () {
    var buttonScroll = document.querySelector(".scrollBtn");

    var position = window.scrollY;

    if (position > 50) {
      buttonScroll.classList.remove("invisible");
      buttonScroll.classList.add("visible");
    } else {
      buttonScroll.classList.remove("visible");
      buttonScroll.classList.add("invisible");
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

CheckView();
Scroller();
