import { motion } from 'framer-motion';
import { Calendar, Eye, Newspaper } from 'lucide-react';
import { Button } from '../common/Button';
import { AnimatedCard } from '../common/AnimatedCard';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import { mediaImageHoverMotion } from '../../utils/motion.js';

function isRenderableMedia(item) {
  return (
    item?.approvalStatus === 'approved' &&
    item?.privacyStatus === 'clear' &&
    item?.frontendUseAllowed === true &&
    item?.thumbnail &&
    item?.fullImage
  );
}

export function MediaCard({ item, onView }) {
  const shouldReduceMotion = useReducedMotionPreference();

  if (!isRenderableMedia(item)) return null;

  return (
    <AnimatedCard as="article" className="overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden bg-sky">
        <motion.img
          src={item.thumbnail}
          alt={item.alt || 'Newspaper coverage of kidney awareness - Dr. Rahul Tengse'}
          className="h-full w-full object-cover"
          loading="lazy"
          whileHover={mediaImageHoverMotion(shouldReduceMotion)}
        />
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          <span className="inline-flex items-center gap-1">
            <Newspaper aria-hidden="true" className="h-4 w-4" />
            {item.source}
          </span>
          {item.date && (
            <span className="inline-flex items-center gap-1">
              <Calendar aria-hidden="true" className="h-4 w-4" />
              {item.date}
            </span>
          )}
        </div>
        <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
        <Button
          className="mt-5"
          variant="outline"
          size="sm"
          onClick={() => onView?.(item)}
          icon={<Eye className="h-4 w-4" />}
          ariaLabel={`View media image: ${item.title}`}
        >
          View Image
        </Button>
      </div>
    </AnimatedCard>
  );
}

export { isRenderableMedia };
