import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bridge wallet connect demo",
  description: "bridge wallet connect demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
