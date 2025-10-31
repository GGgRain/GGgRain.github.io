// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DevGrain's Blog",
  tagline: "Welcome to DevGrain's world - Unreal-Joint, Games, and More!",

  url: "https://gggrain.github.io",
  baseUrl: "/",
  organizationName: "GGgRain",
  deploymentBranch: "main",
  projectName: "GGgRain.github.io",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  //디플로이 할 때 : 디렉토리 루트에서 깃 배치 열고
  //GIT_USER=GGgRain yarn deploy
  //입력d

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko-kr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {property: 'og:image', content: '/og-images/my-page.jpg'},
      ],
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
      },
      navbar: {
        title : "DevGrain's Blog",
        items: [
          { to: "/blog", label: "News", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/DzNFax2aBS",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@devgrain5",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "News",
                to: "/blog",
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevGrain`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;