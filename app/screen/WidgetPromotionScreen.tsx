import { ChatBubble } from '../components/ChatBubble';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { ProgressBar } from '../components/ProgressBar';

interface WidgetPromotionScreenProps {
  onAddWidget: () => void;
  onNotNow: () => void;
  progress: number;
}

export function WidgetPromotionScreen({ onAddWidget, onNotNow, progress }: WidgetPromotionScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        <ChatBubble mascotImage="owl">
          I'll cheer you on from your home screen!
        </ChatBubble>
        
        <div className="mt-8 w-48 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl p-4">
          <div className="bg-white rounded-2xl w-full h-full flex items-center justify-center">
            <div className="text-4xl">🦉</div>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-20 space-y-3">
        <ButtonPrimary onClick={onAddWidget}>Add Widget</ButtonPrimary>
        <ButtonPrimary onClick={onNotNow} variant="secondary">Not Now</ButtonPrimary>
      </div>
    </div>
  );
}