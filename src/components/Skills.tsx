import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-violet/40"
          >
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-amber">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border-strong bg-bg-soft px-3 py-1 text-xs text-text transition-colors hover:border-cyan hover:text-cyan"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
