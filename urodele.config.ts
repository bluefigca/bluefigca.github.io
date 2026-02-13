export const config = {
  github: {
    login: "bluefigca", // github login name, not user name
    repo: "bluefigca.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "bluefigca",
    brand: "bluefigca",
    description: "Less is more",
  },
  footer: {
    copyright: "©  bluefigca  ·  since 2026    ·",
    copyrightUrl: "https://bluefigca.github.io",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
