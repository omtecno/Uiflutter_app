import { StatusBar } from './StatusBar';

interface MobileFrameProps {
  children: React.ReactNode;
  showStatusBar?: boolean;
  backgroundColor?: string;
}

export function MobileFrame({ children, showStatusBar = true, backgroundColor = 'white' }: MobileFrameProps) {
  return (
    <div 
      className="relative w-[390px] h-[844px] overflow-hidden shadow-2xl rounded-[40px] border-8 border-gray-800"
      style={{ backgroundColor }}
    >
      {showStatusBar && <StatusBar />}
      <div className="flex-1 h-full">
        {children}
      </div>
      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full" />
    </div>
  );
}
