import type { Metadata } from "next";
import { Cookie, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cookie",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VEND-SOCIAL MCR | Smart Vending & Coffee Solutions Manchester",
  description:
    "Premium vending, coffee and water solutions for modern businesses, gyms, residential communities and events across Manchester. Available 24/7.",
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cookie.variable} ${plusJakartaSans.variable} font-sans scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/fav.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/line-seed-jp@latest/index.css"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white text-black antialiased selection:bg-[#E300FF] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
