import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-teal text-white border border-teal shadow-card hover:bg-navy hover:border-navy',
  secondary: 'bg-green text-white border border-green shadow-card hover:bg-navy hover:border-navy',
  outline: 'bg-transparent text-teal border border-teal hover:bg-sky',
  ghost: 'bg-transparent text-navy border border-transparent hover:bg-sky hover:text-teal',
  navy: 'bg-navy text-white border border-navy shadow-card hover:bg-teal hover:border-teal',
  emergency: 'bg-red text-white border border-red shadow-card hover:bg-red/90',
  subtle: 'bg-bgAlt text-navy border border-border hover:bg-sky hover:text-teal'
};

const sizeClasses = {
  sm: 'min-h-11 px-4 py-2 text-sm',
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-12 px-6 py-3 text-base',
  icon: 'min-h-11 min-w-11 p-2.5 text-sm'
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  );
}

function isExternalHref(href) {
  return /^https?:\/\//i.test(href || '') || /^mailto:/i.test(href || '') || /^tel:/i.test(href || '');
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  children,
  className = '',
  external = false,
  ariaLabel
}) {
  const isDisabled = disabled || loading;
  const content = (
    <>
      {loading && <Spinner />}
      {!loading && icon && iconPosition === 'left' && (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {icon}
        </span>
      )}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === 'right' && (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {icon}
        </span>
      )}
    </>
  );

  const classes = cx(
    'inline-flex items-center justify-center gap-2 rounded-btn font-semibold leading-none transition duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
    'disabled:cursor-not-allowed disabled:opacity-60',
    isDisabled && 'pointer-events-none cursor-not-allowed opacity-60',
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    className
  );

  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  };

  if (href) {
    const shouldUseAnchor = external || isExternalHref(href) || href === '#';

    if (shouldUseAnchor) {
      return (
        <a
          href={isDisabled ? undefined : href}
          aria-label={ariaLabel}
          aria-disabled={isDisabled ? 'true' : undefined}
          className={classes}
          onClick={handleClick}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          tabIndex={isDisabled ? -1 : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        to={href}
        aria-label={ariaLabel}
        aria-disabled={isDisabled ? 'true' : undefined}
        className={classes}
        onClick={handleClick}
        tabIndex={isDisabled ? -1 : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={classes}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
