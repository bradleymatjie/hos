
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import MobileMenu from "./components/mobileNav/page";
import { MenuProvider } from "./Context/MenuContext";
import { Toaster } from "@/components/ui/toaster"
import Link from 'next/link';

// Import Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose appropriate weights for your design
});

export const metadata: Metadata = {
  title: "HOUSE OF SAINT",
  description: "A Creative Digital Agency",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
 
  return (
    <html lang="en">
      <MenuProvider>
        <body className={`${poppins.variable}`}>
            <Header />
            <MobileMenu />
            {children}
            <Toaster />
            <footer className="bg-primary text-white py-8 px-4 md:px-16">
              <div className="max-w-screen-xl mx-auto text-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} HOUSE OF SAINT. All Rights Reserved.</p>
                <div className="flex justify-center gap-6">
                  <Link href="/consult" className="text-white hover:text-secondary">Book A Consultation</Link>
                </div>
                <div className="mt-4 flex justify-center gap-6">
                  {/* <a href="https://facebook.com/houseofsaint" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="text-2xl" />
                  </a>
                  <a href="https://twitter.com/houseofsaint" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="text-2xl" />
                  </a>
                  <a href="https://linkedin.com/company/houseofsaint" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="text-2xl" />
                  </a> */}
                </div>
              </div>
            </footer>
        </body>

      </MenuProvider>
    </html>
  );
}
