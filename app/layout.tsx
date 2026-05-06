import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://san-node.vercel.app"),

  title: {
    default: "SanNode | Design, Programação e Automação",
    template: "%s | SanNode",
  },

  description:
    "Portfólio da SanNode: identidade visual, sites, sistemas web, interfaces e automações com Google Workspace.",

  keywords: [
    "SanNode",
    "Flávio Santos",
    "portfólio",
    "design",
    "programação",
    "automação",
    "sites",
    "sistemas web",
    "identidade visual",
    "Google Workspace",
    "Apps Script",
  ],

  authors: [
    {
      name: "Flávio Santos",
    },
  ],

  creator: "Flávio Santos",

  icons: {
    icon: "/logo-sannode.png",
    shortcut: "/logo-sannode.png",
    apple: "/logo-sannode.png",
  },

  openGraph: {
    title: "SanNode | Design, Programação e Automação",
    description:
      "Portfólio de projetos digitais, identidades visuais, sistemas web e automações.",
    url: "https://san-node.vercel.app",
    siteName: "SanNode",
    images: [
      {
        url: "/og-sannode.png",
        width: 1200,
        height: 630,
        alt: "SanNode - Design, Programação e Automação",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SanNode | Design, Programação e Automação",
    description:
      "Portfólio de projetos digitais, identidades visuais, sistemas web e automações.",
    images: ["/og-sannode.png"],
  },
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