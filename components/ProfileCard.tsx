import Image from "next/image";
import { Code2, Layers3, Palette, Workflow } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    label: "Design",
    description: "Identidade e interfaces",
  },
  {
    icon: Code2,
    label: "Dev",
    description: "Sites e sistemas",
  },
  {
    icon: Workflow,
    label: "Processo",
    description: "Organização e evolução",
  },
];

export default function ProfileCard() {
  return (
    <div className="tech-card relative overflow-hidden rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E]/90 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="absolute right-0 top-0 h-48 w-48 translate-x-14 -translate-y-14 rounded-full bg-[#00D9FF]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-12 translate-y-12 rounded-full bg-[#2563EB]/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.6rem] border border-[#1E3654] bg-[#07111F]">
        <Image
          src="/flavio-profilee.png"
          alt="Flávio Oliveira, criador da SanNode"
          width={900}
          height={1100}
          className="aspect-[4/5] w-full object-cover object-center"
          priority
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/75 to-transparent p-5 pt-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/25 bg-[#07111F]/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00D9FF] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#00D9FF] shadow-[0_0_16px_rgba(0,217,255,0.9)]" />
            Criador da SanNode
          </div>
        </div>
      </div>

      <div className="relative mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
          Por trás da SanNode
        </p>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-black text-[#F5FBFF]">
              Flávio Oliveira
            </h3>

            <p className="mt-1 text-sm text-[#A9BDD3]">
              Design, programação e automação
            </p>
          </div>

          <div className="w-fit rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#A9BDD3]">
            SanNode
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-[#1E3654] bg-[#07111F]/70 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
              <Layers3 className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#F5FBFF]">
                Trabalho com visão completa
              </p>

              <p className="mt-1 text-xs leading-5 text-[#A9BDD3]">
                Da ideia inicial à entrega visual e funcional, conectando marca,
                interface, código e processo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 rounded-2xl border border-[#1E3654] bg-[#10233B]/80 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-[#00D9FF]" />

                  <span className="text-sm font-semibold text-[#F5FBFF]">
                    {item.label}
                  </span>
                </div>

                <span className="text-right text-xs text-[#9DB2C7]">
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}