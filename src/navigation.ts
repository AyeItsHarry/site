import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Discord', href: 'https://discord.gg/rreHJdkfQh', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@HarryWalker-UK' },
    { ariaLabel: 'Twitch', icon: 'tabler:brand-twitch', href: 'https://twitch.tv/harrywalkeruk' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/harrywalker.uk' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ayeitsharry' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/harrywalkeruk' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/rreHJdkfQh' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
