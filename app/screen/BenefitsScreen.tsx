import { ButtonPrimary } from '../components/ButtonPrimary';
import { ProgressBar } from '../components/ProgressBar';

interface BenefitsScreenProps {
  onContinue: () => void;
  progress: number;
}

const benefits = [
  { icon: '💬', title: 'Converse with confidence', description: 'Speak naturally in real conversations' },
  { icon: '📚', title: 'Build a large vocabulary', description: 'Learn 500+ words and phrases' },
  { icon: '✨', title: 'Develop a learning habit', description: 'Make language learning part of your routine' },
];

export function BenefitsScreen({ onContinue, progress }: BenefitsScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <h2 className="text-2xl text-gray-800 mb-6">Here's what you can achieve in 3 months!</h2>
        
        <div className="space-y-4 pb-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 shadow-sm"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-xl text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-20">
        <ButtonPrimary onClick={onContinue}>Continue</ButtonPrimary>
      </div>
    </div>
  );
}