const splideOptions = {
  type: "loop",
  perPage: 4,
  perMove: 1,
  gap: 40,
  arrows: false,
  autoplay: true,
  interval: 1700,
  breakpoints: {
    700: { perPage: 1 },
    1100: { perPage: 2 },
    1400: { perPage: 3 },
  },
};
export default splideOptions;
