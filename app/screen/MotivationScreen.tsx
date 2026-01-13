import { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { CheckboxCard } from '../components/CheckboxCard';
import { ButtonPrimary } from '../components/ButtonPrimary';

interface MotivationScreenProps {
  onContinue: (motivations: string[]) => void;
  progress: number;
  language: string;
}

const motivations = [
  { id: 'travel', label: 'Prepare for travel', icon: '✈️' },
  { id: 'career', label: 'Boost my career', icon: '💼' },
  { id: 'education', label: 'Support my education', icon: '🎓' },
  { id: 'connect', label: 'Connect with people', icon: '👥' },
  { id: 'fun', label: 'Just for fun', icon: '🎉' },
  { id: 'productive', label: 'Spend time productively', icon: '⏰' },
  { id: 'other', label: 'Other', icon: '💭' },
];

export function MotivationScreen({ onContinue, progress, language }: MotivationScreenProps) {
  const [selectedMotivations, setSelectedMotivations] = useState<string[]>([]);

  const toggleMotivation = (id: string) => {
    setSelectedMotivations((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <h2 className="text-2xl text-gray-800 mb-6">Why are you learning {language}?</h2>
        
        <div className="space-y-3 pb-6">
          {motivations.map((motivation) => (
            <CheckboxCard
              key={motivation.id}
              checked={selectedMotivations.includes(motivation.id)}
              onClick={() => toggleMotivation(motivation.id)}
              icon={motivation.icon}
            >
              {motivation.label}
            </CheckboxCard>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-20">
        <ButtonPrimary
          onClick={() => onContinue(selectedMotivations)}
          disabled={selectedMotivations.length === 0}
        >
          Continue
        </ButtonPrimary>
      </div>
    </div>
  );
}