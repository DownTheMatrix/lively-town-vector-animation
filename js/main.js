function init() {
  "use strict";

  /* DOM Elements */
  const TRAIN = document.querySelector("#TRAIN");
  const CLOUD_SMALL = document.querySelector("#cloud-small");
  const CLOUD_MEDIUM = document.querySelector("#cloud-medium");
  const CLOUD_LARGE = document.querySelector("#cloud-large");
  const CAR_BLUE = document.querySelector("#car-blue");
  const CAR_YELLOW = document.querySelector("#car-yellow");
  const MAIN_CTA = document.querySelector(".main-cta");
  const BRIDGE = document.querySelector("#bridge-group");

  MAIN_CTA.addEventListener("click", function () {
    BRIDGE.scrollIntoView({ behavior: "smooth" });
  });

  /* Clouds animation */
  function animateClouds() {
    gsap.set(CLOUD_LARGE, {
      x: "-500px",
    });

    gsap.set(CLOUD_MEDIUM, {
      x: "500px",
    });

    gsap.set(CLOUD_SMALL, {
      x: "800px",
    });

    const tl = gsap.timeline();
    tl.to(CLOUD_LARGE, {
      repeat: -1,
      duration: 60,
      ease: "linear",
      x: "1800px",
    })
      .to(
        CLOUD_MEDIUM,
        {
          repeat: -1,
          duration: 50,
          ease: "linear",
          x: "-2000px",
        },
        "<1"
      )
      .to(
        CLOUD_SMALL,
        {
          repeat: -1,
          duration: 50,
          x: "-1800px",
          ease: "linear",
        },
        "<2"
      );
    return tl;
  }

  /* Train animation */
  function animateTrain() {
    gsap.set(TRAIN, {
      x: "500px",
    });

    const tl = gsap.timeline();
    tl.to(TRAIN, {
      repeat: -1,
      duration: 10,
      xPercent: -500,
      ease: "linear",
    });
    return tl;
  }

  /* Blue car animation */
  function animateCarBlue() {
    gsap.set(CAR_BLUE, {
      x: "300px",
    });

    const tl = gsap.timeline();
    tl.to(CAR_BLUE, {
      repeat: -1,
      duration: 10,
      ease: "linear",
      x: "-1800px",
    });
  }

  /* Yellow car animation */
  function animateCarYellow() {
    gsap.set(CAR_YELLOW, {
      x: "-100px",
    });

    const tl = gsap.timeline();
    tl.to(
      CAR_YELLOW,
      {
        repeat: -1,
        duration: 10,
        ease: "linear",
        x: "2000px",
      },
      "+=1"
    );
  }

  const masterTimeline = gsap.timeline();
  masterTimeline.add(animateClouds);
  masterTimeline.add(animateTrain);
  masterTimeline.add(animateCarBlue);
  masterTimeline.add(animateCarYellow);
  masterTimeline.paused(true);

  /* Conditionally display animation on large screens */
  const mediaScreen = window.matchMedia("(min-width: 1024px)");

  if (mediaScreen.matches) {
    masterTimeline.paused(false);
  } else {
    masterTimeline.paused(true);
  }
}

document.addEventListener("DOMContentLoaded", init);
