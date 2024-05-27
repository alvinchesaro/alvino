import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque, Inter, Oswald  } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const GravaFont = localFont({
  src: "../public/assets/fonts/Grava.woff2",
  variable: "--font-grava",
});

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
      <body className={cn(
        MainFont.className, 
        OswaldFont.variable, 
        GravaFont.variable)}>
        {children}
      </body>
    </html>
  );
}
