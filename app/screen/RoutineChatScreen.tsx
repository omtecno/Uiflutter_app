import { ChatBubble } from '../components/ChatBubble';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { ProgressBar } from '../components/ProgressBar';

interface RoutineChatScreenProps {
  onContinue: () => void;
  progress: number;
}

export function RoutineChatScreen({ onContinue, progress }: RoutineChatScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 flex items-center justify-center px-6 pb-32">
        <ChatBubble mascotImage="owl">
          Let's set up a learning routine!
        </ChatBubble>
      </div>
      
      <div className="px-6 pb-20">
        <ButtonPrimary onClick={onContinue}>Continue</ButtonPrimary>
      </div>
    </div>
  );
}