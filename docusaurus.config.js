// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const isNetlifyProduction =
  process.env.NETLIFY && process.env.CONTEXT === "production";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Test Website Docusaurus",
  tagline: "Welcome to my website",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: isNetlifyProduction
    ? "https://{your-netlify-site-url}"
    : "https://7rikazhexde.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: isNetlifyProduction ? "/" : "/test-website-docusaurus/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "7rikazhexde", // Usually your GitHub org/user name.
  projectName: "test-website-docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },

  customFields: {
    deploy: isNetlifyProduction,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        //https://docusaurus.io/docs/using-plugins#docusauruspreset-classic
        docs: {
          // docs/index.mdをTopページにする場合にコメントアウトを外すこと。
          //routeBasePath: '/',
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/7rikazhexde/test-website-docusaurus/edit/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/7rikazhexde/test-website-docusaurus/edit/main",
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
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { type: "localeDropdown", position: "right" },
          {
            to: "/tutorial",
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            to: "/app",
            type: "docSidebar",
            sidebarId: "appSidebar",
            position: "left",
            label: "App",
          },
          {
            to: "/sample",
            type: "docSidebar",
            sidebarId: "sampleSidebar",
            position: "left",
            label: "Sample",
          },
          {
            href: "https://github.com/7rikazhexde/test-website-docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                //src/pages/index.jsをTopページにする場合
                to: "/docs/tutorial/intro",
                //docs/index.mdをTopページにする場合
                //src/pages/index.jsをsrc/pages/index.js0にすること。
                //to: '/tutorial/intro',
              },
              {
                label: "App",
                // src/pages/index.jsをTopページにする場合
                to: "/docs/app/",
                // docs/index.mdをTopページにする場合
                // src/pages/index.jsをsrc/pages/index.js0にすること。
                //to: '/app',
              },
              {
                label: "Sample",
                // src/pages/index.jsをTopページにする場合
                to: "/docs/sample/",
                // docs/index.mdをTopページにする場合
                // src/pages/index.jsをsrc/pages/index.js0にすること。
                //to: '/sample',
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "X(Twitter)",
                href: "https://twitter.com/tw_7rikazhexde",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "About",
                // src/pages/index.jsをTopページにする場合
                to: "/docs/about",
                // docs/index.mdをTopページにする場合
                // src/pages/index.jsをsrc/pages/index.js0にすること。
                //to: '/about',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 7rikazhexde. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#usage
        // https://github.com/easyops-cn/docusaurus-search-local/issues/206
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        // docs/index.mdをTopページにする場合にコメントアウトを外すこと。
        //docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        language: ["en","ja"],
      },
    ],
  ],
};

export default config;
