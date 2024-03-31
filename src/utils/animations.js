import gsap from "gsap";

export const fadeInAnimation = (el) => {
  gsap.fromTo(
    [...el],
    {
      opacity: 0,
      y: "15rem",
    },
    {
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
      duration: 1.5,
      stagger: 0.2,
    }
  );
};
export const fadeOutAnimation = (el, props) => {
  gsap.to([...el], {
    opacity: 0,
    ease: "power3.inOut",
    duration: 0.2,
    stagger: 0.2,
    ...props,
  });
};
export const floatingAnimation = (el, propsFrom, propsTo) => {
  gsap.fromTo(
    [...el],
    {
      opacity: 0.4,
      y: 0,
      x: 0,
      ...propsFrom
    },
    {
      opacity: 1,
      y: -20,
      x: 10,
      ease: "slow(0.7,0.7,false)",
      yoyo: true,
      repeat: -1,
      duration: 7,
      ...propsTo
    }
  );
};

export const panoramaAnimation = (el, dur, multiply = 1) => {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });
  tl.to([...el], {
    x: 50 * multiply,
    y: 50 * multiply,
    scale: 1.2,
    rotate: "5deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: -50 * multiply,
    y: 50 * multiply,
    x: -10,
    y: -10,
    scale: 1.15,
    rotate: "0deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: -50 * multiply,
    y: -50 * multiply,
    x: -10,
    y: -10,
    scale: 1.2,
    rotate: "-5deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: 50 * multiply,
    y: -50 * multiply,
    x: -10,
    y: -10,
    scale: 1.15,
    rotate: "0deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: 50 * multiply,
    y: 50 * multiply,
    scale: 1.2,
    rotate: "5deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
};

export const preloaderCloseAnimation = (el) => {
  const tl = gsap.timeline();
  tl.to([...el], {
    rotate: "45deg",
    scale: 3,
    duration: 2,
    ease: "expo.in",
  });
  tl.to([...el], {
    rotate: "100deg",
    scale: 10,
    duration: 0.8,
    ease: "expo.Out",
  });
  tl.to([...el], {
    opacity: 0,
    duration: 0.2,
  });
  tl.to([...el], {
    css: { visibility: "hidden", display: "none" },
  });
};
