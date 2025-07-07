import { Space_Grotesk } from '@next/font/google'
import { Navbar } from "@/components/ui/navbar";
import { Footer } from '@/components/ui/footer';
import { Toaster } from 'sonner';
import "./globals.css"
import { Checkout } from '@/components/ui/checkout';

const bebas = Space_Grotesk({})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${bebas.className} ${"dark"}`}>
      <body>
        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Checkout />
        <Footer />
      </body>
    </html>
  );
}
