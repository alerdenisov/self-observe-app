interface StatusDotProps {
  status: 'low' | 'medium' | 'high';
  size?: number;
}

export function StatusDot({ status, size = 16 }: StatusDotProps) {
  const colors = {
    low: { base: '#8ba888', shadow: '#6a8867', glare: '#a8c5a0' },
    medium: { base: '#f4e3a4', shadow: '#d4c384', glare: '#fff9dc' },
    high: { base: '#e9a196', shadow: '#c98176', glare: '#ffbfb3' },
  };

  const color = colors[status];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <circle cx="12" cy="13" r="9" fill={color.shadow} opacity="0.6" />
      
      {/* Base */}
      <circle cx="12" cy="12" r="9" fill={color.base} />
      
      {/* Glare */}
      <circle cx="9" cy="9" r="3.5" fill={color.glare} opacity="0.8" />
      <circle cx="8" cy="8" r="2" fill="white" opacity="0.6" />
    </svg>
  );
}
