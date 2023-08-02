import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { STYLES } from "@/constants/styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Key Vault",
  description: "Key Vault is a password generator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        <main
          className="flex bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100"
          style={{
            minHeight: `calc(100vh - ${
              STYLES.NAV_HEIGHT + STYLES.FOOTER_HEIGHT
            }px)`,
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
