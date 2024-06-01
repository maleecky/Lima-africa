import { StaticImageData } from "next/image";

export type headerContentsType = {
  logourl: StaticImageData;

  links: [
    {
      label: string;
      path: string;
      productList: [
        { label: string; link: string },
        { label: string; link: string },
        { label: string; link: string }
      ];
    },
    {
      label: string;
      path: string;
      productList: [];
    },
    {
      label: string;
      path: string;
      productList: [];
    },
    {
      label: string;
      path: string;
      productList: [];
    },
    {
      label: string;
      path: string;
      productList: [];
    }
  ];
  contactBtn: { label: string; path: string; icon: StaticImageData };
};

declare module NodeJS {
  interface ProcessEnv {
    GOOGLE_APIKEY: string;
  }
}
