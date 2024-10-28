import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Porfolio de Facundo Godoy - Desarrollador y Programador Web",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont dark:bg-dark w-full min-h-screen xl:p-24 lg:p-16 md:p-12 sm:p-8`}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
          } else {
              document.documentElement.classList.remove('dark')
          `}
        </Script>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
