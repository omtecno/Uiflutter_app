export function StatusBar() {
  return (
    <div className="w-full h-11 flex items-center justify-between px-6 text-sm">
      <div className="text-gray-800">9:41</div>
      <div className="flex items-center gap-1">
        <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
          <rect x="0.5" y="0.5" width="15" height="11" rx="2" stroke="currentColor" />
          <rect x="2" y="2" width="12" height="8" fill="currentColor" />
        </svg>
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1 8a2 2 0 012-2h.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H3a2 2 0 01-2-2V8z" />
          <path d="M5.5 6a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H5a2 2 0 01-2-2V8a2 2 0 012-2h.5z" />
        </svg>
        <svg className="w-6 h-4" viewBox="0 0 24 12" fill="none">
          <rect x="0.5" y="0.5" width="18" height="11" rx="2" stroke="currentColor" />
          <rect x="20" y="4" width="1.5" height="4" rx="0.5" fill="currentColor" />
          <rect x="2" y="2" width="14" height="8" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
