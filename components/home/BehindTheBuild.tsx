import Reveal from "@/components/Reveal";
import {
  Database,
  FileText,
  GitBranch,
  LayoutDashboard,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const backstageItems = [
  {
    icon: FileText,
    title: "Objetivo",
    description:
      "Entender o que precisa ser resolvido, qual mensagem deve ser passada e qual resultado o projeto precisa gerar.",
  },
  {
    icon: GitBranch,
    title: "Fluxo",
    description:
      "Organizar a jornada, as etapas, os caminhos e as ações principais para reduzir confusão e retrabalho.",
  },
  {
    icon: LayoutDashboard,
    title: "Interface",
    description:
      "Construir telas com hierarquia, contraste, clareza e foco no que a pessoa realmente precisa fazer.",
  },
  {
    icon: Database,
    title: "Dados",
    description:
      "Pensar em cadastros, registros, filtros, histórico e informações importantes para o projeto funcionar de verdade.",
  },
  {
    icon: Smartphone,
    title: "Responsividade",
    description:
      "Ajustar a experiência para celular, tablet e desktop sem depender de improviso no final do projeto.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Considerar acesso, permissões, validações, privacidade e manutenção desde as primeiras decisões.",
  },
];

export default function BehindTheBuild() {
  return (
    <section className="relative overflow-hidden border-b border-[#1E3654]/40 bg-[#07111F]/44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_26%,rgba(0,217,255,0.08),transparent_30%),radial-gradient(circle_at_84%_64%,rgba(37,99,235,0.08),transparent_34%)]" />

      <div className="container-site responsive-section relative">
        <Reveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Bastidores
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                O que acontece antes de uma solução parecer pronta.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              Boa parte do trabalho não aparece no primeiro print. Está nas
              decisões, na organização, nos fluxos e na forma como a solução é
              preparada para funcionar no dia a dia.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {backstageItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-[#1E3654]/70 bg-[#07111F]/58 p-6 backdrop-blur transition hover:border-[#00D9FF]/55 hover:bg-[#0C1B2E]/58">
                  <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-[#00D9FF]/8 blur-3xl opacity-0 transition group-hover:opacity-100" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1E3654]/70 bg-[#040B14]/70 text-[#00D9FF] shadow-[0_0_28px_rgba(0,217,255,0.08)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="relative mt-5 text-xl font-black text-[#F5FBFF]">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-[#A9BDD3]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={180}>
          <div className="mt-8 grid gap-6 rounded-[2rem] border border-[#00D9FF]/18 bg-[#00D9FF]/[0.035] p-6 backdrop-blur md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Minha regra
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#F5FBFF] md:text-5xl">
                Se a pessoa não entende, ainda não está pronto.
              </h3>
            </div>

            <p className="text-base leading-8 text-[#A9BDD3]">
              Um projeto digital precisa comunicar, orientar e funcionar. Se ele
              depende de explicação demais, tela demais ou improviso demais,
              ainda existe algo para organizar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}