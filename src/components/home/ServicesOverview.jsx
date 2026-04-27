import { ArrowRight } from 'lucide-react';
import { featuredServiceKeys } from '../../data/homeData.js';
import { servicesData } from '../../data/servicesData.js';
import { Button, Container, SectionHeader } from '../common/index.js';
import { ServiceCard } from '../services/ServiceCard.jsx';

export function ServicesOverview() {
  const featuredServices = featuredServiceKeys
    .map((id) => servicesData.find((service) => service.id === id))
    .filter(Boolean);

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <SectionHeader
          eyebrow="Services"
          heading="Kidney Care Services"
          description="Explore key consultation areas for kidney disease, dialysis guidance, transplant guidance, and report review. Full service details will continue on the services page."
          align="center"
          className="mb-10"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.name}
              description={service.shortDescription}
              cta="Learn More"
              href={service.href}
              hasDisclaimer={service.hasDisclaimer}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="primary" icon={<ArrowRight size={18} />} iconPosition="right">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
