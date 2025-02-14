import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import type React from "react";
import { Navbar } from "./page";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Facter Truck - Gestão de Frotas",
  description: "Sistema completo para gestão de manutenção de frotas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
