import { CheckCircle } from 'lucide-react';

export function IconList({ items = [], className = '', tone = 'teal' }) {
  const iconColor = tone === 'green' ? 'text-green' : tone === 'blue' ? 'text-blue' : 'text-teal';

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
          <CheckCircle aria-hidden="true" className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
