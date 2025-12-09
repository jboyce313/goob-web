import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOOB",
  description: "Going out of business finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
