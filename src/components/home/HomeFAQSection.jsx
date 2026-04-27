import { faqData } from '../../data/faqData.js';
import { Container, FAQ, SectionHeader } from '../common/index.js';

export function HomeFAQSection() {
  return (
    <section className="bg-sky py-16 md:py-20">
      <Container size="narrow">
        <SectionHeader
          eyebrow="FAQ"
          heading="Frequently Asked Questions"
          description="General answers for patient awareness. Personalized medical advice requires consultation."
          align="center"
          className="mb-10"
        />
        <FAQ items={faqData.slice(0, 7)} />
      </Container>
    </section>
  );
}
