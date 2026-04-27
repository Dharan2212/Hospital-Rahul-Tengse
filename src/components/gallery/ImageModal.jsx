import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import { modalBackdropMotion, modalContentMotion } from '../../utils/motion.js';

export function ImageModal({ image, isOpen, onClose }) {
  const shouldReduceMotion = useReducedMotionPreference();
  const isSafe = image?.approvalStatus === 'approved' && image?.privacyStatus === 'clear' && image?.frontendUseAllowed === true;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm" {...modalBackdropMotion(shouldReduceMotion)} />
        </Dialog.Overlay>
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[min(92vw,920px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal"
          aria-describedby="gallery-modal-description"
        >
          <motion.div className="overflow-hidden rounded-card bg-white shadow-hover" {...modalContentMotion(shouldReduceMotion)}>
            <div className="flex items-start justify-between gap-4 border-b border-border p-4">
              <div>
                <Dialog.Title className="font-heading text-lg font-bold text-navy">
                  {image?.title || 'Gallery Image'}
                </Dialog.Title>
                <Dialog.Description id="gallery-modal-description" className="mt-1 text-sm text-muted">
                  {image?.caption || 'Approved gallery image preview.'}
                </Dialog.Description>
              </div>
              <Dialog.Close className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-navy transition hover:bg-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal" aria-label="Close image preview">
                <X aria-hidden="true" className="h-5 w-5" />
              </Dialog.Close>
            </div>
            <div className="max-h-[72vh] overflow-auto bg-bgAlt p-4">
              {isSafe ? (
                <img src={image.fullImage || image.thumbnail} alt={image.caption || image.title} className="mx-auto max-h-[66vh] rounded-card object-contain" />
              ) : (
                <div className="rounded-card border border-border bg-white p-8 text-center text-muted">
                  This image is not approved for public preview.
                </div>
              )}
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
