import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Zen_Kurenaido } from "next/font/google";

const zenKurenaido = Zen_Kurenaido({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "彩乃Botについて",
  description: "DiscordBotの彩乃について書いてます",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={zenKurenaido.className}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-QKMPNLHGDF" />
    </html>
  );
}
