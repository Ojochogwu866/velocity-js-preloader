window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
  const hero = document.querySelector(".hero");
  hero.classList.add("hero-finish");

  for (var i = 1; i <= 7; i++) {
    Velocity(
      document.querySelector(".preloader__block--" + i),
      { opacity: 1 },
      { delay: i * 1000, duration: 500, easing: "ease-out" }
    );
  }
  Velocity(
    document.querySelector(".preloader"),
    { opacity: 0 },
    { delay: 8000, duration: 500, easing: "ease-out" }
  ).then(() => {
    hero.style.display = "flex";
  });
});
