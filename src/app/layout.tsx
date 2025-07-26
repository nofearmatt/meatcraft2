import type { Metadata } from "next";
import { Oswald, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-oswald",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Мясное ремесло | Только мясо и специи",
  description: "Вяленое мясо премиум качества. Мы не делаем снеки. Мы возвращаем доверие к мясу. Только натуральные ингредиенты, без усилителей вкуса и консервантов.",
  keywords: "вяленое мясо, говядина, свинина, курица, утка, снеки, натуральные продукты, без консервантов",
  openGraph: {
    title: "Мясное ремесло | Только мясо и специи",
    description: "Вяленое мясо премиум качества без усилителей вкуса и консервантов",
    url: "https://meatcraft.ru",
    siteName: "Мясное ремесло",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`min-h-screen flex flex-col bg-stone text-charcoal antialiased ${oswald.variable} ${merriweather.variable}`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
