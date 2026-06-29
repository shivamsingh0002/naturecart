import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

import Providers from "../src/components/providers";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import FloatingCart from "@/components/FloatingCart";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
  lang="en"
  data-scroll-behavior="smooth"
>
      <body className="bg-[#f7faf5]">
        <Providers>
          <Navbar />

          {children}

          <CartDrawer />
          <FloatingCart />
        </Providers>

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}