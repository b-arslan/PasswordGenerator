import type { Metadata } from "next";
import "./styles/globals.scss";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Generating secure and unique passwords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
