import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, Clock, MapPin, MessageCircle } from 'lucide-react';

import RotatingText from '@/components/RotatingText';
import ShinyText from '@/components/ShinyText';
import CurvedLoop from '@/components/CurvedLoop';
import SpotlightCard from '@/components/SpotlightCard';
import Pillars from '@/components/Pillars';
import { CtaButton, Faq, FinalCta, FloatingWhatsApp, Reveal, ease } from '@/sections';
import { ADDRESS, FIRM, HOURS, MAPS, OAB_CHECK, areas, lawyer, lawyers, situations, steps, topics, waTo } from '@/content';

/* Site do escritório Gomes de Carvalho, pensado primeiro para o celular: abertura, hero com as duas sócias,
   seletor de caso que leva ao WhatsApp da sócia certa, áreas em carrossel e barra fixa com os dois WhatsApps */

/* Abertura: o monograma GC se desenha entre duas colunas e a cortina sobe */
function Intro({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2100);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div className="fixed inset-0 z-50 grid place-items-center bg-ink"
      exit={{ clipPath: 'inset(0 0 100% 0)' }} initial={{ clipPath: 'inset(0 0 0% 0)' }} transition={{ duration: 1, ease }}>
      <div className="flex flex-col items-center gap-6">
        <svg viewBox="0 0 160 120" className="h-28 w-40" aria-hidden="true">
          <motion.path d="M20 10 V110 M140 10 V110 M10 10 H150 M10 110 H150" fill="none" stroke="var(--color-gold)" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease }} />
          <motion.text x="80" y="76" textAnchor="middle" fontSize="44" fill="var(--color-paper)" fontFamily="Cormorant Garamond, serif"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6, duration: .8, ease }}>GC</motion.text>
        </svg>
        <motion.p className="text-center text-xs tracking-[.4em] text-paper/60 uppercase" initial={{ opacity: 0, letterSpacing: '.7em' }}
          animate={{ opacity: 1, letterSpacing: '.4em' }} transition={{ delay: .8, duration: 1, ease }}>
          {FIRM}<br /><span className="text-[10px] tracking-[.3em] text-paper/40">Sociedade de Advogadas</span>
        </motion.p>
      </div>
    </motion.div>
  );
}

function Nav() {
  return (
    <motion.header initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .2, duration: .8, ease }}
      className="fixed inset-x-0 top-3 z-40 px-3">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/10 bg-ink/60 py-2 pr-2 pl-4 text-paper backdrop-blur-xl">
        {/* Assinatura no estilo da logo delas: nome em caixa-alta espaçada e tipo de sociedade em dourado */}
        <a href="#top" aria-label={`${FIRM} · Sociedade de Advogadas`} className="flex items-center gap-3 py-1">
          <span className="h-8 w-px bg-gold/60" aria-hidden="true" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[15px] font-medium tracking-[.2em] uppercase sm:text-base">{FIRM}</span>
            <span className="mt-1.5 text-[8.5px] font-semibold tracking-[.34em] text-gold uppercase sm:text-[9px]">Sociedade de Advogadas</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-paper/60 md:flex">
          <a className="transition hover:text-paper" href="#seu-caso">Seu caso</a>
          <a className="transition hover:text-paper" href="#areas">Áreas</a>
          <a className="transition hover:text-paper" href="#equipe">Equipe</a>
          <a className="transition hover:text-paper" href="#duvidas">Dúvidas</a>
        </div>
        <a href="#equipe" className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-paper transition hover:bg-brand-2">Agendar</a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const zoom = useTransform(scrollY, [0, 700], [1, 1.12]);
  const lift = useTransform(scrollY, [0, 700], [0, -80]);
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
      {/* As duas sócias lado a lado: topo no celular, metade direita no desktop */}
      <div className="absolute inset-x-0 top-0 flex h-[70svh] gap-px md:inset-y-0 md:left-auto md:h-full md:w-[50%]">
        {lawyers.map((l, i) => (
          <div key={l.id} className="relative h-full flex-1 overflow-hidden">
            <motion.img src={l.photo} alt={l.name} style={{ scale: zoom, objectPosition: l.pos }}
              initial={{ opacity: 0, y: i ? -40 : 40, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.3, delay: i * .15, ease }} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      {/* Escurece as fotos para o texto: de cima para baixo no celular, da esquerda no desktop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_22%,var(--color-ink)_66%)] md:bg-[linear-gradient(to_right,var(--color-ink)_48%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_90%,rgb(36_73_122/.45),transparent_60%)]" />
      <Pillars className="text-paper" count={9} />

      <motion.div style={{ y: lift }} className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pt-24 pb-28 sm:px-8 md:justify-center md:pb-20">
        <ShinyText text="Sociedade de Advogadas · Fortaleza-CE" color="#B08D57" shineColor="#F7F3EE" speed={3} className="text-xs font-semibold tracking-wide sm:text-sm" />
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4, duration: 1, ease }}
          className="mt-4 font-serif text-[clamp(2.9rem,12.5vw,5.2rem)] leading-[.92] font-medium tracking-[-.02em] md:max-w-xl">
          Precisa resolver
          <RotatingText texts={['uma herança?', 'um concurso?', 'uma demissão?', 'seu imóvel?', 'um processo?']} effect="blur" rotationInterval={2400}
            mainClassName="it block text-gold overflow-hidden" />
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9, duration: .9, ease }}>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70 sm:text-lg">
            Advocacia real e humanizada em Direito Civil, Público, Trabalhista e Previdenciário. Na Aldeota ou por videoconferência.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <CtaButton />
            <a href="#seu-caso" className="flex items-center gap-2 text-sm text-paper/60 transition hover:text-paper">
              Qual é o seu caso? <ArrowDown size={16} className="animate-bounce" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Situations() {
  const [i, setI] = useState(0);
  const s = situations[i];
  return (
    <section id="seu-caso" className="relative overflow-hidden bg-ink px-5 pt-6 pb-24 text-paper sm:px-8 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[.3em] text-gold uppercase">Toque na sua situação</p>
          <h2 className="mt-3 font-serif text-[clamp(2.3rem,9vw,4.2rem)] leading-[1] font-medium tracking-[-.02em]">
            Qual é o <span className="it text-gold">seu caso?</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.1fr] md:gap-10">
          <div className="flex flex-wrap content-start items-start gap-2.5" role="tablist" aria-label="Situações">
            {situations.map((it, k) => (
              <button key={it.label} role="tab" aria-selected={k === i} onClick={() => setI(k)}
                className={`relative cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition ${k === i ? 'border-brand text-paper' : 'border-white/15 text-paper/70 hover:border-white/40'}`}>
                {k === i && <motion.span layoutId="chip" className="absolute inset-0 rounded-full bg-brand" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span className="relative">{it.label}</span>
              </button>
            ))}
          </div>
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div key={s.label} role="tabpanel" initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }} transition={{ duration: .4, ease }}
                className="rounded-xl border border-gold/25 bg-gradient-to-br from-ink-2 to-ink p-7 shadow-[0_30px_80px_-30px_rgba(36,73,122,.8)]">
                <span className="font-serif text-5xl text-gold">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-3xl font-medium">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/70">{s.text}</p>
                <a href={waTo(s.to, s.msg)} target="_blank" rel="noopener" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3.5 font-semibold text-ink transition hover:brightness-110 sm:w-auto">
                  <MessageCircle size={18} aria-hidden="true" /> Falar com a {lawyer(s.to).short}
                </a>
                <p className="mt-4 text-xs text-paper/45">Cada caso depende da análise dos documentos.</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Band() {
  return (
    <div className="bg-brand py-3 text-paper">
      <CurvedLoop marqueeText={topics.join(' ✦ ') + ' ✦ '} speed={1.4} curveAmount={0} fontSize={56} interactive color="#F7F3EE" fontWeight={400} />
    </div>
  );
}

function Areas() {
  return (
    <section id="areas" className="py-24 md:py-32">
      <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-serif text-[clamp(2.3rem,9vw,4.2rem)] leading-[1] font-medium tracking-[-.02em]">
          Áreas de <span className="it text-brand">atuação</span>
        </h2>
        <p className="mt-3 text-sm text-mute md:hidden">Arraste para o lado →</p>
      </Reveal>
      {/* Celular: carrossel com snap; desktop: grade */}
      <div className="mx-auto mt-8 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 md:grid md:grid-cols-3 md:overflow-visible">
        {areas.map((a, k) => (
          <SpotlightCard key={a.title} theme="light" spotlightColor="rgba(176,141,87,.25)"
            className="w-[80%] shrink-0 snap-center !rounded-xl !border-line !bg-white/80 !p-7 md:w-auto">
            <span className="font-serif text-4xl text-gold">0{k + 1}</span>
            <h3 className="mt-5 font-serif text-3xl leading-tight font-medium">{a.title}</h3>
            <ul className="mt-6 divide-y divide-line border-t border-line text-sm">
              {a.points.map(t => <li key={t} className="py-2.5">{t}</li>)}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <section className="border-t border-line px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <h2 className="font-serif text-[clamp(2.3rem,9vw,4.2rem)] leading-[1] font-medium tracking-[-.02em] md:sticky md:top-28">
            Como funciona a <span className="it text-brand">consultoria on-line</span>
          </h2>
        </Reveal>
        <div ref={ref} className="relative pl-10">
          <div className="absolute top-2 bottom-2 left-[11px] w-px bg-line" />
          <motion.div style={{ scaleY: fill }} className="absolute top-2 bottom-2 left-[11px] w-px origin-top bg-brand" />
          {steps.map((s, k) => (
            <Reveal key={s.n} delay={k * .05} className="relative pb-12 last:pb-0">
              <span className="absolute top-1 -left-10 grid h-6 w-6 place-items-center rounded-full border border-brand bg-paper text-[10px] font-bold text-brand">{k + 1}</span>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-md leading-relaxed text-mute">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="equipe" className="relative overflow-hidden bg-ink px-5 py-24 text-paper sm:px-8 md:py-32">
      <Pillars className="text-paper" count={9} />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[.3em] text-gold uppercase">Equipe</p>
          <h2 className="mt-3 font-serif text-[clamp(2.3rem,9vw,4.2rem)] leading-[1] font-medium tracking-[-.02em]">
            Advocacia real e <span className="it text-gold">humanizada.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {lawyers.map((l, i) => (
            <Reveal key={l.id} delay={i * .12}>
              <article className="overflow-hidden rounded-xl border border-white/10 bg-ink-2">
                <img src={l.photo} alt={l.name} loading="lazy" style={{ objectPosition: l.pos }} className="h-[360px] w-full object-cover md:h-[420px]" />
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold tracking-[.2em] text-gold uppercase">Sócia · {l.focus}</p>
                  <h3 className="mt-2 font-serif text-3xl font-medium">{l.name}</h3>
                  <p className="mt-1 text-sm text-paper/50">{l.oab}</p>
                  <p className="mt-4 leading-relaxed text-paper/70">{l.bio}</p>
                  <a href={waTo(l.id)} target="_blank" rel="noopener" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-3.5 font-semibold transition hover:bg-brand-2 sm:w-auto">
                    <MessageCircle size={18} aria-hidden="true" /> WhatsApp · {l.phoneLabel}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={.2}>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
            <li className="flex gap-3 bg-ink p-5"><MapPin className="shrink-0 text-gold" size={20} strokeWidth={1.5} aria-hidden="true" /><span className="text-sm">{ADDRESS}</span></li>
            <li className="flex gap-3 bg-ink p-5"><Clock className="shrink-0 text-gold" size={20} strokeWidth={1.5} aria-hidden="true" /><span className="text-sm">{HOURS} · consultoria on-line para todo o Brasil</span></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={MAPS} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-gold underline underline-offset-4">Ver no Google Maps <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href={OAB_CHECK} target="_blank" rel="noopener" className="text-paper/60 underline underline-offset-4">Verificar inscrições na OAB</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Barra fixa no celular com o WhatsApp de cada sócia, aparece depois do hero */
function MobileBar() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useEffect(() => scrollY.on('change', v => setShow(v > 400)), [scrollY]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} transition={{ duration: .4, ease }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/90 px-3 pt-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
          <p className="mb-2 text-center text-[11px] tracking-[.2em] text-paper/50 uppercase">Agende pelo WhatsApp</p>
          <div className="grid grid-cols-2 gap-2">
            {lawyers.map(l => (
              <a key={l.id} href={waTo(l.id)} target="_blank" rel="noopener"
                className="flex items-center justify-center gap-2 rounded-md bg-brand px-3 py-3 text-sm font-semibold text-paper active:bg-brand-2">
                <MessageCircle size={16} aria-hidden="true" /> {l.short}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [ready, setReady] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  return (
    <>
      <AnimatePresence>{!ready && <Intro onDone={() => setReady(true)} />}</AnimatePresence>
      {ready && <Nav />}
      <main>
        {/* Hero só monta depois da abertura, para as animações de entrada rodarem quando a cortina sobe */}
        {ready ? <Hero /> : <div className="min-h-[100svh] bg-ink" />}
        <Situations />
        <Band />
        <Areas />
        <Steps />
        <Team />
        <Faq />
        <FinalCta />
      </main>
      <div className="h-28 bg-ink md:hidden" aria-hidden="true" />
      <MobileBar />
      <div className="hidden md:block"><FloatingWhatsApp /></div>
    </>
  );
}
