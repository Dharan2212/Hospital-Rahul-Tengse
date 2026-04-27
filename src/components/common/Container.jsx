const sizeClasses = {
  default: 'max-w-content',
  narrow: 'max-w-3xl',
  wide: 'max-w-7xl',
  full: 'max-w-none'
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Container({ children, size = 'default', className = '', as: Component = 'div' }) {
  return (
    <Component className={cx('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}>
      {children}
    </Component>
  );
}
