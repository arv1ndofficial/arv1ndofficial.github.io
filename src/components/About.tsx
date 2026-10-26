import { motion } from "framer-motion";
import { Compass, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Section from "./Section";
import { stats, journeyMilestones } from "../data/resume";

export default function About() {
  return (
    <Section id="about" index="01" title="About & Career Journey">
      {/* Top Grid: Core Narrative & Impact Metrics */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="space-y-4 text-base leading-relaxed text-muted"
        >
          <p>
            I build high-throughput data systems that scale predictably — from open-source
            cloud lakehouses on Kubernetes to audit-grade fintech pipelines and real-time streaming architectures.
            Most recently, that has meant architecting an open-source lakehouse on{" "}
            <span className="font-medium text-text">EKS</span> integrating Spark, Iceberg, Trino, and Nessie,
            and wiring an agentic layer with <span className="font-medium text-text">MCP (Model Context Protocol)</span> to
            allow AI agents to trigger and observe ETL operations directly.
          </p>
          <p>
            My journey began in electronics and computer vision, evolving through petabyte-scale data engineering at TCS
            to leading platform architectures and engineering teams at M2P Fintech. My focus is long-term and ambitious:
            advancing the frontier of autonomous, self-healing lakehouses and applied AI platforms.
          </p>
          
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-cyan">
              <CheckCircle2 size={12} /> Distributed Lakehouses
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-violet">
              <CheckCircle2 size={12} /> Real-Time Streaming
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-3 py-1 text-text">
              <CheckCircle2 size={12} /> Agentic MCP Orchestration
            </span>
          </div>
        </motion.div>

        {/* Impact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:border-cyan/40 hover:bg-surface-hover"
            >
              <div className="text-gradient text-3xl font-extrabold tracking-tight">{s.value}</div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted group-hover:text-text transition-colors">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Visual Career Trajectory: Where it started, current, and future */}
      <div className="mt-16 pt-8 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Compass size={18} className="text-cyan" />
            <h3 className="text-lg font-semibold text-text sm:text-xl">
              Career Trajectory &amp; Evolution
            </h3>
          </div>
          <span className="font-mono text-xs text-muted hidden sm:inline-block">
            Origin &rarr; Scale &rarr; Leadership &rarr; Frontier
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {journeyMilestones.map((milestone, i) => (
            <motion.div
              key={milestone.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className={`relative flex flex-col justify-between rounded-2xl border p-5 transition-all ${
                milestone.isCurrent
                  ? "border-cyan/50 bg-cyan/[0.03] shadow-[0_0_20px_rgba(34,211,238,0.07)]"
                  : milestone.isFuture
                  ? "border-violet/40 bg-violet/[0.03] shadow-[0_0_20px_rgba(167,139,250,0.07)]"
                  : "border-border bg-surface hover:border-border-strong"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-semibold text-cyan">
                    {milestone.period}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-medium ${
                      milestone.isCurrent
                        ? "bg-cyan/15 text-cyan border border-cyan/30"
                        : milestone.isFuture
                        ? "bg-violet/15 text-violet border border-violet/30"
                        : "bg-bg-soft text-muted border border-border"
                    }`}
                  >
                    {milestone.isCurrent && (
                      <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    )}
                    {milestone.isFuture && (
                      <Sparkles size={9} className="mr-1 inline-block text-violet" />
                    )}
                    {milestone.badge}
                  </span>
                </div>

                <h4 className="mt-3 text-sm font-semibold text-text sm:text-base">
                  {milestone.title}
                </h4>
                <p className="mt-0.5 text-xs font-medium text-cyan/90">{milestone.org}</p>

                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {milestone.description}
                </p>
              </div>

              {i < journeyMilestones.length - 1 && (
                <div className="mt-4 flex items-center justify-end text-muted/40 lg:hidden">
                  <ArrowRight size={14} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
