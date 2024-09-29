import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { Providers } from "./providers";
import { Inconsolata } from "next/font/google";
import "./confetti-theme.scss";
import "./globals.scss";

const FONT = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FONT.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
