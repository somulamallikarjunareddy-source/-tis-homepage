import { MotionConfig } from "framer-motion";
import CustomCursor from "./components/CustomCursor.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { RevealGroup, RevealItem } from "./components/Reveal.jsx";
import useTheme from "./hooks/useTheme.js";
import { nav, hero, programs } from "./data.js";
import s from "./App.module.css";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CustomCursor />
      <div className={s.wrap}>
        <header className={s.header}>
          <a href="#top" className={s.logo}>Tulas International School</a>
          <nav className={s.nav} aria-label="Main">
            <ul className={s.links} style={{ listStyle: "none", padding: 0 }}>
              {nav.map((n) => (
                <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
              ))}
            </ul>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </nav>
        </header>

        <main id="top">
          <section className={s.hero}>
            <h1>{hero.title}</h1>
            <p>{hero.text}</p>
            <a href="#admissions" className={s.cta}>{hero.cta}</a>
          </section>

          <section id="programs" className={s.section}>
            <h2>Programs</h2>
            <RevealGroup className={s.grid}>
              {programs.map((p) => (
                <RevealItem key={p.title}>
                  <article className={s.card} data-cursor>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        </main>

        <footer id="admissions" className={s.footer}>Tulas International School</footer>
      </div>
    </MotionConfig>
  );
}
