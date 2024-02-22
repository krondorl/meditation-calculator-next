/*!
 * Copyright (c) 2024 Adam Burucs
 *
 * MIT Licensed
 */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meditation Calculator",
  description: "Calculate your total practice time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32" />
      </head>
      <body>{children}</body>
    </html>
  );
}
