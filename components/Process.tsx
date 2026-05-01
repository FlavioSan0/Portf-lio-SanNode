const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendo o objetivo do projeto, o público, o problema real e o que precisa ser entregue primeiro.",
  },
  {
    number: "02",
    title: "Estrutura",
    description:
      "Organizo as seções, funcionalidades, hierarquia visual, fluxo do usuário e prioridades de desenvolvimento.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Crio a direção visual com paleta, componentes, cards, tipografia e layout responsivo.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description:
      "Transformo a ideia em interface funcional, conectando dados, formulários, painéis e integrações quando necessário.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="container-site py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00D9FF]">
            Processo
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-[#F5FBFF] md:text-5xl">
            Do planejamento ao projeto publicado.
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-[#A9BDD3]">
          Uma boa entrega depende de organização. Por isso, o site também
          comunica método, não apenas resultado visual.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step) => (
          <div
            key={step.number}
            className="rounded-3xl border border-[#1E3654] bg-[#0C1B2E] p-6"
          >
            <p className="text-4xl font-black text-[#00D9FF]">
              {step.number}
            </p>

            <h3 className="mt-6 text-xl font-bold text-[#F5FBFF]">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#A9BDD3]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}