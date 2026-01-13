import { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { SelectableCard } from '../components/SelectableCard';
import { ButtonPrimary } from '../components/ButtonPrimary';

interface LanguageSelectionScreenProps {
  onContinue: (language: string) => void;
  progress: number;
}

const languages = [
  { name: 'Spanish', icon: '🇪🇸' },
  { name: 'French', icon: '🇫🇷' },
  { name: 'German', icon: '🇩🇪' },
  { name: 'Italian', icon: '🇮🇹' },
  { name: 'Japanese', icon: '🇯🇵' },
];

export function LanguageSelectionScreen({ onContinue, progress }: LanguageSelectionScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">🦉</div>
          <div>
            <h2 className="text-2xl text-gray-800 mb-1">What would you like to learn?</h2>
            <p className="text-sm text-gray-500">For English Speakers</p>
          </div>
        </div>
        
        <div className="space-y-3 pb-6">
          {languages.map((language) => (
            <SelectableCard
              key={language.name}
              selected={selectedLanguage === language.name}
              onClick={() => setSelectedLanguage(language.name)}
              icon={language.icon}
            >
              {language.name}
            </SelectableCard>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-20">
        <ButtonPrimary
          onClick={() => selectedLanguage && onContinue(selectedLanguage)}
          disabled={!selectedLanguage}
        >
          Continue
        </ButtonPrimary>
      </div>
    </div>
  );
}