import { motion } from 'motion/react';
import type { Track, DailyEntry } from '@/lib/types';

interface RadarChartProps {
  tracks: Track[];
  values: { [key: string]: number };
  historicalEntries?: DailyEntry[];
}

export function RadarChart({ tracks, values, historicalEntries = [] }: RadarChartProps) {
  const size = 300;
  const center = size / 2;
  const maxRadius = size / 2 - 40;
  const levels = 5;

  // Calculate angle for each point (360 / 6 = 60 degrees)
  const angleStep = (Math.PI * 2) / tracks.length;

  // Convert polar to cartesian coordinates
  const getPoint = (angle: number, radius: number) => {
    const x = center + radius * Math.cos(angle - Math.PI / 2);
    const y = center + radius * Math.sin(angle - Math.PI / 2);
    return { x, y };
  };

  // Generate polygon points for data (inverted: 10 = center, 0 = edge)
  const dataPoints = tracks.map((track, index) => {
    const angle = angleStep * index;
    const value = values[track.id] || 0;
    const radius = ((10 - value) / 10) * maxRadius;
    return getPoint(angle, radius);
  });

  const dataPath = dataPoints
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ') + ' Z';

  return (
    <div className="flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background levels */}
        {Array.from({ length: levels }, (_, i) => {
          const levelRadius = maxRadius * ((i + 1) / levels);
          const levelPoints = tracks.map((_, index) => {
            const angle = angleStep * index;
            return getPoint(angle, levelRadius);
          });
          
          const levelPath = levelPoints
            .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
            .join(' ') + ' Z';

          return (
            <path
              key={i}
              d={levelPath}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
              opacity={0.5}
            />
          );
        })}

        {/* Axis lines */}
        {tracks.map((track, index) => {
          const angle = angleStep * index;
          const endPoint = getPoint(angle, maxRadius);
          return (
            <line
              key={track.id}
              x1={center}
              y1={center}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke={track.color}
              strokeWidth="1"
              opacity={0.5}
            />
          );
        })}

        {/* Historical data shadows */}
        {historicalEntries.map((entry, entryIndex) => {
          const historicalPoints = tracks.map((track, index) => {
            const angle = angleStep * index;
            const value = entry.tracks[track.id]?.value || 0;
            const radius = ((10 - value) / 10) * maxRadius;
            return getPoint(angle, radius);
          });

          const historicalPath = historicalPoints
            .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
            .join(' ') + ' Z';

          const opacity = Math.max(0.5, 0.8 - (entryIndex * 0.03));

          return (
            <g key={`historical-${entry.date}`}>
              <path
                d={historicalPath}
                fill="none"
                stroke="#9ca3af"
                strokeWidth="1.5"
                opacity={opacity}
                strokeDasharray="4 2"
              />
            </g>
          );
        })}

        {/* Data polygon with gradient fill */}
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a8c5e8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#9db39a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f4e3a4" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Create gradient for each segment */}
          {dataPoints.map((point, index) => {
            const nextPoint = dataPoints[(index + 1) % dataPoints.length];
            const currentTrack = tracks[index];
            const nextTrack = tracks[(index + 1) % tracks.length];
            
            return (
              <linearGradient
                key={`segment-gradient-${index}`}
                id={`segment-gradient-${index}`}
                x1={point.x}
                y1={point.y}
                x2={nextPoint.x}
                y2={nextPoint.y}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor={currentTrack.color} />
                <stop offset="100%" stopColor={nextTrack.color} />
              </linearGradient>
            );
          })}
        </defs>

        {/* Fill */}
        <motion.path
          d={dataPath}
          fill="url(#radarGradient)"
          stroke="none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />

        {/* Colored gradient strokes for each segment */}
        {dataPoints.map((point, index) => {
          const nextPoint = dataPoints[(index + 1) % dataPoints.length];
          return (
            <motion.line
              key={`segment-${index}`}
              x1={point.x}
              y1={point.y}
              x2={nextPoint.x}
              y2={nextPoint.y}
              stroke={`url(#segment-gradient-${index})`}
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                delay: index * 0.08,
                duration: 0.4,
                type: 'spring',
                stiffness: 300,
                damping: 25
              }}
            />
          );
        })}

        {/* Data points */}
        {dataPoints.map((point, index) => {
          const track = tracks[index];
          
          return (
            <motion.circle
              key={track.id}
              cx={point.x}
              cy={point.y}
              r="8"
              fill={track.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 400, damping: 20 }}
            />
          );
        })}

        {/* Labels */}
        {tracks.map((track, index) => {
          const angle = angleStep * index;
          const labelRadius = maxRadius + 25;
          const labelPoint = getPoint(angle, labelRadius);
          
          return (
            <text
              key={`label-${track.id}`}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-medium fill-gray-700"
            >
              {track.name}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
