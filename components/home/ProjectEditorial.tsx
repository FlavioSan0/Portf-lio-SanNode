import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  MonitorSmartphone,
  Palette,
} from "lucide-react";

const projectGroups = [
  {
    id: "design",
    label: "Design",
    title: "Identidade visual e presença de marca",
    description:
      "Projetos focados em organizar a forma como uma marca se apresenta visualmente.",
    icon: Palette,
    projects: [
      {
        number: "01",
        title: "ABF Representações",
        category: "Identidade visual + landing page",
        slug: "abf-representacoes",
        image: "/projetos/abf-case/logo-principal.png",
        imageMode: "brand",
        context:
          "Identidade visual para uma representação comercial que precisava se apresentar com mais solidez e profissionalismo.",
        decision:
          "Além da identidade visual, o projeto evoluiu para uma landing page institucional, aplicando a marca em uma página escura, sóbria e comercial.",
        result:
          "Marca mais consistente e presença digital mais profissional para apresentação comercial.",
        deliverables: ["Logo", "Identidade", "Landing page", "Contato"],
      },
    ],
  },
  {
    id: "sites",
    label: "Sites",
    title: "Experiências digitais publicadas",
    description:
      "Projetos voltados para apresentação, navegação, responsividade e experiência do usuário.",
    icon: MonitorSmartphone,
    projects: [
      {
        number: "02",
        title: "Site de Casamento",
        category: "Site + painel",
        slug: "site-casamento",
        image: "/projetos/site-casamento/mobile-home.png",
        imageMode: "screen",
        context:
          "Convite digital com experiência para convidados e painel administrativo para organização do evento.",
        decision:
          "Estrutura com RSVP, lista de presentes, cotas, PIX, galeria e área de gestão para o casal.",
        result:
          "Evento apresentado e administrado em um ambiente digital próprio.",
        deliverables: ["RSVP", "Painel", "Presentes", "Mobile"],
      },
    ],
  },
  {
    id: "sistemas",
    label: "Sistemas",
    title: "Organização, dados e operação",
    description:
      "Projetos que ajudam a transformar rotinas manuais em sistemas mais claros e controláveis.",
    icon: Code2,
    projects: [
      {
        number: "03",
        title: "Controle de Estoque Mecânica",
        category: "Sistema web",
        slug: "controle-estoque-mecanica",
        image: "/projetos/estoque-case/dashboard.png",
        imageMode: "screen",
        context:
          "Sistema privado para organizar produtos, entradas, saídas e movimentações em uma rotina real de oficina.",
        decision:
          "Base operacional com dashboard, cadastros, histórico e estrutura para evoluir para gestão mecânica.",
        result:
          "Mais controle sobre estoque, registros, movimentações e dados importantes da operação.",
        deliverables: ["Dashboard", "Estoque", "Gestão"],
      },
    ],
  },
];

export default function ProjectEditorial() {
  return (
    <section
      id="projetos"
      className="relative overflow-hidden border-y border-[#1E3654]/40 bg-[#07111F]/48"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(0,217,255,0.08),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(37,99,235,0.08),transparent_34%)]" />

      <div className="container-site responsive-section relative">
        <Reveal>
          <div className="mx-auto mb-12 grid max-w-5xl gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Projetos reais
              </p>

              <h2 className="responsive-title-lg mt-3 max-w-3xl font-black text-[#F5FBFF] text-balance">
                Trabalhos organizados por tipo de entrega.
              </h2>
            </div>

            <p className="responsive-copy max-w-2xl text-[#A9BDD3] text-pretty">
              Separei os projetos por frente de atuação para deixar mais claro
              onde cada entrega se encaixa: design, sites e sistemas.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-12">
          {projectGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.id} delay={groupIndex * 100}>
                <div className="grid gap-5">
                  <div className="flex flex-col gap-4 border-b border-[#1E3654]/55 pb-5 md:flex-row md:items-end md:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-3 rounded-full border border-[#1E3654]/70 bg-[#07111F]/70 px-4 py-2 backdrop-blur">
                        <Icon className="h-4 w-4 text-[#00D9FF]" />

                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                          {group.label}
                        </span>
                      </div>

                      <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#F5FBFF] md:text-4xl">
                        {group.title}
                      </h3>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-[#A9BDD3]">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid gap-5">
                    {group.projects.map((project, projectIndex) => {
                      const isBrandImage = project.imageMode === "brand";

                      return (
                        <Reveal
                          key={project.slug}
                          delay={groupIndex * 120 + projectIndex * 80}
                        >
                          <article className="group relative overflow-hidden rounded-[1.75rem] border border-[#1E3654]/70 bg-[#07111F]/62 backdrop-blur transition hover:border-[#00D9FF]/55 hover:bg-[#0C1B2E]/50">
                            <div className="absolute right-0 top-0 h-48 w-48 translate-x-20 -translate-y-20 rounded-full bg-[#00D9FF]/8 blur-3xl opacity-0 transition group-hover:opacity-100" />

                            <div className="relative grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
                              <div className="relative min-h-[240px] overflow-hidden bg-[#040B14] lg:min-h-[300px]">
                                {isBrandImage ? (
                                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#C6A15B22,transparent_38%),linear-gradient(135deg,#080B10,#07111F)] px-5 py-14">
                                    <div className="relative flex h-[150px] w-full max-w-[380px] items-center justify-center rounded-[1.6rem] border border-[#C6A15B]/25 bg-[radial-gradient(circle_at_center,rgba(198,161,91,0.12),transparent_58%),rgba(0,0,0,0.22)] px-8 py-7 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur md:h-[170px] lg:h-[185px] lg:max-w-[410px]">
                                      <div className="absolute inset-0 rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%,rgba(198,161,91,0.06))]" />

                                      <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={620}
                                        height={360}
                                        className="relative h-auto max-h-[115px] w-full object-contain md:max-h-[130px] lg:max-h-[145px]"
                                        priority={project.number === "01"}
                                      />
                                    </div>
                                  </div>
                                ) : (
                                  <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                    className={[
                                      "object-cover transition duration-700 group-hover:scale-[1.03]",
                                      project.slug === "site-casamento"
                                        ? "object-top"
                                        : "object-center",
                                    ].join(" ")}
                                  />
                                )}

                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,11,20,0.04),rgba(4,11,20,0.64))]" />

                                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#040B14]/72 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                                  {project.category}
                                </div>

                                <div className="absolute bottom-4 left-4">
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#00D9FF]">
                                    SanNode Case
                                  </p>

                                  <p className="mt-1 text-5xl font-black leading-none text-white/20">
                                    {project.number}
                                  </p>
                                </div>
                              </div>

                              <div className="relative flex flex-col justify-between p-5 md:p-6">
                                <div>
                                  <div className="mb-4 flex items-center justify-between gap-4">
                                    <span className="rounded-full border border-[#1E3654]/70 bg-[#040B14]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A9BDD3]">
                                      Projeto {project.number}
                                    </span>

                                    <span className="text-4xl font-black text-white/5">
                                      {project.number}
                                    </span>
                                  </div>

                                  <h4 className="text-2xl font-black tracking-tight text-[#F5FBFF] md:text-3xl">
                                    {project.title}
                                  </h4>

                                  <div className="mt-5 grid gap-4">
                                    <div>
                                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#00D9FF]">
                                        Contexto
                                      </p>

                                      <p className="mt-2 text-sm leading-6 text-[#A9BDD3]">
                                        {project.context}
                                      </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#1E3654]/70 bg-[#040B14]/52 p-4">
                                      <div className="flex gap-3">
                                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#00D9FF]" />

                                        <div>
                                          <p className="text-sm font-bold text-[#F5FBFF]">
                                            Decisão
                                          </p>

                                          <p className="mt-1 text-sm leading-6 text-[#A9BDD3]">
                                            {project.decision}
                                          </p>
                                        </div>
                                      </div>
                                    </div>

                                    <p className="text-sm leading-6 text-[#A9BDD3]">
                                      <span className="font-semibold text-[#F5FBFF]">
                                        Resultado:
                                      </span>{" "}
                                      {project.result}
                                    </p>
                                  </div>

                                  <div className="mt-5 flex flex-wrap gap-2">
                                    {project.deliverables.map((item) => (
                                      <span
                                        key={item}
                                        className="rounded-full border border-[#1E3654]/70 bg-[#0C1B2E]/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A9BDD3]"
                                      >
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div className="mt-6">
                                  <Link
                                    href={`/projetos/${project.slug}`}
                                    className="tech-button inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
                                  >
                                    Ver case
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </article>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}