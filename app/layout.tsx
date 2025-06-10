import type { Metadata } from "next";
import { Montserrat as FontRat } from "next/font/google";
import "./globals.css";

const fontRat = FontRat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nextflow",
  description: "Nextflow is a platform that implements ai in your company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRat.variable} font-rat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
 