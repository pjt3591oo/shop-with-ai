import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { CartProvider } from "@/features/cart";

export const metadata: Metadata = {
  title: "Online Shopping Mall",
  description: "A full-featured online shopping mall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8 mx-auto container">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
