import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import DarkModeProvider from "./providers/DarkModeProvider";
import "@splidejs/splide/css/core";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Yacine AD",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${ovo.variable} h-full antialiased leading-8 overflow-x-hidden`}
      >
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
