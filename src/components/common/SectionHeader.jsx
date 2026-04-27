const alignClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center mx-auto'
};

const headingColorClasses = {
  navy: 'text-navy',
  teal: 'text-teal',
  white: 'text-white',
  text: 'text-text'
};

const eyebrowClasses = {
  teal: 'bg-sky text-teal border-teal/20',
  green: 'bg-green/10 text-green border-green/20',
  navy: 'bg-navy/10 text-navy border-navy/20',
  gold: 'bg-gold/10 text-gold border-gold/20',
  light: 'bg-white/15 text-white border-white/25'
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = 'left',
  headingColor = 'navy',
  className = '',
  eyebrowVariant = 'teal',
  as: HeadingTag = 'h2'
}) {
  return (
    <div className={cx('flex max-w-3xl flex-col gap-3', alignClasses[align] || alignClasses.left, className)}>
      {eyebrow && (
        <p
          className={cx(
            'inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]',
            eyebrowClasses[eyebrowVariant] || eyebrowClasses.teal
          )}
        >
          {eyebrow}
        </p>
      )}
      {heading && (
        <HeadingTag
          className={cx(
            'font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl',
            headingColorClasses[headingColor] || headingColorClasses.navy
          )}
        >
          {heading}
        </HeadingTag>
      )}
      {description && <p className="text-base leading-7 text-muted md:text-lg">{description}</p>}
    </div>
  );
}
