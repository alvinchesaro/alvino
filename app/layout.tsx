import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alvin Chesaro",
  description: "Alvin is a guy who is really passionate about Software Engineering and Design",
  authors: [{name: 'Alvin Chesaro'}],
  keywords: ['Software Engineer', 'Software Engineering Blogs', 'Graphic Design', 'Lead Software Engineer'],
  creator: 'Alvin Chesaro',
  publisher: 'Alvin Chesaro'
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
