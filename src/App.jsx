import { useEffect, useState } from 'react'
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowUpRight } from 'react-icons/fi'
import { LINKS, REPOS, TAGS, T } from './data'
import profilePic from './assets/profile.jpeg'

const SECTIONS = ['about', 'experience', 'projects', 'education', 'contact']

const detectLang = () => {
  try {
    const saved = localStorage.getItem('lang')
    if (saved && T[saved]) return saved
  } catch { /* storage no disponible */ }
  const nav = (navigator.language || 'ca').slice(0, 2)
  return T[nav] ? nav : 'ca'
}

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* ignora */ }
  }
  return [dark, toggle]
}

const Heading = ({ id, children }) => (
  <h2 id={id} className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-8">{children}</h2>
)

const Pill = ({ children }) => (
  <span className="rounded-md bg-tint px-2.5 py-1 text-[0.8rem] font-medium text-accent">{children}</span>
)

const Btn = ({ href, icon: Icon, children, primary }) => (
  <a
    href={href}
    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.95rem] font-medium transition-colors ${
      primary ? 'bg-accent text-paper hover:opacity-90' : 'border border-line hover:border-accent hover:text-accent'
    }`}
  >
    <Icon aria-hidden /> {children}
  </a>
)

export default function App() {
  const [lang, setLang] = useState(detectLang)
  const [dark, toggleTheme] = useTheme()
  const t = T[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.title
    try { localStorage.setItem('lang', lang) } catch { /* ignora */ }
  }, [lang, t.title])

  return (
    <div className="min-h-screen">
      {/* CAPÇALERA */}
      <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="font-serif text-xl font-bold">Anna Mongelos</a>
          <nav className="hidden gap-6 text-[0.95rem] md:flex" aria-label="Principal">
            {SECTIONS.map((s) => (
              <a key={s} href={`#${s}`} className="text-muted transition-colors hover:text-accent">{t.nav[s]}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label={t.langLabel}
              className="rounded-md border border-line bg-card px-2 py-1.5 text-sm"
            >
              {Object.entries(T).map(([k, v]) => <option key={k} value={k}>{v.code}</option>)}
            </select>
            <button
              onClick={toggleTheme}
              aria-label={t.themeLabel}
              className="grid h-9 w-9 place-items-center rounded-md border border-line bg-card text-lg hover:border-accent"
            >
              {dark ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>
        <nav className="flex gap-5 overflow-x-auto px-5 pb-2 text-sm md:hidden" aria-label="Principal">
          {SECTIONS.map((s) => (
            <a key={s} href={`#${s}`} className="whitespace-nowrap text-muted">{t.nav[s]}</a>
          ))}
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-5">
        {/* HERO */}
        <section className="grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1fr_15rem]">
          <div className="hero-in order-2 md:order-1">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden /> {t.status}
            </p>
            <h1 className="font-serif text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">Anna Mongelos Amill</h1>
            <p className="mt-3 font-medium text-accent">{t.role}</p>
            <p className="mt-5 max-w-xl font-serif text-2xl leading-snug">{t.headline}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={LINKS.cv} icon={FiDownload} primary>{t.cv}</Btn>
              <Btn href={`mailto:${LINKS.email}`} icon={FiMail}>{t.mail}</Btn>
              <Btn href={LINKS.github} icon={FiGithub}>GitHub</Btn>
              <Btn href={LINKS.linkedin} icon={FiLinkedin}>LinkedIn</Btn>
            </div>
          </div>
          <img
            src={profilePic}
            alt="Anna Mongelos Amill"
            width="240" height="240"
            className="order-1 mx-auto aspect-square w-52 rounded-full border-4 border-accent object-cover object-[50%_22%] md:order-2 md:w-60"
          />
        </section>

        {/* SOBRE MI */}
        <section id="about" className="max-w-2xl pb-16">
          <Heading>{t.nav.about}</Heading>
          <p className="text-lg leading-relaxed text-muted">{t.about}</p>
        </section>

        {/* EXPERIÈNCIA */}
        <section id="experience" className="pb-16">
          <Heading>{t.experience}</Heading>
          <ol className="ml-2 space-y-9 border-l border-line pl-7">
            {t.jobs.map((j) => (
              <li key={j.title} className="relative">
                <span className="absolute -left-[2.15rem] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-xl font-semibold">{j.title}</h3>
                  <span className="text-sm text-muted">{j.date}</span>
                </div>
                <p className="mb-2 italic text-accent">{j.org}</p>
                <ul className="list-disc space-y-1 pl-5 text-muted marker:text-accent">
                  {j.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* PROJECTES */}
        <section id="projects" className="pb-16">
          <Heading>{t.projects}</Heading>
          <p className="-mt-5 mb-8 text-muted">{t.projectsIntro}</p>
          <div className="space-y-5">
            {['tutor', 'soc', 'tfg'].map((k) => {
              const p = t.items[k]
              return (
                <article key={k} className="rounded-2xl border border-line border-l-4 border-l-accent bg-card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-serif text-2xl font-bold">{p.title}</h3>
                    <span className="text-sm text-muted">{p.ctx}</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {TAGS[k].map((x) => <Pill key={x}>{x}</Pill>)}
                    {REPOS[k] && (
                      <a href={REPOS[k]} target="_blank" rel="noopener noreferrer"
                         className="ml-auto inline-flex items-center gap-1 font-medium text-accent hover:underline">
                        {t.repo} <FiArrowUpRight aria-hidden />
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* FORMACIÓ, HABILITATS, IDIOMES, VOLUNTARIAT */}
        <section id="education" className="pb-16">
          <Heading>{t.education}</Heading>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-xl font-semibold">{t.edu.title}</h3>
            <span className="text-sm text-muted">{t.edu.date}</span>
          </div>
          <p className="mb-2 italic text-accent">{t.edu.org}</p>
          <ul className="list-disc space-y-1 pl-5 text-muted marker:text-accent">
            {t.edu.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>

          <h3 className="mb-4 mt-12 font-serif text-2xl font-bold">{t.skills}</h3>
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[10rem_1fr]">
            {t.skillList.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-semibold">{k}</dt>
                <dd className="text-muted">{v}</dd>
              </div>
            ))}
          </dl>

        </section>

        {/* CONTACTE */}
        <section id="contact" className="mb-16 rounded-3xl bg-tint p-8 sm:p-12">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">{t.contact}</h2>
          <p className="mb-6 mt-3 max-w-lg text-lg text-muted">{t.contactText}</p>
          <div className="flex flex-wrap gap-3">
            <Btn href={`mailto:${LINKS.email}`} icon={FiMail} primary>{LINKS.email}</Btn>
            <Btn href={LINKS.linkedin} icon={FiLinkedin}>LinkedIn</Btn>
            <Btn href={LINKS.github} icon={FiGithub}>GitHub</Btn>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Anna Mongelos Amill. {t.rights}
      </footer>
    </div>
  )
}
