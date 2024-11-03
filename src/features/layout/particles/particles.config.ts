import {
  DEFAULT_THEME_COLOR,
  DEFAULT_THEME_MODE,
  ThemeColor,
  ThemeMode,
} from "@/features/theme/useAppTheme";
import { SITE_CONFIG } from "@/lib/site-config";
import { ParticlesOptions } from "@tsparticles/engine";

export const PARTICLES_CONFIG = (
  color: ThemeColor = DEFAULT_THEME_COLOR,
  mode: ThemeMode = DEFAULT_THEME_MODE
): Partial<ParticlesOptions> => ({
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: SITE_CONFIG.brand.primary(color),
    },
    shape: {
      type: "square",
      stroke: {
        width: 1,
        color: SITE_CONFIG.brand.primary(color),
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: mode === "dark" ? 0.030422178395625899 : 0.05,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 36.076771369474265,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 160.3412060865523,
      color: {
        value: SITE_CONFIG.brand.primary(color),
      },
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 10,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
