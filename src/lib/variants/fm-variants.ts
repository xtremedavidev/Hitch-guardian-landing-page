export const fadeInAnimationVariantsVertical = {
    initial: {
      opacity: 0,
      y: 100,
      scale: 0.6
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.25 * index,
      },
    }),
  };

export const fadeInAnimationVariantsHorizontal = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.35 * (index+1),
      },
    }),
  };