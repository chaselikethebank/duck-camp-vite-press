import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DuckCamp",
  description: "Welcome to DuckCamp!",
  lang: "en-US",
  themeConfig: {
    logo: "/DuckCamp.svg",
    siteTitle: "DuckCamp",
    nav: [{ text: "Get Started", link: "/getting-started" }],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/chaselikethebank/duck-camp-vite-press ",
      },
      { icon: "twitter", link: "https://twitter.com " },
      {
        icon: {
          svg: '<svg role="img" width="26.01" height="32" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg>',
        },
        link: "https://www.apple.com/app-store/ ",
      },
//       {
//         icon: {
//           svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
//   <path d="M23.49 12.24L18.45 7.2C17.92 6.67 17.13 6.93 17.13 7.65V9.98L26.53 9.98L26.53 14.52L17.13 14.52V17.91C17.13 18.63 17.92 18.89 18.45 18.36L23.49 13.32C24.02 12.79 24.02 12.21 23.49 12.24ZM5.75 4.9C5.75 4.32 6.29 3.87 6.87 3.87C7.45 3.87 7.89 4.32 7.89 4.9V10.22L21.42 10.22V13.9L7.89 13.9V19.04C7.89 19.62 7.45 20.07 6.87 20.07C6.29 20.07 5.75 19.62 5.75 19.04V4.9ZM24.51 4.9C24.51 4.32 24.96 3.87 25.54 3.87C26.12 3.87 26.56 4.32 26.56 4.9V19.04C26.56 19.62 26.12 20.07 25.54 20.07C24.96 20.07 24.51 19.62 24.51 19.04V4.9Z" fill="#000000"/>
// </svg>`,
//         },
//         link: "https://www.google.com/ ",
//       },
    ],
    sidebar: {
      "/getting-started": [
        {
          text: "Guide",
          items: [
            { text: "TAM", link: "/tam" },
            { text: "MVP and Feature Set", link: "src/content/mvp-feature-set/index.md" },
            { text: "User Stories", link: "/user-stories" },
            { text: "Datastore", link: "/datastore" },
            { text: "Style Guide", link: "/style-guide" },
            { text: "Docs", link: "/docs" },
          ],
        },
      ],
    },
    // search: {
    //     provider: 'local', // You can use 'local' or 'algolia' here
    //   },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright 2024 DuckCamp",
    },
    editLink: {
      pattern: "https://github.com/your-repo/docs/:path",
      text: "Edit this page on GitHub",
    },
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
  },
});
