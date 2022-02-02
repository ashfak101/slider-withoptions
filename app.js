const ashfakSlider = (options) => {
  let interval = options.interval,
    autoplay = options.autoplay,
    nav = options.nav,
    item = options.item,
    dots = options.dots;

  // Dom
  const container = document.getElementById("container");
  const slider = document.querySelector(".slider");
  const slide = document.querySelectorAll(".slide");
  //   const slides = document.querySelector(".slide");

  //   slider.style.display = "none";
  console.log(container);
  console.log(slider.offsetWidth);
  let items = slider.offsetWidth / item;
  let count = slide.length / item;
  let i = 0;
  //   slide.style.minWidth = slider.offsetWidth + "px";
  // /Navigation enable
  slide.forEach((singleSlide) => {
    singleSlide.style.minWidth = items + "px";
  });

  //   ---------Dots---------------------
  if (dots) {
    const ul = document.createElement("ul");
    ul.classList.add("dots");
    let dotCount = Math.ceil(slide.length / item);
    while (dotCount >= 1) {
      const li = document.createElement("li");

      ul.appendChild(li);

      dotCount--;
    }
    container.appendChild(ul);

    const dotsClick = document.querySelectorAll(".dots li");
    const firstChild = document.querySelector(".dots li");
    firstChild.classList.add("active");
    //   Adding EventListener on Dots-----------
    dotsClick.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        i = index;
        document.querySelector(".dots .active").classList.remove("active");
        dot.classList.add("active");
        slider.style.left = -slider.offsetWidth * i + "px";
      });
    });
  }

  let bullets = document.getElementsByTagName("li");
  console.log(bullets);
  //   ---------------------------
  if (nav) {
    //   Navigation
    const div = document.createElement("div");
    div.innerHTML = `
        <span class="prev">prev</span>
          <span class="next">next</span>
      `;
    container.appendChild(div);
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    // next navigation
    next.addEventListener("click", () => {
      i = i < slide.length ? i + 1 : 0;

      slider.style.left = -slider.offsetWidth * i + "px";
      document.querySelector(".dots li").classList.remove("active");

      bullets.children[i + 1].classList.add("active");
    });
    //   console.log(next);
    //   prev navigation
    prev.addEventListener("click", () => {
      i = i > 0 ? i - 1 : 0;
      slider.style.left = -slider.offsetWidth * i + "px";
    });
  }
  //
  if (autoplay === true) {
    setInterval(() => {
      i = i < count ? i + 1 : 0;
      slider.style.left = -slider.offsetWidth * i + "px";
    }, interval);
  }
};
