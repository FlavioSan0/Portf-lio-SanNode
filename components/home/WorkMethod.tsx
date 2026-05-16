import Reveal from "@/components/Reveal";
import { Code2, Compass, Layers3, Rocket, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Entender",
    description:
      "Antes de pensar em tela ou código, eu entendo o objetivo, o público, a rotina e o problema que precisa ser resolvido.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Organizar",
    description:
      "Transformo ideias soltas em estrutura: páginas, fluxos, prioridades, dados importantes e caminhos de navegação.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Desenhar",
    description:
      "Crio uma direção visual limpa, coerente e alinhada com a mensagem que o projeto precisa passar.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Construir",
    description:
      "Desenvolvo a interface, funcionalidades, integrações e ajustes necessários para a solução sair do papel.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Evoluir",
    description:
      "Depois da entrega, penso em publicação, testes, melhorias, manutenção e próximos passos para o projeto continuar crescendo.",
  },
];

export default function WorkMethod() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden border-b border-[#1E3654]/40 bg-[#040B14]/24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,217,255,0.08),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(37,99,235,0.08),transparent_34%)]" />

      <div className="container-site responsive-section relative">
        <Reveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Como eu trabalho
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Método simples, mas com intenção em cada etapa.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              O objetivo não é só entregar uma tela bonita. É organizar o
              caminho entre problema, visual, experiência, tecnologia e uso real.
            </p>
          </div>
        </Reveal>

        <div className="overflow-hidden rounded-[2rem] border border-[#1E3654]/70 bg-[#07111F]/58 backdrop-blur">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <Reveal key={step.number} delay={index * 90}>
                <article
                  className={[
                    "group relative grid gap-6 p-6 transition hover:bg-[#0C1B2E]/55 md:p-8 lg:grid-cols-[0.22fr_0.34fr_1fr] lg:items-center",
                    !isLast ? "border-b border-[#1E3654]/55" : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-4 lg:block">
                    <p className="text-5xl font-black leading-none text-white/10 transition group-hover:text-[#00D9FF]/20 md:text-6xl">
                      {step.number}
                    </p>

                    <span className="rounded-full border border-[#1E3654]/70 bg-[#040B14]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7F96AD] lg:mt-5 lg:inline-flex">
                      Etapa
                    </span>
                  </div>

                  <div>
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#1E3654]/70 bg-[#040B14]/70 text-[#00D9FF] shadow-[0_0_28px_rgba(0,217,255,0.08)]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-[#F5FBFF]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="max-w-3xl text-sm leading-7 text-[#A9BDD3]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={180}>
          <div className="mt-8 rounded-[2rem] border border-[#00D9FF]/18 bg-[#00D9FF]/[0.035] p-6 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
              Minha forma de pensar
            </p>

            <p className="mt-4 max-w-4xl text-2xl font-black leading-tight tracking-[-0.04em] text-[#F5FBFF] md:text-4xl">
              Antes de entregar uma solução, eu preciso entender o que ela vai
              resolver, quem vai usar e como ela pode continuar evoluindo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}