import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Footer from "@/components/Footer";
import WhatsappLive from "./WhatsappLive";



export const metadata: Metadata = {
  title: "Farmer Website",
  description: "A farmer website built with Next.Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* <Container className="py-24"> {children}</Container> */}
        {children}

        <Footer/>
        <WhatsappLive/>
      </body>
    </html>
  );
}
