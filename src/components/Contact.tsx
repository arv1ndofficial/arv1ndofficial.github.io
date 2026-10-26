import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Phone, MapPin, Terminal, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/resume";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section id="contact" className="relative border-t border-border py-28 md:py-36">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-80 w-96 rounded-full bg-violet/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan"
          >
            07. Contact &amp; Opportunities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5xl"
          >
            Let's build something <span className="text-gradient">remarkable</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
          >
            Actively open to senior data engineering and AI platform engineering opportunities.
            Whether you want to scale a distributed lakehouse or engineer agentic pipelines, my inbox is open.
          </motion.p>
        </div>

        {/* Executive Recruiter Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-surface p-7 sm:p-10 shadow-2xl backdrop-blur-xl"
        >
          {/* Status Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green" />
              </span>
              <span className="font-mono text-xs font-medium text-text">
                Available for Senior Data &amp; AI Engineering Roles
              </span>
            </div>
            <span className="rounded-full border border-border bg-bg-soft px-3 py-1 font-mono text-[11px] text-muted">
              Fast Response &middot; Within 24 Hours
            </span>
          </div>

          {/* Primary Email Action Box */}
          <div className="mt-8 rounded-2xl border border-border-strong/70 bg-bg-soft/80 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted uppercase tracking-wider">Direct Email Address</p>
                <p className="mt-1 font-mono text-base font-semibold text-cyan sm:text-lg truncate">
                  {profile.email}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border-strong bg-surface px-4 py-2.5 text-xs font-semibold text-text transition-all hover:border-cyan hover:text-cyan active:scale-95"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green" />
                      <span className="text-green">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.email}?subject=Senior%20Data%20%26%20AI%20Engineering%20Inquiry`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-violet px-5 py-2.5 text-xs font-semibold text-bg transition-all hover:scale-[1.03] active:scale-95 shadow-md shadow-cyan/20"
                >
                  <Send size={13} />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coordinates Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="group flex items-center gap-3 rounded-xl border border-border bg-bg-soft/40 p-3.5 transition-colors hover:border-cyan/40"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-cyan group-hover:bg-cyan/10 transition-colors">
                <Phone size={16} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] text-muted font-mono">Phone</p>
                <p className="text-xs font-medium text-text group-hover:text-cyan transition-colors truncate">
                  {profile.phone}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-soft/40 p-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-violet">
                <MapPin size={16} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] text-muted font-mono">Location</p>
                <p className="text-xs font-medium text-text truncate">
                  {profile.location} &middot; <span className="text-muted">Remote-ready</span>
                </p>
              </div>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-3 rounded-xl border border-border bg-bg-soft/40 p-3.5 transition-colors hover:border-cyan/40"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-cyan group-hover:bg-cyan/10 transition-colors">
                <LinkedinIcon size={16} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] text-muted font-mono">LinkedIn</p>
                <p className="text-xs font-medium text-text group-hover:text-cyan transition-colors truncate">
                  /in/aravindanramesh
                </p>
              </div>
            </a>
          </div>

          {/* Social Links Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-6">
            <div className="flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-xs font-mono text-muted hover:text-cyan transition-colors"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <span className="text-border">&bull;</span>
              <a
                href={profile.liveTerminal}
                className="flex items-center gap-2 text-xs font-mono text-muted hover:text-cyan transition-colors"
              >
                <Terminal size={16} /> Interactive Terminal
              </a>
            </div>

            <p className="font-mono text-[11px] text-muted/70 flex items-center gap-1">
              <Sparkles size={11} className="text-cyan" /> Ready for the next high-scale challenge
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 border-t border-border py-6 text-center font-mono text-xs text-muted">
        Aravindan Rameshbabu &middot; Senior Data &amp; AI Engineer &middot; Chennai, India
      </div>
    </section>
  );
}
