import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/resume";
import ParticleField from "./ParticleField";
import portraitWebp from "../assets/portrait.webp";
import portraitJpg from "../assets/portrait.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.09),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.10),transparent_45%)]" />
      <ParticleField />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 py-32 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-4 font-mono text-sm text-cyan"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green animate-blink" />
            Available for new opportunities
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-gradient mt-3 text-2xl font-bold sm:text-3xl"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan to-violet px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03] active:scale-95"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-cyan hover:text-cyan"
            >
              <FileDown size={16} /> Download Resume
            </a>

            <div className="ml-1 flex items-center gap-4 pl-2">
              <a href={profile.github} target="_blank" rel="noopener" className="text-muted hover:text-cyan transition-colors" title="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener" className="text-muted hover:text-cyan transition-colors" title="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={`mailto:${profile.email}`} className="text-muted hover:text-cyan transition-colors" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-56 sm:w-64 md:w-full md:max-w-xs"
        >
          <div className="animate-float">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan/30 to-violet/30 blur-2xl" />
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portraitJpg}
                alt="Portrait of Aravindan Rameshbabu"
                className="relative rounded-3xl border border-border-strong object-cover shadow-2xl"
                width={480}
                height={480}
              />
            </picture>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted hover:text-cyan transition-colors"
        aria-label="Scroll to About"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
