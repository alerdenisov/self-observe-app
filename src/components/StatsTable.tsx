import { motion } from 'motion/react';
import type { Track, DailyEntry } from '@/lib/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface StatsTableProps {
  tracks: Track[];
  currentEntry: DailyEntry;
  historicalEntries: DailyEntry[];
}

export function StatsTable({ tracks, currentEntry, historicalEntries }: StatsTableProps) {
  const { t } = useLanguage();
  
  if (historicalEntries.length === 0) {
    return null;
  }

  const calculateAverage = (entry: DailyEntry) => {
    const values = Object.values(entry.tracks).map((t) => t.value);
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  };

  const mostRecentEntry = historicalEntries[0];
  const currentAvg = calculateAverage(currentEntry);
  const previousAvg = calculateAverage(mostRecentEntry);
  const avgDiff = currentAvg - previousAvg;

  const formatDiff = (diff: number) => {
    if (diff === 0) return '0';
    return diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1);
  };

  const getDiffColor = (diff: number) => {
    if (diff > 0) return 'text-red-600';
    if (diff < 0) return 'text-green-600';
    return 'text-gray-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-6 pt-6 border-t border-gray-200"
    >
      <h4 className="text-sm font-semibold text-gray-900 mb-3">
        {t.stats.comparisonWith} {new Date(mostRecentEntry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </h4>
      
      <div className="space-y-2 mb-4">
        {tracks.map((track) => {
          const currentValue = currentEntry.tracks[track.id].value;
          const previousValue = mostRecentEntry.tracks[track.id]?.value || 0;
          const diff = currentValue - previousValue;

          return (
            <div key={track.id} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: track.color }}
                />
                <span className="text-gray-700">{track.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-xs">{currentValue}/10</span>
                <span className={`font-medium min-w-[40px] text-right ${getDiffColor(diff)}`}>
                  {formatDiff(diff)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 hidden">
        <div className="flex items-center justify-between text-sm font-semibold">
          <span className="text-gray-700">Overall</span>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-xs">{currentAvg.toFixed(1)}/10</span>
            <span className={`min-w-[40px] text-right ${getDiffColor(avgDiff)}`}>
              {formatDiff(avgDiff)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
