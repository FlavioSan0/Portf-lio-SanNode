"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";

const stats = [
  { value: "Design", label: "Identidade, interfaces e peças digitais" },
  { value: "Dev", label: "Sites, sistemas e automações" },
  { value: "Tech", label: "Soluções digitais bem estruturadas" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#1E3654] bg-[#07111F]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00D9FF22,transparent_30%),radial-gradient(circle_at_left,#2563EB18,transparent_38%)]" />
      <div className="tech-grid-bg absolute inset-0 opacity-70" />
      <div className="tech-lines absolute inset-0 opacity-40" />

      <div className="container-site relative grid gap-12 py-20 lg:grid-cols-[1.05fr_0.82fr] lg:items-center lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#1E3654] bg-[#0C1B2E]/85 px-4 py-2 text-sm font-medium text-[#A9BDD3] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#00D9FF]" />
            Design, programação e automação
          </div>

          <h1 className="responsive-title-xl max-w-5xl font-black text-[#F5FBFF] text-balance">
            Design e tecnologia para transformar ideias
            <span className="block bg-gradient-to-r from-[#F5FBFF] via-[#6DB9FF] to-[#00D9FF] bg-clip-text text-transparent">
              em soluções reais.
            </span>
          </h1>

          <p className="responsive-copy mt-6 max-w-2xl text-[#A9BDD3] text-pretty">
            Sou Flávio Oliveira, criador da SanNode. Uno design,
            desenvolvimento e organização para criar marcas, sites, sistemas e
            automações com visual limpo, estrutura clara e aplicação prática.
          </p>

          <div className="mobile-action-grid mt-8">
            <a
              href="#projetos"
              className="tech-button group inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Ver projetos
              <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://wa.me/5584988479869"
              target="_blank"
              rel="noreferrer"
              className="tech-button inline-flex items-center justify-center rounded-2xl border border-[#1E3654] bg-[#0C1B2E]/85 px-6 py-4 font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-6 text-sm text-[#9DB2C7]">
            WhatsApp:{" "}
            <a
              href="https://wa.me/5584988479869"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#00D9FF] hover:underline"
            >
              (84) 98847-9869
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
                className="tech-card rounded-3xl border border-[#1E3654] bg-[#0C1B2E]/85 p-4 backdrop-blur"
              >
                <p className="text-xl font-black text-[#00D9FF]">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#9DB2C7]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-[390px]">
            <ProfileCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}