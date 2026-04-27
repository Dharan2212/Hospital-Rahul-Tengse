import { AlertCircle, ArrowRight, HeartPulse, Info } from 'lucide-react';
import { awarenessPreviewData } from '../../data/homeData.js';
import { Button, Container, SectionHeader, StaggerGroup } from '../common/index.js';
import { motion } from 'framer-motion';
import { hoverLiftMotion, staggerItem } from '../../utils/motion.js';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';

const iconMap = {
  AlertCircle,
  HeartPulse,
  Info
};

const colorClasses = {
  teal: 'bg-teal/10 text-teal border-teal/20',
  green: 'bg-green/10 text-green border-green/20',
  blue: 'bg-blue/10 text-blue border-blue/20'
};

export function PatientAwarenessPreview() {
  const shouldReduceMotion = useReducedMotionPreference();

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <SectionHeader
          eyebrow="Patient awareness"
          heading="Kidney Health Awareness"
          description="Simple educational guidance to help patients and families understand kidney health warning signs and risk factors."
          align="center"
          className="mb-10"
        />

        <StaggerGroup className="grid gap-5 md:grid-cols-3">
          {awarenessPreviewData.map((item) => {
            const Icon = iconMap[item.icon] || Info;

            return (
              <motion.article
                key={item.title}
                variants={staggerItem(shouldReduceMotion)}
                whileHover={hoverLiftMotion(shouldReduceMotion)}
                className="rounded-card border border-border bg-bgAlt p-6 shadow-card transition-shadow hover:shadow-hover"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${
                    colorClasses[item.color] || colorClasses.teal
                  }`}
                >
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                <div className="mt-5">
                  <Button href={item.href} variant="ghost" size="sm" icon={<ArrowRight size={16} />} iconPosition="right">
                    Learn More
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
