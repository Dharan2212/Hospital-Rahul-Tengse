import { motion } from 'framer-motion';
import { Camera, Images } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '../common/Button';
import { AnimatedCard } from '../common/AnimatedCard';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import { mediaImageHoverMotion } from '../../utils/motion.js';
import { ImageModal } from './ImageModal';

const categories = [
  'All',
  'Doctor Photos',
  'Hospital',
  'Facilities',
  'Media Coverage',
  'Awareness Posters',
  'Dialysis Awareness',
  'Kidney Care Graphics'
];

function isSafeGalleryItem(item) {
  return (
    item?.approvalStatus === 'approved' &&
    item?.privacyStatus === 'clear' &&
    item?.frontendUseAllowed === true &&
    item?.thumbnail &&
    item?.fullImage
  );
}

export function GalleryGrid({ images = [] }) {
  const shouldReduceMotion = useReducedMotionPreference();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const safeImages = useMemo(() => images.filter(isSafeGalleryItem), [images]);
  const filteredImages = useMemo(
    () => activeCategory === 'All' ? safeImages : safeImages.filter((item) => item.category === activeCategory),
    [activeCategory, safeImages]
  );

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Gallery categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
              activeCategory === category
                ? 'border-teal bg-teal text-white'
                : 'border-border bg-white text-navy hover:bg-sky hover:text-teal'
            }`}
            aria-selected={activeCategory === category}
            role="tab"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredImages.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((item) => (
            <AnimatedCard key={item.id} as="article" className="overflow-hidden">
              <button
                type="button"
                className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-sky">
                  <motion.img
                    src={item.thumbnail}
                    alt={item.caption || item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    whileHover={mediaImageHoverMotion(shouldReduceMotion)}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{item.category}</p>
                  <h3 className="mt-2 font-heading text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.caption}</p>
                </div>
              </button>
            </AnimatedCard>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-card border border-dashed border-border bg-white p-8 text-center shadow-card">
          <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-teal">
            <Images aria-hidden="true" className="h-7 w-7" />
          </span>
          <h3 className="mt-4 font-heading text-xl font-bold text-navy">Approved gallery images pending</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted">
            Approved gallery images will be added after client review. Patient photographs are not included in this gallery.
          </p>
          <Button href="/appointment" className="mt-5" variant="outline" icon={<Camera className="h-4 w-4" />}>
            Book Appointment
          </Button>
        </div>
      )}

      <ImageModal image={selectedImage} isOpen={Boolean(selectedImage)} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

export { isSafeGalleryItem };
