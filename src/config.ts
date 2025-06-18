import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://harrywalker.uk", // replace this with your deployed domain
  author: "Harry Walker",
  profile: "https://harrywalker.uk/about",
  desc: "Harry Walker's personal website!",
  title: "harrywalker.uk",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-GB"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/harrywalker.uk",
    linkTitle: `Bluesky`,
    active: true,
    icon: "simple-icons:bluesky",
  },
  {
    name: "Github",
    href: "https://github.com/hwalker56",
    linkTitle: `GitHub`,
    active: true,
    icon: "simple-icons:github",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/harrywalkeruk",
    linkTitle: `Instagram`,
    active: false,
    icon: "simple-icons:instagram",
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
    icon: "simple-icons:linkedin",
  },
  {
    name: "Mail",
    href: "mailto:contact@harrywalker.uk",
    linkTitle: `Email`,
    active: true,
    icon: "lucide:mail",
  },
  {
    name: "X",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on X`,
    active: false,
    icon: "simple-icons:x",
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
    icon: "simple-icons:twitch",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@ayeitsharry",
    linkTitle: `YouTube`,
    active: false,
    icon: "simple-icons:youtube",
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
    icon: "simple-icons:whatsapp",
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
    icon: "simple-icons:snapchat",
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
    icon: "simple-icons:pinterest",
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
    icon: "simple-icons:tiktok",
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
    icon: "simple-icons:codepen",
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
    icon: "simple-icons:discord",
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
    icon: "simple-icons:gitlab",
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
    icon: "simple-icons:reddit",
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
    icon: "simple-icons:skype",
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
    icon: "simple-icons:steam",
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
    icon: "simple-icons:telegram",
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
    icon: "simple-icons:mastodon",
  },
];
