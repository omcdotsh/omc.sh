import { HEXA_COLOR_MAP, ThemeColor } from "@/features/theme/useAppTheme";

export const SITE_CONFIG = {
  name: "omc.",
  description:
    "End-to-end crypto products — from protocol to interface to ship. Design-led builds with engineering depth.",
  productionUrl: "https://omc.sh",
  appIcon: "/images/icon.png",
  brand: {
    primary: (color: ThemeColor) => {
      return HEXA_COLOR_MAP[color];
    },
  },
  socials: {
    calendar: "https://cal.com/omc.sh",
    linkedin: "https://www.linkedin.com/in/oscarmacieira",
    github: "https://github.com/omcdotsh",
    twitter: "https://x.com/omc_sh",
    behance: "https://www.behance.net/OscarDzn",
    mail: "contact@omc.sh",
  },
};
