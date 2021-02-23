const TRAIN = document.querySelector("#TRAIN");
const CLOUD_SMALL = document.querySelector("#cloud-small");
const CLOUD_MEDIUM = document.querySelector("#cloud-medium");
const CLOUD_LARGE = document.querySelector("#cloud-large");
const CAR_BLUE = document.querySelector("#car-blue");
const CAR_YELLOW = document.querySelector("#car-yellow");

const tl = gsap.timeline();

/* Set initial values */
gsap.set(TRAIN, {
  x: "500px",
});

gsap.set(CLOUD_LARGE, {
  x: "-500px",
});

gsap.set(CLOUD_MEDIUM, {
  x: "800px",
});

gsap.set(CLOUD_SMALL, {
  x: "600px",
});

gsap.set(CAR_BLUE, {
  x: "300px",
});

gsap.set(CAR_YELLOW, {
  x: "-100px",
});

/* Animate values */
gsap.to(CAR_BLUE, {
  repeat: -1,
  duration: 10,
  ease: "linear",
  x: "-1800px",
});

gsap.to(CAR_YELLOW, {
  repeat: -1,
  duration: 10,
  ease: "linear",
  x: "2000px",
});

gsap.to(CLOUD_LARGE, {
  repeat: -1,
  duration: 60,
  ease: "linear",
  x: "1800px",
});

gsap.to(CLOUD_MEDIUM, {
  repeat: -1,
  duration: 50,
  ease: "linear",
  x: "-2000px",
});

gsap.to(CLOUD_SMALL, {
  repeat: -1,
  duration: 50,
  x: "-1800px",
  ease: "linear",
});

tl.to(TRAIN, {
  repeat: -1,
  duration: 10,
  xPercent: -500,
  ease: "linear",
});
