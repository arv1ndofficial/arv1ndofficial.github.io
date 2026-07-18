import { motion } from "framer-motion";
import Section from "./Section";
import { stats } from "../data/resume";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-base leading-relaxed text-muted"
        >
          <p>
            I build data platforms that don't fall over — open-source lakehouses on Kubernetes,
            multi-tenant ETL orchestration, and the audit-grade pipelines fintech companies need
            to trust their own numbers. Most recently that's meant standing up a full lake on{" "}
            <span className="text-text">EKS</span> with Spark, Iceberg, Trino, and Airflow,
            then wiring an agentic layer on top so LLMs can trigger and monitor those
            pipelines through <span className="text-text">MCP</span>.
          </p>
          <p>
            On the applied-AI side, I've shipped RAG systems over{" "}
            <span className="text-text">ChromaDB</span> with open-source LLMs, and used
            synthetic data generation (SeqGAN) to fix imbalanced training sets — the kind of
            work that sits at the intersection of data engineering and GenAI rather than
            treating them as separate disciplines.
          </p>
          <p>
            I've led a 5-engineer team end-to-end on a platform rebuild, and picked up
            'Technical Excellence' and 'Inspiring Talent' awards along the way for it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-cyan/50"
            >
              <div className="text-gradient text-3xl font-bold">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
