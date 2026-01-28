import { motion, useMotionValue, useTransform, animate, MotionValue } from 'motion/react';
import { useRef, useState } from 'react';
import type { Track } from '@/lib/types';
import { cn } from '@/lib/utils';
import { StatusDot } from './StatusDot';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface TemperatureSliderProps {
  track: Track;
  value: number;
  onChange: (value: number) => void;
}

interface SliderItemProps {
  mark: number;
  x: MotionValue<number>;
  isDragging: boolean;
  onTap: (mark: number) => void;
  itemWidth: number;
}

function SliderItem({ mark, x, isDragging, onTap, itemWidth }: SliderItemProps) {
  const distance = useTransform(
    x,
    (latest) => Math.abs((-mark * itemWidth) - latest) / itemWidth
  );
  
  const scale = useTransform(distance, [0, 1, 2], [1, 0.7, 0.6]);
  const opacity = useTransform(distance, [0, 1, 2, 3], [1, 0.8, 0.5, 0.3]);
  
  return (
    <motion.button
      onClick={() => !isDragging && onTap(mark)}
      className={cn(
        'flex-shrink-0 flex items-center justify-center rounded-2xl transition-all font-bold select-none',
        'text-lg relative',
        'text-black',
      )}
      style={{
        width: itemWidth,
        height: 60,
        scale,
        opacity,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={cn(
        'absolute inset-0 rounded-2xl transition-all bg-white',
      )} />
      <span className="relative z-10">{mark}</span>
    </motion.button>
  );
}

const ITEM_WIDTH = 60;

export function TemperatureSlider({ track, value, onChange }: TemperatureSliderProps) {
  const { t } = useLanguage();
  const marks = Array.from({ length: 11 }, (_, i) => i);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(-value * ITEM_WIDTH);

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = x.get();
    const index = Math.round(-currentX / ITEM_WIDTH);
    const clampedIndex = Math.max(0, Math.min(10, index));
    const targetX = -clampedIndex * ITEM_WIDTH;
    
    animate(x, targetX, {
      type: 'spring',
      stiffness: 400,
      damping: 30,
    });
    
    if (clampedIndex !== value) {
      onChange(clampedIndex);
    }
  };

  const handleTap = (mark: number) => {
    const targetX = -mark * ITEM_WIDTH;
    animate(x, targetX, {
      type: 'spring',
      stiffness: 400,
      damping: 30,
    });
    onChange(mark);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden"
    >
      <div
        className="p-6 rounded-[2rem] relative select-none border-2"
        style={{ 
          background: `linear-gradient(135deg, ${track.color} 0%, ${track.color} 100%)`,
          borderColor: `${track.color}33`
        }}
      >
        {/* Glare effect */}
        <div 
          className="absolute inset-0 rounded-[2rem] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)',
          }}
        />
        {/* Header */}
        <div className="relative flex items-center justify-between mb-6 z-10">
          <h3 className="text-lg font-semibold text-gray-900">{track.name}</h3>
          <motion.div
            key={value}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center gap-2"
          >
            <div className="text-3xl font-bold text-gray-900">{value}</div>
            <div className="text-xs text-gray-600">/10</div>
          </motion.div>
        </div>

        {/* Horizontal Scroll Picker */}
        <div className="relative z-10 mask-l-from-20% mask-r-from-80%">
          {/* Center indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="w-[60px] h-[64px] border-4 border-gray-900 rounded-2xl bg-gray-900/5" />
          </div>

          {/* Fade edges */}
          {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[currentColor] to-transparent pointer-events-none z-10" style={{ color: track.color }} /> */}
          {/* <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[currentColor] to-transparent pointer-events-none z-10" style={{ color: track.color }} /> */}

          {/* Scrollable container */}
          <div 
            ref={containerRef}
            className="overflow-hidden py-2"
            style={{ 
              width: '100%',
              touchAction: 'pan-y pinch-zoom'
            }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ 
                left: -10 * ITEM_WIDTH, 
                right: 0 
              }}
              dragElastic={0.1}
              dragMomentum={true}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              style={{ 
                x,
                display: 'flex',
                paddingLeft: `calc(50% - ${ITEM_WIDTH / 2}px)`,
                paddingRight: `calc(50% - ${ITEM_WIDTH / 2}px)`,
                cursor: isDragging ? 'grabbing' : 'grab',
              }}
            >
              {marks.map((mark) => (
                <SliderItem
                  key={mark}
                  mark={mark}
                  x={x}
                  isDragging={isDragging}
                  onTap={handleTap}
                  itemWidth={ITEM_WIDTH}
                />
              ))}
            </motion.div>
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-3 px-4 text-xs font-medium text-gray-700">
            <span>{t.slider.normal}</span>
            <span>{t.slider.critical}</span>
          </div>
        </div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mt-4 flex items-center justify-center gap-2 z-10"
        >
          <StatusDot 
            status={value >= 7 ? 'high' : value >= 4 ? 'medium' : 'low'} 
            size={16}
          />
          <div className="text-xs font-medium text-gray-600">
            {value >= 7 && t.slider.high}
            {value >= 4 && value < 7 && t.slider.moderate}
            {value < 4 && t.slider.low}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
