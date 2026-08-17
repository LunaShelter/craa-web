interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  showLabel?: boolean;
  height?: 'sm' | 'md' | 'lg';
}

export default function ProgressBar({
  value,
  max,
  color = '#2BC4B5',
  showLabel = true,
  height = 'md',
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  const heights = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-2 text-sm font-medium text-gray-600">
          <span>S/ {value.toLocaleString('es-PE')}</span>
          <span className="font-bold" style={{ color }}>{percentage}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-100 rounded-full overflow-hidden ${heights[height]}`}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%`, backgroundColor: color }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}
