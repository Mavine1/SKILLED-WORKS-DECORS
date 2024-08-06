import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skilled Works Decors",
  description: "SKILLED WORKS DECORS is a premier interior design company that specializes in transforming clients' visions into stunning realities. With a dedicated focus on customer satisfaction, our team of expert designers and craftsmen work tirelessly to create bespoke spaces that exceed expectations and bring joy to our clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
