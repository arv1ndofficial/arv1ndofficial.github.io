import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/resume";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-text">
          <span className="text-cyan">~/</span>aravindan
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors ${
                  active === link.href ? "text-cyan" : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.liveTerminal}
            title="Live terminal"
            className="text-muted hover:text-cyan transition-colors"
          >
            <Terminal size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener"
            title="GitHub"
            className="text-muted hover:text-cyan transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            title="LinkedIn"
            className="text-muted hover:text-cyan transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-1.5 text-sm text-text hover:border-cyan hover:text-cyan transition-colors"
          >
            <FileDown size={14} /> Resume
          </a>
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden glass border-b border-border"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-muted hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-4 pt-2">
                <a href={profile.github} target="_blank" rel="noopener" className="text-muted hover:text-cyan">
                  <GithubIcon size={18} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="text-muted hover:text-cyan">
                  <LinkedinIcon size={18} />
                </a>
                <a href={profile.liveTerminal} className="text-muted hover:text-cyan">
                  <Terminal size={18} />
                </a>
                <a href={profile.resumeUrl} download className="text-muted hover:text-cyan">
                  <FileDown size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
