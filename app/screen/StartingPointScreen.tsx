import { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { SelectableCard } from '../components/SelectableCard';
import { ButtonPrimary } from '../components/ButtonPrimary';

interface StartingPointScreenProps {
  onContinue: (startingPoint: 'scratch' | 'placement') => void;
  progress: number;
}

export function StartingPointScreen({ onContinue, progress }: StartingPointScreenProps) {
  const [selectedOption, setSelectedOption] = useState<'scratch' | 'placement' | null>(null);

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <h2 className="text-2xl text-gray-800 mb-6">Where would you like to start?</h2>
        
        <div className="space-y-3 pb-6">
          <SelectableCard
            selected={selectedOption === 'scratch'}
            onClick={() => setSelectedOption('scratch')}
            icon="🌟"
          >
            Start from scratch
          </SelectableCard>
          
          <SelectableCard
            selected={selectedOption === 'placement'}
            onClick={() => setSelectedOption('placement')}
            icon="🎯"
          >
            Find my starting place
          </SelectableCard>
        </div>
      </div>
      
      <div className="px-6 pb-20">
        <ButtonPrimary
          onClick={() => selectedOption && onContinue(selectedOption)}
          disabled={!selectedOption}
        >
          Continue
        </ButtonPrimary>
      </div>
    </div>
  );
}