import gsap from "gsap";

export const clickToStartAnimation = (el) => {
  const tl = gsap.timeline();

  tl.fromTo([...el], {
    opacity: 0.6,
    duration: 1.5,
    ease: "power3.inOut",
  }, {
    opacity: 0.3,
    duration: 1.5,
    ease: "power3.inOut",
    yoyo: true,
    repeat: -1
  });
};

export const fadeInAnimation = (el, props) => {
  const firstAnimation = {
    opacity: 0,
    y: "15rem",
    ease: "power3.inOut",
    duration: 1.5,
  };

  const secondAnimation = {
    opacity: 1,
    y: 0,
    ease: "power3.inOut",
    duration: 1.5,
    stagger: 0.2,
    ...props,
  };

  const animation = gsap.fromTo([...el], firstAnimation, secondAnimation);

  return { animation, firstAnimation, secondAnimation };
};
export const fadeOutAnimation = (el, props) => {
  const animation = gsap.to([...el], {
    opacity: 0,
    ease: "power3.inOut",
    duration: 0.2,
    stagger: 0.2,
    ...props,
  });

  return animation;
};
export const floatingAnimation = (el, propsFrom, propsTo) => {
  const animation = gsap.fromTo(
    [...el],
    {
      opacity: 0.4,
      y: 0,
      x: 0,
      ...propsFrom,
    },
    {
      opacity: 1,
      y: -20,
      x: 10,
      ease: "slow(0.7,0.7,false)",
      yoyo: true,
      repeat: -1,
      duration: 7,
      ...propsTo,
    }
  );

  const play = () => animation.play();
  const pause = () => animation.pause();
  const restart = () => animation.restart();
  animation.play();

  return { play, pause, restart, animation };
};
export const panoramaAnimation = (el, dur, multiply = 1) => {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });
  tl.to([...el], {
    x: 50 * multiply,
    y: 50 * multiply,
    scale: 1.4,
    rotate: "5deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: -50 * multiply,
    y: 50 * multiply,
    scale: 1.3,
    rotate: "0deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: -50 * multiply,
    y: -50 * multiply,
    scale: 1.4,
    rotate: "-5deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: 50 * multiply,
    y: -50 * multiply,
    scale: 1.3,
    rotate: "0deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: 50 * multiply,
    y: 50 * multiply,
    scale: 1.4,
    rotate: "5deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
};

export const starsAnimation = (el, dur, multiply = 1) => {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });
  tl.to([...el], {
    x: 50 * multiply,
    y: 50 * multiply,
    rotate: (5 * multiply) / 2 + "deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: -50 * multiply,
    y: 50 * multiply,
    rotate: (0 * multiply) / 2 + "deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: -50 * multiply,
    y: -50 * multiply,
    rotate: (-5 * multiply) / 2 + "deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: 50 * multiply,
    y: -50 * multiply,
    rotate: "0deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
  tl.to([...el], {
    x: 50 * multiply,
    y: 50 * multiply,
    rotate: (5 * multiply) / 2 + "deg",
    duration: dur,
    ease: "expoScale(0.5,7,none)",
  });
};

export const cameraStarsAnimation = (el, mouse, multiply = 1) => {
  gsap.to([...el], {
    x: mouse.x * -multiply,
    y: mouse.y * multiply,
    duration: 10,
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
    duration: 0.5,
  });
  tl.to([...el], {
    css: { visibility: "hidden", display: "none" },
  });
};

export const setToAnimation = (el, props) => {
  gsap.to([...el], {
    ...props,
  });
};
