const ashfakSlider = (options) => {
  let interval = options.interval,
    autoplay = options.autoplay,
    nav = options.nav;
  const container = document.getElementById("container");
  const slider = document.querySelector(".slider");
  const slide = document.querySelectorAll(".slide");
  //   slider.style.display = "none";
  console.log(container);
  console.log(slider.offsetWidth);
  let i = 0;
  // /Navigation enable
  if (nav) {
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
    });
    //   console.log(next);
    //   prev navigation
    prev.addEventListener("click", () => {
      i = i > 0 ? i - 1 : 0;
      slider.style.left = -slider.offsetWidth * i + "px";
    });
  }
  //   Navigation

  if (autoplay === true) {
    setInterval(() => {
      i = i < slide.length ? i + 1 : 0;
      slider.style.left = -slider.offsetWidth * i + "px";
    }, interval);
  }
};
