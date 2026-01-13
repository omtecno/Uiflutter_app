import { ButtonPrimary } from '../components/ButtonPrimary';
import { ButtonSecondary } from '../components/ButtonSecondary';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export function WelcomeScreen({ onGetStarted, onSignIn }: WelcomeScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col items-center px-6 pt-20">
      <div className="flex-1 flex flex-col items-center justify-center pb-20">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl mb-8">
          <div className="w-28 h-28 rounded-full bg-[#2C3E50] flex items-center justify-center">
            <div className="text-6xl">🦉</div>
          </div>
        </div>
        <h1 className="text-4xl text-gray-800 mb-3">TalkPro</h1>
        <p className="text-gray-600 text-lg">Learn for free. Forever.</p>
      </div>
      
      <div className="w-full pb-20 space-y-3">
        <ButtonPrimary onClick={onGetStarted}>Get Started</ButtonPrimary>
        <ButtonSecondary onClick={onSignIn}>I already have an account</ButtonSecondary>
      </div>
    </div>
  );
}