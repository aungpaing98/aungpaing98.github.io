const containerAnimation = {
  hidden: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    // type: "spring",
  },
  exit: {
    opacity: 0,
    y: 50,
  },
};

export default containerAnimation;
