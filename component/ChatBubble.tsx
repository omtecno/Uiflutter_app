interface ChatBubbleProps {
  children: React.ReactNode;
  mascotImage?: string;
}

export function ChatBubble({ children, mascotImage }: ChatBubbleProps) {
  return (
    <div className="flex flex-col items-center gap-4 px-6">
      {mascotImage && (
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
          <div className="w-20 h-20 rounded-full bg-[#2C3E50] flex items-center justify-center">
            <div className="text-4xl">🦉</div>
          </div>
        </div>
      )}
      <div className="relative bg-white rounded-3xl px-6 py-4 shadow-lg max-w-[280px]">
        <div className="text-gray-800 text-center">
          {children}
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white"></div>
      </div>
    </div>
  );
}
