// SCROLL TRIGGER
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "25%",
    //markers: true,
    scrub: true,
  },
});

tlIntro.fromTo(
  "nav",
  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);
