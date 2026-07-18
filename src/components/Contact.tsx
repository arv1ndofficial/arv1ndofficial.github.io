import { motion } from "framer-motion";
import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-cyan"
        >
          06. Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-3xl font-bold text-text sm:text-4xl"
        >
          Let's build something worth <span className="text-gradient">shipping</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-md text-muted"
        >
          Open to senior data & AI engineering roles. The fastest way to reach me is email.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Mail size={16} /> {profile.email}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <a href={profile.github} target="_blank" rel="noopener" className="text-muted hover:text-cyan transition-colors" title="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener" className="text-muted hover:text-cyan transition-colors" title="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href={profile.liveTerminal} className="text-muted hover:text-cyan transition-colors" title="Live terminal">
            <Terminal size={20} />
          </a>
        </motion.div>
      </div>

      <div className="border-t border-border py-6 text-center font-mono text-xs text-muted">
        built with React, Tailwind &amp; Framer Motion &middot; deployed on GitHub Pages
      </div>
    </section>
  );
}
