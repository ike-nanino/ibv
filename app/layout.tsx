


import type { Metadata } from "next";
import { EB_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";

const eb = EB_Garamond({
  subsets: ["latin"],
  weight: [ "400", '500', '600', '700'],
  variable: '--font-eb'
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', "400", '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Welcome to IBV International Vault",
  description: "Private safe deposit vaults offering you peace of mind and an invaluable service of world class safety, privacy and confidentiality. With branches in South Africa, London and Dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${eb.variable} antialiased`}
      >
        
        <SessionProviderWrapper>{children}</SessionProviderWrapper>

        <Footer />
      </body>
    </html>
  );
}
