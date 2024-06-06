import { StaticImageData } from "next/image";

declare module NodeJS {
  interface ProcessEnv {
    GOOGLE_APIKEY: string;
  }
}
