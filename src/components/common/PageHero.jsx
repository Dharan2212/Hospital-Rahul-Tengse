import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Container } from './Container';

const backgroundClasses = {
  gradient: 'bg-gradient-to-br from-sky via-white to-teal/10 text-navy',
  teal: 'bg-teal text-white',
  navy: 'bg-navy text-white',
  light: 'bg-bgAlt text-navy'
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  breadcrumbs = [],
  primaryCTA,
  secondaryCTA,
  background = 'gradient',
  children,
  className = ''
}) {
  const isDark = background === 'teal' || background === 'navy';

  return (
    <section className={cx('overflow-hidden py-14 md:py-20', backgroundClasses[background] || backgroundClasses.gradient, className)}>
      <Container>
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className={cx('flex flex-wrap items-center gap-2 text-sm', isDark ? 'text-white/80' : 'text-muted')}>
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                    {item.href && !isLast ? (
                      <Link className="font-medium hover:text-teal focus-visible:text-teal" to={item.href}>
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
                    )}
                    {!isLast && <ChevronRight aria-hidden="true" className="h-4 w-4" />}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="max-w-4xl">
            {eyebrow && (
              <p className={cx('mb-4 text-xs font-bold uppercase tracking-[0.22em]', isDark ? 'text-sky' : 'text-teal')}>
                {eyebrow}
              </p>
            )}
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className={cx('mt-4 text-lg font-semibold md:text-xl', isDark ? 'text-white/90' : 'text-teal')}>
                {subtitle}
              </p>
            )}
            {description && (
              <p className={cx('mt-4 max-w-3xl text-base leading-7 md:text-lg', isDark ? 'text-white/80' : 'text-muted')}>
                {description}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {primaryCTA && (
                  <Button href={primaryCTA.href} variant={primaryCTA.variant || 'primary'} size="lg">
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button href={secondaryCTA.href} variant={secondaryCTA.variant || 'outline'} size="lg">
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            )}
          </div>
          {children && <div className="lg:min-w-[280px]">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
