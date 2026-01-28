export type TrackType = 'mood' | 'sleep' | 'pressure' | 'thinking' | 'reality' | 'motion';

export interface Track {
  id: TrackType;
  name: string;
  color: string;
  gradient: string;
  sources: string[];
}

export interface DailyEntry {
  date: string;
  tracks: {
    [key in TrackType]: {
      value: number;
      selectedSources: string[];
    };
  };
}
