import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import Section from "./Section";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <Section id="projects" index="04" title="Selected Projects">
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-cyan/50 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-cyan/10 to-violet/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bg-soft text-violet">
                <FolderGit2 size={18} />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-text sm:text-xl">{project.name}</h3>
                <p className="mt-0.5 text-sm text-cyan">{project.description}</p>
                <p className="text-xs text-muted">{project.org}</p>
              </div>
            </div>

            <ul className="relative mt-5 space-y-2.5">
              {project.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border-strong px-2.5 py-1 font-mono text-[11px] text-muted"
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
