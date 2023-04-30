// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const TITLE = 'Home';
const TAGLINE =
  'An OpenSource platform for React developers to learn, create and share ReactJS Projects.';
const ORG_NAME = 'reactplay';
const REPO_NAME = 'docs';
const MAIN_SITE_URL = 'https://reactplay.io/';
const WEB_URL = 'https://docs.reactplay.io/';
const BLOG_URL = 'https://blog.reactplay.io/';
const GITHUB_URL = 'https://github.com/reactplay/docs/';
const DISCORD_URL = 'https://discord.gg/vrTxWUP8Am';
const TWITTER_URL = 'https://twitter.com/reactplayio';
const LINKEDIN_URL = 'https://www.linkedin.com/company/reactplay/';
const COPYRIGHT = `Copyright © ${new Date().getFullYear()} ${TITLE}. Built with Docusaurus.`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: TITLE,
  tagline: TAGLINE,
  url: WEB_URL,
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: ORG_NAME, // Usually your GitHub org/user name.
  projectName: REPO_NAME, // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',

      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: TITLE,
        logo: {
          alt: `${TITLE} Logo`,
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
            className: 'beta-badge',
          },
          {
            href: BLOG_URL,
            label: 'Blog',
            position: 'left',
          },
          {
            href: MAIN_SITE_URL,
            label: 'ReactPlay',
            position: 'left',
          },
          {
            href: GITHUB_URL,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: DISCORD_URL,
              },
              {
                label: 'Twitter',
                href: TWITTER_URL,
              },
              {
                label: 'LinkedIn',
                href: LINKEDIN_URL,
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: BLOG_URL,
              },
              {
                label: 'GitHub',
                href: GITHUB_URL,
              },
            ],
          },
        ],
        copyright: COPYRIGHT,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',

        respectPrefersColorScheme: true,
      },
    }),
  scripts: [
    {
      src: 'https://analytics.reactplay.io/script.js',
      async: true,
      'data-website-id': 'b385383c-0fb2-437f-84a8-2a98daf05fde',
    },
  ],
};

module.exports = config;
