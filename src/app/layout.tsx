import type { Metadata } from "next";

import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "LIMA: Transforming Food Systems in Africa",
  description:
    "Empowering smallholder farmers with innovative and sustainable solutions.",
};

const font = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} overflow-y-auto relative w-full mx-auto`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
