console.log("HEllo");

const carousel = (options) => {
  let element = document.getElementById(options.element || "carousel"),
    intervel = options.intervel || 3000,
    nextSlide = options.nextSlide || "next",
    prevSlide = options.prevSlide || "prev",
    count = element.querySelectorAll(" .slide").length,
    current = 0,
    cycle = null,
    crslClass = 'js-Carousel',

  if (count > 1) {
    display();
  }

  const display = () => {
    let action = {
      dots: function () {
        return showDots();
      },
      arrows: function () {
        return showArrows();
      },
      autoplay: function () {
        return showAutoplay();
      },
      infinite: function () {
        return moveItem(count - 1, -element.offsetWidth + "px", "afterBegin");
      },
      initial: function () {
        let initial = 0 || options.initial >= count ? 0 : options.initial;
        return show(initial);
      },
    };
    for (let key in action) {
      if (options.hasOwnProperty(key) && options[key]) {
        action[key]();
      }
    }
  };

  const moveItem=(index,marginLeft,position)=>{
      let itemToMove=element.querySelectorAll('.'+crslClass+'> div .slide')[index];
      itemToMove.style.marginLeft=marginLeft;

      element.querySelector('.'+crslClass+'> div').removeChild(itemToMove);
      element.querySelector('.'+crslClass+'> div').insertAdjacentElement(position,itemToMove.outerHTML);
  }

 const showDots = () => {
     let dotContainer = document.createElement("ul")   ;
        dotContainer.classList.add("dots");
        dotContainer.addEventListener('click',scrollToImage.bind(this));

        for(let i=0; i<count; i++){
            let dot=document.createElement("li");
            dot.setAttribute("data-index",i);
            dotContainer.appendChild(dot);
        }
        element.appendChild(dotContainer);
        currentDot();
 }



};
