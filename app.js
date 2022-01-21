// SCROLL TRIGGER
// const tlIntro = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".first-page",
//     start: "0%",
//     end: "25%",
//     //markers: true,
//     scrub: true,
//   },
// });

// tlIntro.fromTo(
//   "nav",
//   {
//     opacity: 1,
//   },
//   {
//     opacity: 0,
//   }
// );

// Pin the first page
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

// Highlight page2
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    markers: {
      startColor: "blue",
      endColor: "blue",
    },
    scrub: true,
    start: "-40%",
    end: "40%",
  },
});

tlH.fromTo(
  ".highlight",
  {
    color: "rgba(255, 255, 255, 0.4)",
  },
  {
    color: "rgba(255, 255, 255, 1.0)",
    stagger: 1,
  }
);

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    markers: {
      startColor: "pink",
      endColor: "pink",
    },
    scrub: true,
    start: "-20%",
    end: "60%",
  },
});

tlHRemove.to(".highlight", {
  color: "rgba(255, 255, 255, 0.4)",
  stagger: 1,
});
