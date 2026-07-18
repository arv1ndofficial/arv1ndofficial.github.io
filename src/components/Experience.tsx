import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Section from "./Section";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <motion.div
            key={job.role + job.org}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg-soft ring-4 ring-bg sm:-left-[calc(2.5rem+5px)]">
              <Briefcase size={11} className="text-cyan" />
            </span>

            <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-cyan/40">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-text">{job.role}</h3>
                <span className="font-mono text-xs text-cyan">{job.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted">
                {job.org} &middot; {job.location}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
