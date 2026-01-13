import { ChatBubble } from '../components/ChatBubble';
import { ButtonPrimary } from '../components/ButtonPrimary';

interface IntroChatScreenProps {
  onContinue: () => void;
}

export function IntroChatScreen({ onContinue }: IntroChatScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col px-6 pt-32">
      <div className="flex-1 flex items-center justify-center pb-32">
        <ChatBubble mascotImage="owl">
          Just 7 quick questions before we start your first lesson
        </ChatBubble>
      </div>
      
      <div className="pb-20">
        <ButtonPrimary onClick={onContinue}>Continue</ButtonPrimary>
      </div>
    </div>
  );
}