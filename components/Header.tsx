"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#1E3654] bg-[#07111F]/85 backdrop-blur-xl">
      <div className="container-site flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#1E3654] bg-[#0C1B2E] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <Image
              src="/logo-sannode.png"
              alt="Logo SanNode"
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="font-bold tracking-tight text-[#F5FBFF]">SanNode</p>
            <p className="text-xs text-[#9DB2C7]">Design & Programação</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#A9BDD3] transition hover:text-[#00D9FF]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5584988479869"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB] md:inline-flex"
        >
          Fale comigo
          <MessageCircle className="ml-2 h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-2xl border border-[#1E3654] bg-[#0C1B2E] p-3 text-[#F5FBFF] md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#1E3654] bg-[#07111F] md:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm text-[#A9BDD3] transition hover:bg-[#0C1B2E] hover:text-[#00D9FF]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://wa.me/5584988479869"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-[#0B2A5B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Fale comigo no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}