import type { Metadata } from "next";
import {Source_Sans_3 } from "next/font/google";
import { GeistSans } from 'geist/font/sans'
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import Header from "./Components/Header";
import BgWrapper from "./Components/BgWrapper";

const inter = Source_Sans_3({
  subsets: ["latin"],
  weight: ["500","600","700"]
});

export const metadata: Metadata = {
  title: "Connect 4",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <ConvexClientProvider>
      

      
      <body className={`min-h-full antialiased  bg-black text-[#EDEDED]  font-bold  ${inter.className}`}>
        
          <Header/>
          <BgWrapper>
          
            {children}
          
          </BgWrapper>
        </body>
        
          </ConvexClientProvider> 
    </html>
  );
}
