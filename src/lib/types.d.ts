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

export type contactFormContentsType = {
  formHeader: string;
  description: string;
  contactsInformation: [
    {
      label: string;
      icon: () => React.JSX;
    },
    {
      label: string;
      icon: () => React.JSX;
    }
  ];
  socials: [
    {
      link: string;
      icon: () => React.JSX;
    },
    {
      link: string;
      icon: () => React.JSX;
    },
    {
      link: "https://x.com/limaafrica_/status/1780870612275126728?s=46&t=hSwQBSt95eH9q7ctcZUAwg";
      icon: () => React.JSX;
    }
  ];
  formLabel: string;
  fields: {
    twoRows: [
      {
        name: string;
        placeholder: string;
        controller: string;
        type: string;
      },
      {
        name: string;
        placeholder: string;
        controller: string;
        type: string;
      }
    ];
    threeCols: [
      {
        name: string;
        placeholder: string;
        controller: string;
        type: string;
      },
      {
        name: string;
        placeholder: string;
        controller: string;
        type: string;
      },
      {
        name: string;
        placeholder: string;
        controller: string;
        type: string;
      }
    ];
  };

  submitBtn: { label: string };
};

declare module NodeJS {
  interface ProcessEnv {
    GOOGLE_APIKEY: string;
  }
}
