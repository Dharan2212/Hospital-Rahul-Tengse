import { motion } from 'framer-motion';
import { Activity, BookOpen, Hospital, ShieldCheck } from 'lucide-react';
import { trustHighlights } from '../../data/homeData.js';
import { Container, SectionHeader, StaggerGroup } from '../common/index.js';
import { hoverLiftMotion, staggerItem } from '../../utils/motion.js';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';

const iconMap = {
  ShieldCheck,
  Activity,
  Hospital,
  BookOpen
};

const colorClasses = {
  teal: 'bg-teal/10 text-teal border-teal/20',
  green: 'bg-green/10 text-green border-green/20',
  blue: 'bg-blue/10 text-blue border-blue/20',
  purple: 'bg-purple/10 text-purple border-purple/20'
};

export function TrustHighlights() {
  const shouldReduceMotion = useReducedMotionPreference();

  return (
    <section className="bg-white py-14 md:py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Patient-focused care"
          heading="Kidney Care You Can Trust"
          description="Patient-focused nephrology guidance for kidney disease, dialysis care, transplant guidance, and awareness."
          align="center"
          className="mx-auto mb-10"
        />

        <StaggerGroup
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.08}
        >
          {trustHighlights.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;

            return (
              <motion.article
                key={item.title}
                variants={staggerItem(shouldReduceMotion)}
                whileHover={hoverLiftMotion(shouldReduceMotion)}
                className="group rounded-card border border-border bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-hover"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${
                    colorClasses[item.color] || colorClasses.teal
                  }`}
                >
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h2 className="font-heading text-lg font-bold text-navy">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </motion.article>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
