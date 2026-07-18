import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, index, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-6 py-24 md:py-32 ${className ?? ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 flex items-baseline gap-3"
      >
        <span className="font-mono text-sm text-cyan">{index}</span>
        <h2 className="text-2xl md:text-3xl font-semibold text-text tracking-tight">{title}</h2>
        <span className="h-px flex-1 bg-border-strong/60" />
      </motion.div>
      {children}
    </section>
  );
}
