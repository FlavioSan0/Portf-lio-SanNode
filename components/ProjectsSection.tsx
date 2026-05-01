import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Palette,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const designProjects = projects.filter((project) => project.category === "design");
  const programmingProjects = projects.filter(
    (project) => project.category === "programacao"
  );

  return (
    <section id="projetos">
      <div className="container-site py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
              Projetos de design
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-[#F5FBFF] md:text-5xl">
              Marcas, peças e materiais com boa apresentação e clareza visual.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#A9BDD3]">
            Aqui entram trabalhos de identidade visual, social media, materiais
            editoriais, apresentações e peças para divulgação.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {designProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6 text-white transition hover:-translate-y-1 hover:border-[#00D9FF]"
            >
              <div className="mb-6 h-40 rounded-[1.5rem] border border-[#1E3654] bg-[radial-gradient(circle_at_top_right,#00D9FF33,transparent_30%),radial-gradient(circle_at_bottom_left,#2563EB22,transparent_35%),linear-gradient(135deg,#0B2A5B,#091728)] p-5">
                <div className="flex h-full flex-col justify-between">
                  <Palette className="h-7 w-7 text-white/90" />
                  <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                    Design case
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#00D9FF]">{project.type}</p>

              <h3 className="mt-3 text-xl font-bold text-[#F5FBFF]">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#A9BDD3]">
                {project.description}
              </p>

              <div className="mt-5 grid gap-2">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#C7D8E8]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#00D9FF]" />
                    {item}
                  </div>
                ))}
              </div>

                <a
                href={`/projetos/${project.slug}`}
                className="mt-5 inline-flex items-center text-sm font-semibold text-[#D9F4FF] transition hover:text-[#00D9FF]"
                >
                Ver case
                <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
            </article>
          ))}
        </div>
      </div>

      <div className="border-y border-[#1E3654] bg-[#091728]">
        <div className="container-site py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Projetos de programação
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-[#F5FBFF] md:text-5xl">
                Sistemas, sites e automações desenvolvidos para problemas reais.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-[#A9BDD3]">
              A seção técnica mostra capacidade de construir soluções completas:
              interface, dados, regras de negócio e painel administrativo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {programmingProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6 text-white transition hover:-translate-y-1 hover:border-[#00D9FF] md:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
                      <Code2 className="h-6 w-6" />
                    </div>

                    <p className="text-sm text-[#00D9FF]">
                      {project.stack?.join(" • ") || project.type}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-[#F5FBFF]">
                      {project.title}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full border border-[#1E3654] bg-[#10233B] px-3 py-1 text-xs text-[#A9BDD3]">
                    {project.status}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#A9BDD3]">
                  {project.description}
                </p>

                <div className="mt-5 grid gap-2">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#C7D8E8]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#00D9FF]" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
  <a
    href={`/projetos/${project.slug}`}
    className="inline-flex items-center rounded-2xl border border-[#1E3654] bg-[#10233B] px-5 py-3 text-sm font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
  >
    Ver case
    <ArrowUpRight className="ml-2 h-4 w-4" />
  </a>

  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-2xl bg-[#0B2A5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
    >
      Ver projeto
      <ExternalLink className="ml-2 h-4 w-4" />
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-2xl border border-[#1E3654] bg-[#10233B] px-5 py-3 text-sm font-semibold text-[#F5FBFF] transition hover:border-[#00D9FF] hover:text-[#00D9FF]"
    >
      GitHub
      <ArrowUpRight className="ml-2 h-4 w-4" />
    </a>
  )}
</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}