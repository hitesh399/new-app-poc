"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

console.log("Geist>>>>>");

import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../utils/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <html lang="en">
        <Body children={children} />
      </html>
    </I18nextProvider>
  );
}

const Body = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${
        i18n.language === "ur" ? "text-right" : "text-left"
      }`}
    >
      {children}
    </body>
  );
};
