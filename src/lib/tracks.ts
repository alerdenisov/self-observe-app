import type { Track } from './types';

export const tracks: Track[] = [
  {
    id: 'mood',
    name: 'Mood',
    color: '#ef4444', // Red
    gradient: 'from-red-500 to-red-300',
    sources: [
      'Joy',
      'Excitement',
      'Anxiety',
      'Sadness',
      'Anger',
      'Calm',
      'Frustration',
      'Gratitude',
    ],
  },
  {
    id: 'sleep',
    name: 'Sleep',
    color: '#f97316', // Orange
    gradient: 'from-orange-500 to-orange-300',
    sources: [
      'Insomnia',
      'Nightmares',
      'Restful',
      'Interrupted',
      'Deep sleep',
      'Early wake',
      'Drowsy',
    ],
  },
  {
    id: 'pressure',
    name: 'Pressure',
    color: '#eab308', // Yellow
    gradient: 'from-yellow-500 to-yellow-300',
    sources: [
      'Work stress',
      'Deadlines',
      'Relationships',
      'Financial',
      'Health concerns',
      'Social obligations',
      'Self-imposed',
    ],
  },
  {
    id: 'thinking',
    name: 'Thinking',
    color: '#22c55e', // Green
    gradient: 'from-green-500 to-green-300',
    sources: [
      'Clear',
      'Foggy',
      'Racing thoughts',
      'Creative',
      'Focused',
      'Distracted',
      'Ruminating',
      'Intrusive thoughts',
    ],
  },
  {
    id: 'reality',
    name: 'Reality',
    color: '#3b82f6', // Blue
    gradient: 'from-blue-500 to-blue-300',
    sources: [
      'Grounded',
      'Detached',
      'Present',
      'Dissociated',
      'Connected',
      'Spaced out',
      'Aware',
    ],
  },
  {
    id: 'motion',
    name: 'Motion',
    color: '#a855f7', // Violet
    gradient: 'from-purple-500 to-purple-300',
    sources: [
      'Active',
      'Restless',
      'Sluggish',
      'Energetic',
      'Tense',
      'Relaxed',
      'Fidgety',
      'Still',
    ],
  },
];
