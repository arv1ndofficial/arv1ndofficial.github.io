import { motion } from "framer-motion";
import { Tv, Cpu, Sparkles, ExternalLink, Wrench } from "lucide-react";
import Section from "./Section";
import { hobbyProjects } from "../data/resume";

function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-text">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function Hobbies() {
  return (
    <Section id="hobbies" index="05" title="Hobbies & Systems Tinkering">
      <p className="-mt-8 mb-10 max-w-2xl text-sm leading-relaxed text-muted">
        When not building enterprise data platforms, I enjoy tinkering with embedded Linux,
        microcontrollers, hardware automation, and custom operating system debloating.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {hobbyProjects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-violet/50 sm:p-7"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-violet/10 to-cyan/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div>
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bg-soft text-cyan transition-colors group-hover:bg-cyan/10">
                    {project.iconType === "tv" ? (
                      <Tv size={18} />
                    ) : project.iconType === "cpu" ? (
                      <Cpu size={18} />
                    ) : (
                      <Sparkles size={18} />
                    )}
                  </span>
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-violet">
                      <Wrench size={10} /> {project.category}
                    </span>
                    <h3 className="mt-0.5 text-base font-semibold text-text sm:text-lg">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted sm:text-sm">{project.description}</p>
                  </div>
                </div>

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source repository"
                    className="shrink-0 rounded-lg p-2 text-muted transition-colors hover:bg-bg-soft hover:text-cyan"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <ul className="relative mt-5 space-y-2">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                    <span>{renderFormattedText(b)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border-strong px-2.5 py-0.5 font-mono text-[10px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
