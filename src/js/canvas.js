import "../sass/style.scss";
import "imports-loader?define=>false!animation.gsap";
import "imports-loader?define=>false!debug.addIndicators";
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems

var controller = new ScrollMagic.Controller();
let mains = document.querySelectorAll(".main");
//console.log(mains);
//var self = this;

[].forEach.call(document.querySelectorAll(".main"), main => {
  let animateIn = new TimelineMax();
  let overlay = main.querySelector(".overlay");
  let info = main.querySelector(".info");
  let infoTitle = main.querySelector(".info-title");
  let infoName = main.querySelector(".info-name");
  let infoLink = main.querySelector(".info-link");

  animateIn
    .fromTo(
      overlay,
      3,
      { skewX: 30, scale: 1.5 },
      {
        skewX: 0,
        xPercent: 120,
        transformOrigin: "0% 100%",
        ease: Power4.easeOut
      }
    )
    .from(
      info,
      1,
      { scaleY: 0, transformOrigin: "bottom left", ease: Power4.easeOut },
      "-=1.5"
    )
    .from(infoTitle, 0.2, { autoAlpha: 0, y: 30, ease: Power4.easeOut }, "-=1")
    .from(infoName, 0.3, { autoAlpha: 0, y: 30, ease: Power4.easeOut }, "-=.8")
    .from(infoLink, 0.4, { autoAlpha: 0, y: 30, ease: Power4.easeOut }, "-=.6");

  /// Make a crazy scene man!!!

  new ScrollMagic.Scene({
    triggerElement: main
  })
    .addIndicators()
    .setTween(animateIn)
    .addTo(controller);
});
