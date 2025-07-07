import { Space_Grotesk } from 'next/font/google' // Import the correct font
import { Navbar } from "@/components/ui/navbar";
import { Footer } from '@/components/ui/footer';
import { Toaster } from 'sonner';
import "./globals.css"
import { Checkout } from '@/components/ui/checkout';
import { Separator } from '@/components/ui/separator';

// Correctly import and configure Space_Grotesk
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], // This line is crucial for fixing the build error
  // You can also add other options like weight, display, etc., if needed:
  // weight: ['400', '700'],
  // display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // Apply the font's className to your html tag
    <html lang="en" className={`${spaceGrotesk.className} dark`}>
      <body>
        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Checkout />
        <Separator />
        <Footer />
      </body>
    </html>
  );
}