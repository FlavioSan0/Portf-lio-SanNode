import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SanNode | Design, Programação e Automação",
  description:
    "Portfólio da SanNode: identidade visual, interfaces, sites, sistemas personalizados e automações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}