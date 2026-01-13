interface ButtonSecondaryProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function ButtonSecondary({ children, onClick }: ButtonSecondaryProps) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 px-6 text-gray-500 uppercase tracking-wide text-sm hover:text-gray-700 transition-colors"
    >
      {children}
    </button>
  );
}
