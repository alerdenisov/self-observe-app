import { motion, AnimatePresence } from 'motion/react';
import type { Track } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface SourcesSelectorProps {
  track: Track;
  selectedSources: string[];
  onToggle: (source: string) => void;
  show: boolean;
}

export function SourcesSelector({ track, selectedSources, onToggle, show }: SourcesSelectorProps) {
  const { t } = useLanguage();
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div
            className="p-6 rounded-[2rem] space-y-4 border-2 border-dashed"
            style={{ 
              backgroundColor: `${track.color}40`,
              borderColor: track.color
            }}
          >
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-gray-800">
                {t.sourceSelector.question}
              </h4>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {track.sources.map((source, index) => {
                const isSelected = selectedSources.includes(source);
                return (
                  <motion.button
                    key={source}
                    onClick={() => onToggle(source)}
                    className={cn(
                      'px-4 py-2.5 rounded-full text-sm font-medium transition-all',
                      'border-2',
                      isSelected
                        ? 'bg-gray-900 text-white border-gray-900 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:shadow-md'
                    )}
                    whileTap={{ scale: 0.92 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 500, 
                      damping: 30,
                      delay: index * 0.03
                    }}
                  >
                    {source}
                  </motion.button>
                );
              })}
            </motion.div>

            {selectedSources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-2 border-t border-gray-300/50"
              >
                <p className="text-xs text-gray-600">
                  {t.sourceSelector.selected} <span className="font-medium">{selectedSources.length} {selectedSources.length === 1 ? t.sourceSelector.source : t.sourceSelector.sources}</span>
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
