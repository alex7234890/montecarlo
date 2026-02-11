import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "ASD Montecarlo - Societa di Calcio",
  description:
    "ASD Montecarlo - Scuola Calcio, Settore Giovanile e Prima Squadra. Passione, disciplina e talento sul campo.",
};

export const viewport = {
  themeColor: "#c62828",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
