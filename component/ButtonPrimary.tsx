interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function ButtonPrimary({ children, onClick, disabled = false, variant = 'primary' }: ButtonPrimaryProps) {
  const baseStyles = "w-full py-4 px-6 rounded-2xl uppercase tracking-wide transition-all duration-200";
  
  const variantStyles = variant === 'primary'
    ? "bg-[#4A90E2] text-white hover:bg-[#3A7BC8] active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed"
    : "bg-white text-gray-600 border-2 border-gray-300 hover:border-gray-400 active:scale-95 disabled:bg-gray-100 disabled:cursor-not-allowed";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles}`}
    >
      {children}
    </button>
  );
}
