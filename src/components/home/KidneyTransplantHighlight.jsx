import { HeartPulse, Hospital } from 'lucide-react';
import { transplantHighlightData } from '../../data/homeData.js';
import { Button, Container, Disclaimer, MotionReveal } from '../common/index.js';

export function KidneyTransplantHighlight() {
  return (
    <section className="bg-gradient-to-br from-teal to-navy py-16 text-white md:py-20">
      <Container>
        <MotionReveal>
          <div className="grid items-center gap-8 rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-hover backdrop-blur md:p-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="flex justify-center lg:justify-start">
              <div className="relative inline-flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/20 bg-white/15">
                <Hospital size={64} aria-hidden="true" />
                <span className="absolute -right-3 -top-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal shadow-card">
                  <HeartPulse size={24} aria-hidden="true" />
                </span>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky">
                {transplantHighlightData.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
                {transplantHighlightData.heading}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/85">
                {transplantHighlightData.description}
              </p>
              <Disclaimer
                type="transplant"
                compact
                text={transplantHighlightData.disclaimer}
                className="mt-5 border-white/20 bg-white/95"
              />
              <div className="mt-7">
                <Button href={transplantHighlightData.cta.href} variant="subtle">
                  {transplantHighlightData.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
