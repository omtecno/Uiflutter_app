interface CheckboxCardProps {
  children: React.ReactNode;
  checked: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function CheckboxCard({ children, checked, onClick, icon }: CheckboxCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-full p-4 rounded-2xl border-2 border-gray-300 bg-white cursor-pointer hover:border-gray-400 transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        {icon && <div className="text-2xl">{icon}</div>}
        <div className="flex-1 text-gray-800">{children}</div>
        <div
          className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
            checked ? 'border-[#4A90E2] bg-[#4A90E2]' : 'border-gray-300'
          }`}
        >
          {checked && (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
