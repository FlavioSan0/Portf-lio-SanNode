import Link from "next/link";
import { ArrowUpRight, ExternalLink, MessageCircle } from "lucide-react";
import { contact } from "@/data/contact";

type CaseCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  variant?: "blue" | "gold" | "wedding";
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
};

const variants = {
  blue: {
    card: "bg-[linear-gradient(135deg,#0B2A5B,#123B6D)]",
    eyebrow: "text-[#B9F5FF]",
    primary: "bg-white text-[#0B2A5B] hover:bg-[#E6FAFF] hover:text-[#061B42]",
    secondary:
      "border-white/35 bg-white/10 text-white hover:border-white/60 hover:bg-white/15",
  },
  gold: {
    card: "bg-[linear-gradient(135deg,#1A1D23,#0F1115)]",
    eyebrow: "text-[#C6A15B]",
    primary:
      "border-[#C6A15B]/30 bg-[#C6A15B] text-[#0F1115] hover:bg-[#D8B66D]",
    secondary:
      "border-white/10 bg-white/[0.04] text-white hover:border-[#C6A15B]/60 hover:text-[#C6A15B]",
  },
  wedding: {
    card: "bg-[linear-gradient(135deg,#08265E,#800000)]",
    eyebrow: "text-[#F4EFE7]",
    primary: "bg-[#F5FBFF] text-[#08265E] hover:bg-white hover:text-[#061B42]",
    secondary:
      "border-white/20 bg-white/[0.08] text-white hover:border-white/40 hover:bg-white/15",
  },
};

export default function CaseCTA({
  eyebrow = "Próximo passo",
  title,
  description,
  variant = "blue",
  secondaryLabel = "Ver outros projetos",
  secondaryHref = "/",
  secondaryExternal = false,
}: CaseCTAProps) {
  const styles = variants[variant];

  return (
    <section className="container-site py-20">
      <div
        className={[
          "relative overflow-hidden rounded-[2rem] border border-white/10 p-8 md:p-12",
          styles.card,
        ].join(" ")}
      >
        <div className="absolute right-0 top-0 h-72 w-72 translate-x-20 -translate-y-20 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-center">
          <div>
            <p
              className={[
                "text-sm font-semibold uppercase tracking-[0.32em]",
                styles.eyebrow,
              ].join(" ")}
            >
              {eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              {description}
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={[
                "tech-button inline-flex items-center justify-center rounded-2xl border px-6 py-4 text-base font-bold shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition",
                styles.primary,
              ].join(" ")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>

            {secondaryExternal ? (
              <a
                href={secondaryHref}
                target="_blank"
                rel="noreferrer"
                className={[
                  "tech-button inline-flex items-center justify-center rounded-2xl border px-6 py-4 text-base font-semibold transition",
                  styles.secondary,
                ].join(" ")}
              >
                {secondaryLabel}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            ) : (
              <Link
                href={secondaryHref}
                className={[
                  "tech-button inline-flex items-center justify-center rounded-2xl border px-6 py-4 text-base font-semibold transition",
                  styles.secondary,
                ].join(" ")}
              >
                {secondaryLabel}
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}