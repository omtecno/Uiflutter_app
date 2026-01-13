interface ProgressBarProps {
  progress: number; // 0-100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#4A90E2] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
