import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldCheck } from "lucide-react";
import Section from "./Section";
import { education, certifications, awards } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" index="05" title="Education & Credentials">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-surface p-6"
        >
          <div className="flex items-center gap-2.5 text-violet">
            <GraduationCap size={18} />
            <h3 className="font-mono text-xs uppercase tracking-wider">Education</h3>
          </div>
          <h4 className="mt-3 text-base font-semibold text-text">{education.degree}</h4>
          <p className="mt-1 text-sm text-muted">
            {education.school} &middot; {education.period}
          </p>
          <ul className="mt-4 space-y-2">
            {education.bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex items-center gap-2.5 text-cyan">
              <ShieldCheck size={18} />
              <h3 className="font-mono text-xs uppercase tracking-wider">Certifications</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="text-sm">
                  <span className="text-text">{c.name}</span>
                  {c.issuer && <span className="text-muted"> — {c.issuer}</span>}
                  {c.period && <span className="ml-1.5 font-mono text-xs text-muted">({c.period})</span>}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex items-center gap-2.5 text-amber">
              <Award size={18} />
              <h3 className="font-mono text-xs uppercase tracking-wider">Awards</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {awards.map((a) => (
                <li key={a.name} className="text-sm">
                  <span className="text-text">{a.name}</span>
                  <span className="text-muted"> — {a.issuer}</span>
                  <span className="ml-1.5 font-mono text-xs text-muted">({a.period})</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
