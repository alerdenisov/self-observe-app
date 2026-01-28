import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TemperatureSlider } from './components/TemperatureSlider';
import { SourcesSelector } from './components/SourcesSelector';
import { SaveIndicator } from './components/SaveIndicator';
import { AppIcon } from './components/AppIcon';
import { RadarChart } from './components/RadarChart';
import { StatsTable } from './components/StatsTable';
import { LanguageSelector } from './components/LanguageSelector';
import { getLocalizedTracks } from './lib/tracks-localized';
import { useLanguage } from './lib/i18n/LanguageContext';
import type { DailyEntry, TrackType } from './lib/types';

function App() {
  const { t } = useLanguage();
  const tracks = getLocalizedTracks(t);
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [direction, setDirection] = useState(0);
  const [expandedTrack, setExpandedTrack] = useState<TrackType | null>(null);
  const [showSaveIndicator, setShowSaveIndicator] = useState(false);

  const [entry, setEntry] = useState<DailyEntry>(() => {
    const stored = localStorage.getItem(`entry-${selectedDate}`);
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      date: selectedDate,
      tracks: {
        mood: { value: 0, selectedSources: [] },
        sleep: { value: 0, selectedSources: [] },
        pressure: { value: 0, selectedSources: [] },
        thinking: { value: 0, selectedSources: [] },
        reality: { value: 0, selectedSources: [] },
        motion: { value: 0, selectedSources: [] },
      },
    };
  });

  useEffect(() => {
    localStorage.setItem(`entry-${entry.date}`, JSON.stringify(entry));
    setShowSaveIndicator(true);
  }, [entry]);

  useEffect(() => {
    const stored = localStorage.getItem(`entry-${selectedDate}`);
    if (stored) {
      const loadedEntry = JSON.parse(stored);
      setEntry({ ...loadedEntry, date: selectedDate });
    } else {
      setEntry({
        date: selectedDate,
        tracks: {
          mood: { value: 0, selectedSources: [] },
          sleep: { value: 0, selectedSources: [] },
          pressure: { value: 0, selectedSources: [] },
          thinking: { value: 0, selectedSources: [] },
          reality: { value: 0, selectedSources: [] },
          motion: { value: 0, selectedSources: [] },
        },
      });
    }
    setExpandedTrack(null);
  }, [selectedDate]);

  const updateTrackValue = (trackId: TrackType, value: number) => {
    setEntry((prev) => ({
      ...prev,
      tracks: {
        ...prev.tracks,
        [trackId]: {
          ...prev.tracks[trackId],
          value,
        },
      },
    }));

    if (value >= 5) {
      setExpandedTrack(trackId);
    } else {
      if (expandedTrack === trackId) {
        setExpandedTrack(null);
      }
    }
  };

  const toggleSource = (trackId: TrackType, source: string) => {
    setEntry((prev) => {
      const currentSources = prev.tracks[trackId].selectedSources;
      const newSources = currentSources.includes(source)
        ? currentSources.filter((s) => s !== source)
        : [...currentSources, source];

      return {
        ...prev,
        tracks: {
          ...prev.tracks,
          [trackId]: {
            ...prev.tracks[trackId],
            selectedSources: newSources,
          },
        },
      };
    });
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const calculateAverage = () => {
    const values = Object.values(entry.tracks).map((t) => t.value);
    const sum = values.reduce((acc, val) => acc + val, 0);
    return (sum / values.length).toFixed(1);
  };

  const navigateDate = (days: number) => {
    setDirection(days);
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + days);
    const newDate = currentDate.toISOString().split('T')[0];
    setSelectedDate(newDate);
  };

  const isToday = selectedDate === today;

  const getHistoricalEntries = (count: number = 7) => {
    const entries: DailyEntry[] = [];
    const currentDate = new Date(selectedDate);

    for (let i = 1; i <= count; i++) {
      const pastDate = new Date(currentDate);
      pastDate.setDate(pastDate.getDate() - i);
      const dateStr = pastDate.toISOString().split('T')[0];
      const stored = localStorage.getItem(`entry-${dateStr}`);
      if (stored) {
        entries.push(JSON.parse(stored));
      }
    }

    return entries;
  };

  return (
    <div className="min-h-screen bg-[#fef9f5] pb-24">

      <div className='px-6 py-4'><LanguageSelector />
      </div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="top-0 sticky z-10 bg-[#fef9f5]/95 backdrop-blur-xl border-b border-gray-200/50"
      >
        <div className="max-w-2xl mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <AppIcon className="w-10 h-10" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t.app.subtitle}</p>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mt-2 leading-tight">
              {t.app.hello}
              <br />
              {t.app.question}{' '}
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                {t.app.currentState}
              </span>
              ?
            </h1>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2 shrink overflow-hidden">
                <button
                  onClick={() => navigateDate(-1)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
                  aria-label="Previous day"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 min-w-[140px] text-left truncate shrink">
                  {isToday && <span className="text-xs text-blue-600 font-medium mr-1">{t.app.today}</span>}
                  {formatDate(selectedDate)}
                </p>
                <button
                  onClick={() => navigateDate(1)}
                  disabled={isToday}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                  aria-label="Next day"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full text-nowrap shrink-0">
                {t.app.avg}: {calculateAverage()}/10
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 mt-8 space-y-6  bg-[#fef9f5]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            layout
            key={selectedDate}
            initial={{
              opacity: 0,
              x: direction > 0 ? 300 : -300
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -300 : 300
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="space-y-6"
          >
            {tracks.map((track, index) => (
              <motion.div
                className=' z-10 shadow-xl rounded-[2rem]'
                style={{
                  top: `${24 + index * 24}px`,
                }}
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 300, damping: 30 }}
              >
                <TemperatureSlider
                  track={track}
                  value={entry.tracks[track.id].value}
                  onChange={(value) => updateTrackValue(track.id, value)}
                />
                <SourcesSelector
                  track={track}
                  selectedSources={entry.tracks[track.id].selectedSources}
                  onToggle={(source) => toggleSource(track.id, source)}
                  show={entry.tracks[track.id].value >= 5 && expandedTrack === track.id}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`summary-${selectedDate}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="relative mt-12 p-8 bg-white rounded-[2rem] border-2 border-gray-200 shadow-xl z-20"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">{isToday ? t.app.todayOverview : t.app.dayOverview}</h3>
            </div>

            <RadarChart
              tracks={tracks}
              values={Object.fromEntries(
                tracks.map(track => [track.id, entry.tracks[track.id].value])
              )}
              historicalEntries={getHistoricalEntries(7)}
            />

            <StatsTable
              tracks={tracks}
              currentEntry={entry}
              historicalEntries={getHistoricalEntries(1)}
            />

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{t.app.overallAverage}</span>
                <motion.span
                  key={calculateAverage()}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-bold text-gray-900"
                >
                  {calculateAverage()}
                </motion.span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="p-6 bg-gray-50 rounded-2xl border border-gray-200"
        >
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">{t.app.tip}</span> {t.app.tipDetails}
          </p>
        </motion.div>
      </div>

      <SaveIndicator show={showSaveIndicator} />
    </div>
  );
}

export default App;
