import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { ArrowUpRight, MessageCircle, Plus } from 'lucide-react';

import SplitText from '@/components/SplitText';
import Magnet from '@/components/Magnet';
import Pillars from '@/components/Pillars';
import { FACEBOOK, NAME, OAB, OAB_CHECK, PHONE, WHATSAPP, faq } from '@/content';

/* Peças compartilhadas da página: botão, revelação no scroll, FAQ, CTA final e WhatsApp flutuante */

export const ease = [0.22, 1, 0.36, 1] as const;

export function CtaButton({ children = 'Agendar atendimento' }: { children?: string }) {
  return (
    <Magnet padding={60} magnetStrength={3}>
      <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-shine">
        {children}
        <span className="arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
      </a>
    </Magnet>
  );
}

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: .9, delay, ease }}>
      {children}
    </motion.div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas" className="border-t border-line px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1] font-medium tracking-[-.02em]">
            Dúvidas <span className="it text-wine">frequentes</span>
          </h2>
        </Reveal>
        <div className="border-b border-line">
          {faq.map((f, i) => (
            <div key={f.q} className="border-t border-line">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-lg font-medium transition hover:text-wine">
                {f.q}
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-line text-wine">
                  <Plus size={18} aria-hidden="true" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: .45, ease }} className="overflow-hidden">
                    <p className="max-w-xl pb-6 text-mute">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Pillars className="text-paper" />
      <div className="relative mx-auto flex min-h-[80dvh] max-w-6xl flex-col items-center justify-center px-5 py-32 text-center sm:px-8">
        <SplitText tag="h2" text="Vamos conversar?" className="font-serif text-[clamp(3.2rem,11vw,9rem)] leading-[.9] font-medium tracking-[-.03em]"
          effect="rise" splitType="chars" delay={30} duration={1} mask />
        <Reveal delay={.3}>
          <p className="mx-auto mt-6 max-w-md text-lg text-paper/65">Conte sua situação e agende um atendimento.</p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CtaButton>{`WhatsApp · ${PHONE}`}</CtaButton>
          </div>
        </Reveal>
      </div>
      <footer className="relative mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-white/10 px-5 py-8 text-sm text-paper/60 sm:px-8">
        <span>{NAME} · Advogada · {OAB}</span>
        <div className="flex gap-6">
          <a href={OAB_CHECK} target="_blank" rel="noopener" className="transition hover:text-paper">Verificar inscrição na OAB</a>
          <a href={FACEBOOK} target="_blank" rel="noopener" className="transition hover:text-paper">Facebook</a>
        </div>
      </footer>
    </section>
  );
}

export function FloatingWhatsApp() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useEffect(() => scrollY.on('change', v => setShow(v > 700)), [scrollY]);
  return (
    <AnimatePresence>
      {show && (
        <motion.a href={WHATSAPP} target="_blank" rel="noopener" aria-label="Agendar pelo WhatsApp"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
          className="fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-wine text-paper shadow-[0_12px_40px_-8px_rgba(94,26,40,.7)]">
          <span className="absolute inset-0 animate-ping rounded-full bg-wine/40" />
          <MessageCircle className="relative" size={24} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
