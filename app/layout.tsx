import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "LGTM - - Share Your Creations, Discover New Launches",
  description: "LGTM is the premier developer community to showcase your coding projects.Build your portfolio, get code reviews, and discover what other developers are building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
