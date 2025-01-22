import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: "Okto",
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "API Reference",
      url: "/docs/SDKs/overview",
      active: "nested-url",
    },
    {
      text: "SDKs",
      url: "/docs/SDKs/react/features",
      active: "nested-url",
      // dropdown: [
      //   {
      //     text: "Unity",
      //     url: "/docs/SDKs/unity/features",
      //   },
      //   {
      //     text: "React",
      //     url: "/docs/SDKs/react/features",
      //   },
      //   {
      //     text: "Flutter",
      //     url: "/docs/SDKs/flutter/features",
      //   },
      // ],
    },
  ],
  githubUrl: "https://github.com/Shradhesh71"
};
