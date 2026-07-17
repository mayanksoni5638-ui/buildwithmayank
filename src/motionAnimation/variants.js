export const fadeUp = (delay = 0, duration = 0.5, distance = 100) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeDown = (delay = 0, duration = 0.5, distance = 100) => ({
  hidden: {
    opacity: 0,
    y: -distance,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeLeft = (delay = 0, duration = 0.5, distance = 100) => ({
  hidden: {
    opacity: 0,
    x: -distance,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeRight = (delay = 0, duration = 0.5, distance = 100) => ({
  hidden: {
    opacity: 0,
    x: distance,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
