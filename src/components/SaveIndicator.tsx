import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface SaveIndicatorProps {
  show: boolean;
}

export function SaveIndicator({ show }: SaveIndicatorProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 z-50"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: 1 }}
          >
            ✓
          </motion.div>
          <span className="text-sm font-medium">Saved</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
