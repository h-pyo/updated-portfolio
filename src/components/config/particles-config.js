const particlesConfig = {
  fullScreen: {
    enable: false
  },
  background: "transparent",
  fpsLimit: 120,
  interactivity: {
    events: {
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#393E46",
    },
    links: {
      color: "#EEEEEE",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 45,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export default particlesConfig