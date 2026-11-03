import { motion, useReducedMotion } from 'motion/react';

/* Fundo de linhas verticais (como as ripas do escritório) com feixes dourados descendo, no estilo dos "background beams" do 21st.dev */
export default function Pillars({ count = 14, className = '' }: { count?: number; className?: string }) {
  const still = useReducedMotion();
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 flex justify-between overflow-hidden px-[4vw] ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="relative h-full w-px">
          <span className="absolute inset-0 bg-current opacity-10" />
          {!still && i % 3 !== 1 && (
            <motion.span className="absolute left-0 h-40 w-px bg-gradient-to-b from-transparent via-gold to-transparent"
              initial={{ top: '-20%' }} animate={{ top: '120%' }}
              transition={{ duration: 5 + (i % 4), delay: (i * 1.3) % 6, repeat: Infinity, repeatDelay: 2 + (i % 5), ease: 'easeInOut' }} />
          )}
        </div>
      ))}
    </div>
  );
}
