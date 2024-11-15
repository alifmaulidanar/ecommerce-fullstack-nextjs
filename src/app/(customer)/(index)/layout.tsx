import "../../globalsLanding.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: "Belanja",
  description: "Belanja E-Commerce Home",
};

export default function LandingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
