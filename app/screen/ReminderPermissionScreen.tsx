import { ChatBubble } from '../components/ChatBubble';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { ProgressBar } from '../components/ProgressBar';

interface ReminderPermissionScreenProps {
  onAllow: () => void;
  onDeny: () => void;
  progress: number;
}

export function ReminderPermissionScreen({ onAllow, onDeny, progress }: ReminderPermissionScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        <ChatBubble mascotImage="owl">
          I'll remind you to practice so it becomes a habit!
        </ChatBubble>
        
        <div className="mt-8 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center shadow-lg">
          <div className="text-6xl">🔔</div>
        </div>
      </div>
      
      <div className="px-6 pb-20 space-y-3">
        <ButtonPrimary onClick={onAllow}>Allow</ButtonPrimary>
        <ButtonPrimary onClick={onDeny} variant="secondary">Don't Allow</ButtonPrimary>
      </div>
    </div>
  );
}