import { ChatBubble } from '../components/ChatBubble';
import { ButtonPrimary } from '../components/ButtonPrimary';

interface GreetingChatScreenProps {
  onContinue: () => void;
}

export function GreetingChatScreen({ onContinue }: GreetingChatScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col px-6 pt-32">
      <div className="flex-1 flex items-center justify-center pb-32">
        <ChatBubble mascotImage="owl">
          Hi, there!
        </ChatBubble>
      </div>
      
      <div className="pb-20">
        <ButtonPrimary onClick={onContinue}>Continue</ButtonPrimary>
      </div>
    </div>
  );
}