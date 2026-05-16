"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Code2, Layers3, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Layers3,
    title: "Design",
    description: "Identidade e interfaces",
  },
  {
    icon: Code2,
    title: "Dev",
    description: "Sites e sistemas",
  },
  {
    icon: Workflow,
    title: "Processo",
    description: "Organização e evolução",
  },
];

export default function ProfileCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[#1E3654]/80 bg-[#06111F]/78 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,217,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_34%)]" />

      <div className="absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,217,255,0.65),transparent)] opacity-70" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.45),transparent)] opacity-60" />

      <div className="absolute right-5 top-5 z-20 hidden h-24 w-24 opacity-45 md:block">
        <svg viewBox="0 0 120 120" className="h-full w-full">
          <path
            d="M12 28H50V48H78V84H108"
            fill="none"
            stroke="rgba(0,217,255,0.38)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 88H42V66H70V36H102"
            fill="none"
            stroke="rgba(37,99,235,0.34)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="28" r="4" fill="rgba(0,217,255,0.8)" />
          <circle cx="108" cy="84" r="4" fill="rgba(0,217,255,0.8)" />
          <circle cx="102" cy="36" r="4" fill="rgba(37,99,235,0.9)" />
        </svg>
      </div>

      <div className="relative p-3">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-[#1E3654]/90 bg-[#07111F]">
          <div className="relative aspect-[4/4.85]">
            <Image
              src="/flavio-profile.png"
              alt="Flávio Oliveira, criador da SanNode"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 390px"
              className="object-cover object-center transition duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,11,20,0.02),rgba(4,11,20,0.08)_45%,rgba(4,11,20,0.58))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.12),transparent_32%)]" />

            <div className="absolute bottom-4 left-4 rounded-full border border-[#00D9FF]/35 bg-[#040B14]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#00D9FF] shadow-[0_0_26px_rgba(0,217,255,0.14)] backdrop-blur">
              Criador da SanNode
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-6 pb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#00D9FF]">
              Por trás da SanNode
            </p>

            <h3 className="mt-3 text-3xl font-black tracking-tight text-[#F5FBFF]">
              Flávio Oliveira
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#A9BDD3]">
              Design, programação e automação
            </p>
          </div>

          <span className="mt-6 rounded-full border border-[#1E3654]/80 bg-[#0C1B2E]/86 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9DB2C7]">
            SanNode
          </span>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#1E3654]/80 bg-[#07111F]/72 p-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#00D9FF]/20 bg-[#0C2744]/80 text-[#00D9FF] shadow-[0_0_28px_rgba(0,217,255,0.08)]">
              <BadgeCheck className="h-5 w-5" />
            </div>

            <div>
              <h4 className="text-base font-bold text-[#F5FBFF]">
                Trabalho com visão completa
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#A9BDD3]">
                Da ideia inicial à entrega visual e funcional, conectando marca,
                interface, código e processo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="flex items-center justify-between gap-4 rounded-2xl border border-[#1E3654]/80 bg-[#0C1B2E]/76 px-4 py-4 transition hover:border-[#00D9FF]/40 hover:bg-[#10233B]/72"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#1E3654]/70 bg-[#07111F]/80 text-[#00D9FF]">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#F5FBFF]">
                      {pillar.title}
                    </p>

                    <p className="text-xs leading-5 text-[#9DB2C7]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}