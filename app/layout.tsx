import type { Metadata } from "next";
import { Montserrat as FontMontserrat } from "next/font/google";
import "./globals.css";


const fontMontserrat = FontMontserrat({
  variable: "--font-montserrat",
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
        className={`${fontMontserrat.variable} font-montserrat antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
 