import Reveal from "@/components/Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicos" className="border-y border-[#1E3654] bg-[#091728]">
      <div className="container-site py-20">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                Como posso ajudar
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-[#F5FBFF] md:text-5xl">
                Design, sites, sistemas e automações com estrutura.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-[#A9BDD3]">
              A SanNode une visual limpo, lógica de desenvolvimento e
              organização de processos para transformar ideias em soluções
              digitais funcionais.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 80}>
                <div className="tech-card tech-glow h-full rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6 text-[#F5FBFF] hover:border-[#00D9FF]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10233B] text-[#00D9FF]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{service.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#A9BDD3]">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={180}>
          <div className="mt-10 rounded-[2rem] border border-[#1E3654] bg-[#0C1B2E] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
                  Projetos sob medida
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#F5FBFF] md:text-3xl">
                  Cada solução começa pelo problema real.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#A9BDD3]">
                  Antes de desenvolver uma tela, marca ou sistema, eu organizo o
                  objetivo, o fluxo, as prioridades e o que precisa ser entregue
                  primeiro. Isso ajuda o projeto a sair bonito, funcional e
                  preparado para evoluir.
                </p>
              </div>

              <a
                href="#contato"
                className="tech-button inline-flex items-center justify-center rounded-2xl bg-[#0B2A5B] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
              >
                Conversar sobre um projeto
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}